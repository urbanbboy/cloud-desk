const Router = require("express")
const bcrypt = require("bcryptjs")
const User = require('../models/User')
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken')
const config = require('config')

const router = Router()

router.post(
    '/registration',
    [
        check("email", "Uncorrect email").isEmail(),
        check("password", "Password must be longer than 3 and shorter than 12").isLength({ min: 3, max: 12 })
    ],
    async (req, res) => {
        try {
            console.log(req.body)
            const errors = validationResult(req)
            if (!errors.isEmpty) {
                return req.status(400).json({ message: 'Uncorrect request', errors })
            }

            const { email, password } = req.body

            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.json({ message: `User with email ${email} already exist` })
            }

            const hasPassword = await bcrypt.hash(password, 8)
            const user = new User({ email, password: hasPassword })
            await user.save()
            return res.json({ message: "User was created successfully" })
        } catch (error) {
            console.log(error)
            res.send({ message: "Server Error" })
        }
    })

router.post(
    '/login',
    async (req, res) => {
        try {
            const { email, password } = req.body
            console.log(req.body)
            const user = await User.findOne({ email })
            console.log(user)
            if (!user) {
                return res.status(400).json({ message: "User not found" })
            }

            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({ message: "Invalid password" })
            }
            //1param - ogject with data, 2 - secret key, 3 - token expiration time
            const token = jwt.sign({ id: user.id }, config.get("secretKey"), { expiresIn: '1h' })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (error) {
            console.log(error)
            res.send({ message: "Server Error" })
        }
    })

module.exports = router