import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing routers
import userRouter from './routes/user.routes.js';


// using routers
app.use('/api/v1/users', userRouter);


export default app;


