import express from 'express';
import { userInfo } from "../data/user-info.js";

const userRouter = express.Router();

// Define the route for getting user information
userRouter.get('/api/user', (_, res) => {
    res.status(200).json({
        msg: "User information retrieved successfully",
        data: userInfo
    });
});

export default userRouter;
