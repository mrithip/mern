const express = require('express')
const router = express.Router()

const {addtask, gettask} = require("../controllers/taskcontroller")
const authMiddleware = require("../middleware/auth")

router.post('/addtask', authMiddleware, addtask)

router.get('/gettask', authMiddleware, gettask)

module.exports = router;
