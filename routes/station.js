const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/info', async (req, res) => {
    const station = req.body.payload;
    const sql = `SELECT *, 
                        (SELECT ROUND(AVG((flavor + atmosphere + cheap + service)/4), 1) 
                            FROM review
                            WHERE react.review.sidx = react.shop.idx) AS average
                    FROM shop 
                    WHERE station='${station}'`;
    try {
        const [result] = await pool.execute(sql);
        res.json(result);
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;
