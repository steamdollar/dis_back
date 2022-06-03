const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/protein', async (req, res) => {
    const sql = `SELECT *, 
                    (SELECT ROUND(AVG((flavor + atmosphere + cheap + service)/4), 1) 
                        FROM review
                        WHERE react.review.sidx = react.shop.idx) AS average 
                FROM shop 
                WHERE protein='Y'`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/photo', async (req, res) => {
    const sql = `SELECT *,
                    (SELECT ROUND(AVG((flavor + atmosphere + cheap + service)/4), 1) 
                        FROM review
                        WHERE react.review.sidx = react.shop.idx) AS average 
                FROM shop 
                WHERE photo='Y'`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/unique', async (req, res) => {
    const sql = `SELECT *, 
                    (SELECT ROUND(AVG((flavor + atmosphere + cheap + service)/4), 1) 
                        FROM review
                        WHERE react.review.sidx = react.shop.idx) AS average 
                FROM shop 
                WHERE special='Y'`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/parking', async (req, res) => {
    const sql = `SELECT *,
                    (SELECT ROUND(AVG((flavor + atmosphere + cheap + service)/4), 1) 
                        FROM review
                        WHERE react.review.sidx = react.shop.idx) AS average
                FROM shop 
                WHERE parking='Y'`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;