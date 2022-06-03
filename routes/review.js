const express = require('express')
const router = express.Router()
const { pool } = require('../db.js')

const createReview = async (req, res) => {
    const { email, text, number, sidx, name } = req.body
    const { flavor, atmosphere, cheap, service } = number
    const sql = `insert into review(sidx, storename, email, flavor, atmosphere, cheap, service, text) 
        values(?, ?, ?, ?,?,?,?,?)`
    const param = [sidx, name, email, flavor, atmosphere, cheap, service, text]

    try {
        const result = await pool.execute(sql, param)
        const response = {
            errno : 0,
            result
        }
        res.json(response)
    }
    catch (e) {
        console.log(e)
        const response = {
            errno : 1
        }
        res.json(response)
    }
}

const deleteReview = async (req, res) => {
    const { idx } = req.body
    const sql = `delete from review where idx=?`
    const param = [idx]

    try {
        const result = await pool.execute(sql, param)
        const response = {
            errno : 0,
            result
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

const updateReview = async (req, res) => {
    const { text, idx, flavor, cheap, atmosphere, service } = req.body
    const sql = `update review set text=?, flavor=?, cheap=?, atmosphere=?, service=? where idx=?`
    const param = [text, flavor, cheap, atmosphere, service, idx]

    try {
        const result = await pool.execute(sql, param)
        const response = {
            errno: 0,
            result
        }
        res.json(response)
    }
    catch (e) {
        console.log(e)
        const response = {
            errno:1
        }
        res.json(response)
    }
}

const getStore = async (req, res) => {
    const { sidx } = req.body
    const sql = `select name from shop where idx=?`
    const param = [sidx]

    try {
        const result = await pool.execute(sql, param)
        const response = {
            result: result[0]
        }
        res.json(response)
    }
    catch (e) {
        console.log(e)
        const response = {
            errno :1
        }
        res.json(response)
    }
}

router.use('/getStore', getStore)
router.use('/createReview', createReview)
router.use('/deleteReview', deleteReview)
router.use('/updateReview', updateReview)

module.exports = router