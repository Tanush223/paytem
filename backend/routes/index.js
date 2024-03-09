const express = require('express')
const UserRouter = require('./user.route')
const AcountRouter = require('./accounts.route')
const router = express.Router()

router.use('/user',UserRouter)
router.use('/account',AcountRouter)

module.exports=router