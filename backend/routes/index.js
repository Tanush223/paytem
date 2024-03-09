const express = require('express');
const userRouter = require('./user.route'); // Change to camelCase for consistency
const accountRouter = require('./accounts.route'); // Change to camelCase for consistency

const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountRouter);

module.exports = router;