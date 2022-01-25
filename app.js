	
/* app.js */
 
import express from "express";
	
import morgan from "morgan";

import helmet from "helmet";
 
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
 
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("홈 화면입니다.");
const handleProfile = (req, res) => res.send("프로필 화면입니다!");
  


const betweenHome = (req,res,next) => {
    console.log("중간에 있어요!");
    next();
}

// app.use(betweenHome);
	
app.use(morgan("short"));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);

export default app;