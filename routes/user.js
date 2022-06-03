const express = require('express')
const router = express.Router()
const { pool } = require('../db.js')
const qs = require('qs')
const axios = require('axios')
const { backend, frontend } = require('../utils/ip.js')

const client_id = 'bcc6575307f03520e0cd6a242a769d2f' // REST API
const host = 'https://kauth.kakao.com'
const redirect_uri = `${backend}/user/oauth/kakao`
const client_secret = process.env.CLIENT_SECRET
const redirect_URI = host + `/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
const { createToken } = require('../utils/jwt.js')

const userCookie = ''

const klogin = (req, res) => {
    const kakaoAuth = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    res.redirect(kakaoAuth)
}

const kauth = async(req, res) => {
    const code = req.query.code
    const token_url = 'https://kauth.kakao.com/oauth/token'
    const headers = {
        'Content-type': 'application/x-www-form-urlencoded'
    }
    const body = qs.stringify({
        grant_type:'authorization_code',
        client_id,
        redirect_uri,
        code,
        client_secret
    })
    const response = await axios.post(token_url, body, headers)

    try {
        const { access_token } = response.data
        const url = 'https://kapi.kakao.com/v2/user/me'
        const userinfo = await axios.get(url, {
            headers:{
                'Authorization':`Bearer ${access_token}`
            }
        })

        const nickname = userinfo.data.kakao_account.profile.nickname
        const email = userinfo.data.kakao_account.email
        const tempInfo = {nickname, email}
        const jwt_token = createToken({...tempInfo})
        res.cookie('dount', jwt_token, {
            path:'/',
            httpOnly:true
        })

        res.redirect(`${frontend}?nickname=${nickname}&email=${email}`)
    }
    catch (e) {
        console.log(e.message)
    }

}

const klogout = (req, res) => {
    res.send(`<script>alert('로그아웃 되었습니다.')</script>`)
}

const getReview = async (req, res) => {
    const { email } = req.body
    const sql = `select * from review where email=?`
    const sql2 = `select * from register where email=?`;
    const param = [email]
    try {
        const [ result ] = await pool.execute(sql, param)
        const [ result2 ] = await pool.execute(sql2, param)

        const response = {
            errno:0,
            result,
            result2
        }
        res.json(response)
    }
    catch (e) {
        console.log(e)
        const response = {
            errno: 1
        }
        res.json(response)
    }
}

router.use('/klogin', klogin)
router.use('/oauth/kakao', kauth)
router.use('/klogout', klogout)
router.use('/getReview', getReview)

module.exports = router