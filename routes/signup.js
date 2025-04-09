const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    
    console.log("Received signup data:", firstname, lastname, username, password);

    // TODO: Store user details in MongoDB or another database
    res.status(200).json({ message: "User registered successfully!" });
});

module.exports = router;
