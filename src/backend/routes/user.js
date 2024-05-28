const express = require("express");
const router = express.Router();

// router.get("/", (req,res) => {
//     res.send("hello world");
// });

//register
router.post("/register", async (req, res) => {
    const { name, lastName, email, password} = req.body;
    try {
      const newUser = new User({name, lastName, email, password});
      //save the user
      await newUser.save();
      res.status(200).send({ newUser, msg: "user is saved"});
    } catch (error) {
        res.status(500).send("can not save the user");
    }
});

module.exports = router;