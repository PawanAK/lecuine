const router = require('express').Router();

const User = require('../models/userModel');

// sign up
router.post('/register', async (req, res) => {
    try {
        const { email, userName, password } = req.body;

        // Create a new user instance
        const user = new User({ email, userName, password });

        // Save the user to the database
        await user.save();

        // Respond with the created user details
        res.status(200).json({ email, userName, password });
    } catch (error) {
        // Handle errors
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
