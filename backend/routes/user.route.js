const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User } = require('../models/user.model');
const jwt = require('jsonwebtoken');
const jwt_Secret = 'secret';
const  { authMiddleware } = require("./middleware");
const { Account } = require('../models/account.model');


const signupBody = zod.object({
    username: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(), 
    password: zod.string()
});

const signinBody = zod.object({
    username: zod.string(),
    password: zod.string(),
})

const updateBody = zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string(),
})

router.post('/signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            message: 'Incorrect inputs'
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser) {
        return res.status(411).json({
            message: 'Incorrect inputs'
        });
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname 
    });

    const userId = user._id;

     await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, jwt_Secret);

    res.json({
        message: 'User created successfully',
        token: token
    });
});

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, jwt_Secret);
  
        res.json({
            token: token
        })
        return;    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

router.put("/",authMiddleware,async (req, res) => {
    const { success } = updateBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        });
    }

    try {
        await User.updateOne({ id: req.userId }, req.body);
        
        res.json({
            message: "Updated successfully"
        });
    } catch (error) {
        console.error("Error while updating user:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});


router.get("/bulk",authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;
