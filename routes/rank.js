const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/total', async (req, res) => {
    const sql = `SELECT *, 
                        (SELECT (AVG(flavor) + AVG(atmosphere) + AVG(cheap) + AVG(service)) 
                            FROM review 
                            WHERE shop.idx = review.sidx 
                            GROUP BY sidx) AS avg_total
                    FROM shop
                    ORDER BY avg_total DESC
                    LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
})

router.post('/flavor', async (req, res) => {
    const sql = `SELECT *, (SELECT AVG(flavor) FROM review WHERE shop.idx = review.sidx) AS avg_flavor
                    FROM shop
                    ORDER BY avg_flavor DESC
                    LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/atmosphere', async (req, res) => {
    const sql = `SELECT *, (SELECT AVG(atmosphere) FROM review WHERE shop.idx = review.sidx) AS avg_atmosphere
                    FROM shop
                    ORDER BY avg_atmosphere DESC
                    LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/cheap', async (req, res) => {
    const sql = `SELECT *, (SELECT AVG(cheap) FROM review WHERE shop.idx = review.sidx) AS avg_cheap
                    FROM shop
                    ORDER BY avg_cheap DESC
                    LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/service', async (req, res) => {
    const sql = `SELECT *, (SELECT AVG(service) FROM review WHERE shop.idx = review.sidx) AS avg_service
                    FROM shop
                    ORDER BY avg_service DESC
                    LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;