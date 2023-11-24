const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors = require("cors")

const app = express()
const PORT = config.get('serverPort')
const authRouter = require('./routes/auth.routes')

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)

const start = async () => {;
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log('Server started at port: ', PORT)
        })
    } catch (error) {
        console.log(error)
    }
}

start()