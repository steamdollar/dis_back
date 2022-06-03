require('dotenv').config()
const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');
const nodeMailer = require('nodemailer')


const mailPoster = nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth : {
        user : 'dountzzangzzang123@gmail.com',
        pass : 'dount1994!'
    }
})

const mailOpt = (user_data, title, contents) => {
    const mailOptions = {
        from: 'dountzzangzzang123@gmail.com',
        to : user_data,
        subject : title,
        text : `요청하신 상점 : ${contents}가 등록되었습니다.`
    }
    return mailOptions;
}

const sendMail = (mailOption) => {
    mailPoster.sendMail(mailOption, function(error, info) {
        if(error) { console.log(error) }
        else {
            console.log('전송 완료' + info.response)
        }
    })
}

router.post('/join', async (req, res) => {
    const { name, address, email, sns } = req.body.payload;
    let { menu } = req.body.payload;
    if (menu[1] === '' && menu[2] === '') menu = menu[0];
    else if (menu[2] === '') menu = menu[0] + ',' + menu[1];
    else menu = menu[0] + ',' + menu[1] + ',' + menu[2];

    const sql = `INSERT INTO register(store, menu, address, email, sns) values('${name}', '${menu}', '${address}', '${email}', '${sns}')`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        const response = {
            error: e.message
        };
        res.json({response});
    }
});

router.use('/request', async (req,res) => {
    const { storename, email } = req.body
    // console.log(storename)
    try {
        const mailOption = mailOpt(email,'new request', storename)
        sendMail(mailOption)
        const response = {
            status: 'success'
        }
        res.json(response)
    }
    catch (e) {
        console.log(e)
        const response = {
            status : 'failed'
        }
        res.json(response)
    }
})

module.exports = router;