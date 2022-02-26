const express = require('express')
const router = express.Router()
const {
    registerUser,
     loginUser,
     getMe
} = require ('../controllers/userController')
const {protect} =require('../midleware/authMidleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/me',protect, getMe)

module.exports = router