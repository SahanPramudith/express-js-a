import express from 'express';
import DB from '../db/db.mjs';
import { userInfo } from "../data/user-info.js";

const userRouter = express.Router();

// Define the route for getting user information
userRouter.get('/api/user', (_, res) => {
    res.status(200).json({
        msg: "User information retrieved successfully",
        data: userInfo
    });
});

userRouter.post('/api/create-user', async (req, res) => {
    const userdata = req.body;
    console.log(userdata);
    try {
        const createUser = await DB.User.create({ data: userdata });
        return res.status(201).json({ createUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }

});

export default userRouter;
