const express = require('express')
const router = express.Router()

const {addtask, gettask, gettaskbyid,updatetaskbyid, deletetaskbyid} = require("../controllers/taskcontroller")
const authMiddleware = require("../middleware/auth")

router.post('/addtask', authMiddleware, addtask)

router.get('/gettask', authMiddleware, gettask)

router.get('/:id', authMiddleware, gettaskbyid)

router.put('/update/:id', authMiddleware, updatetaskbyid)

router.delete('/delete/:id', authMiddleware, deletetaskbyid)

module.exports = router;
