const Router = require("express")
const bcrypt = require("bcryptjs")
const User = require('../models/User')
const { check, validationResult } = require("express-validator")

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

            const hasPassword = await bcrypt.hash(password, 15)
            const user = new User({ email, password: hasPassword })
            await user.save()
            return res.json({ message: "User was created successfully" })
        } catch (error) {
            console.log(error)
            res.send({ message: "Server Error" })
        }
    })

module.exports = router