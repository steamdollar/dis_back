require('dotenv').config()
const mysql = require('mysql2')
// 이상태로 냅둬주세요
const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'donut'
const password = process.env.DB_PASSWORD || '11111111'
const database = process.env.DB_DATABASE || 'react'

const config = { host, user, password, database }
const pool = mysql.createPool(config)
const promisePool = pool.promise()

exports.pool = promisePool