import express from 'express';
import DB from '../db/db.mjs';
import { userInfo } from "../data/user-info.js";

const userRouter = express.Router();

// Define the route for getting user information
userRouter.get('/api/user', async (_, res) => {

    try {
        const allUsers = await DB.User.findMany();
        res.status(200).json({
            msg: "User information retrieved successfully",
            data: allUsers,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }

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

userRouter.put('/api/update-user/:id', async (req, res) => {
    const { id } = req.params;
    const userdata = req.body;

    if (id === undefined || id === null) {
        return res.status(400).json({ msg: "User ID is required" });
    }

    try {
        const updateUser = await DB.User.update({
            where: {
                id: Number(id),
            },
            data: userdata,
        });
        return res.status(200).json({
            msg: "User information updated successfully",
            data: updateUser,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});

export default userRouter;
