import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors  from 'cors';
import morgan from 'morgan';
import errorHandle from './server/middlewares/authHandle.js';
import authRoutes from './server//routes/authRoute.js';
import taskRoutes from './server//routes/taskRoute.js';
import connectDB from './config/dbConn.js';
import helmet from 'helmet';
import xss from 'xss-clean';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';

const app = express();
dotenv.config();
 connectDB();

// middleware
app.use(helmet());
app.use(xss());
app.use(ExpressMongoSanitize());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use("/api/v1/", authRoutes);
app.use("/api/v1/", taskRoutes);
// app.get('/',async(req,res) =>{
//   res.send('<h4> Home page </h4>')
// })
app.use(errorHandle);
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`.bgCyan.white);
// });

app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.white);
});

