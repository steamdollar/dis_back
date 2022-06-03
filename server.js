const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const upload = require('./utils/upload.js')
const cors = require('cors');
const multer = require('multer')
const app = express();
const {frontend} = require('./utils/ip.js')

const PORT = process.env.PORT || 4000;
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'donut';

const userRouter = require('./routes/user');
const commentRouter = require('./routes/comment');
const shopRouter = require('./routes/shop.js');
const registerRouter = require('./routes/register.js');
const themeRouter = require('./routes/theme.js');
const rankRouter = require('./routes/rank.js');
const adminRouter = require('./routes/admin.js');
const reviewRouter = require('./routes/review.js')
const stationRouter = require('./routes/station.js');

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(COOKIE_SECRET));

app.use(cors({
    origin: [`${frontend}`],
    credentials: true,
}));

app.use('/user', userRouter);
// app.use('/comment', commentRouter);
app.use('/shop', shopRouter)
app.use('/register', registerRouter);
app.use('/theme', themeRouter);
app.use('/rank', rankRouter);
app.use('/dt/admin/menu', adminRouter)
app.use('/review', reviewRouter)
app.use('/station', stationRouter);

app.listen(PORT, ()=>{
    console.log(`back server 4000`);
});