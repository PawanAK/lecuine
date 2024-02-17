const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

// sign up
router.post('/register', async (req, res) => {
    try {
        const { email, userName, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({ email, userName, password: hashedPassword });

        // Save the user to the database
        await user.save()

        // Respond with the created user details
        res.status(201).json({ user });

    } catch (error) {
        // Handle errors
        res.status(400).json({ message: "user already exist" });
    }
});

//Sign in

router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "Plz register first" });
        }

        const isPasswordCorrect = await bcrypt.compareSync(req.body.password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const { password, ...others } = user._doc;
        res.status(200).json({ others });
    } catch (error) {
        res.status(500).json({ message: "user Not Found" });
    }
});

module.exports = router;
