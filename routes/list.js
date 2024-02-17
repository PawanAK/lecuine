const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');

router.post('/addTask', async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save();
            existingUser.list.push(list);
            await existingUser.save();
            res.status(200).json({ list });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.put('/updateTask/:id', async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const list = await List.findByIdAndUpdate(req.params.id, { title, body });
            list.save().then(() => { res.status(200).json({ message: "Task updated" }) });
        }
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;
