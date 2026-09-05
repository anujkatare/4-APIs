import express from 'express';
import DBconnect from './db.js';
import cookieParser from 'cookie-parser';
import Signup from './routes/signup.routes.js';
import Profile from './routes/auth.routes.js';
import Login from './routes/login.routes.js';
import TokenRefresh from './routes/refreshToken.routes.js';
import Logout from './routes/logout.routes.js';

const PORT = 3000;
const app = express();

await DBconnect();

app.use(express.json());
app.use(cookieParser());

app.use('/api/signup', Signup);
app.use('/api/login', Login);
app.use('/api/profile', Profile);
app.use('/api/token/refresh', TokenRefresh);
app.use('/api/logout', Logout);

app.listen(PORT, ()=>{
    console.log(`app is running on ${PORT}`);
})