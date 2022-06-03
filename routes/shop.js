const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/:idx', async (req, res) => {
    const idx = req.body.payload;
    const sql = `SELECT * FROM shop WHERE idx=${idx}`;
    const sql2 = `SELECT * FROM review WHERE sidx=${idx}`;
    const sql3 = `SELECT ROUND(AVG(flavor/4 + atmosphere/4 + cheap/4 + service/4), 1) AS average FROM review WHERE sidx=${idx}`;
    try {
        const [[result]] = await pool.execute(sql);
        const [result2] = await pool.execute(sql2);
        const [[result3]] = await pool.execute(sql3);
        const response = {
            info: result, 
            review: result2,
            avg: result3
        };
        res.json(response);
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;