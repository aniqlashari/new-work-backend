const express = require("express") 
const app = express()
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://mahaqamber3:aniq123@cluster0.sbmat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((data) => {
    console.log("Mongoodb Connected")
}).catch((err) => {
    console.log("Mongoodb Disconnected")
})

const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    contactNumber: {
        type: Number
    }
})
const userModel = mongoose.model("User", userSchema)


app.post("/users", async (request, response) => {
    const user = userModel({
        username: "aniq lashari",
        password: "aniq123",
        email: "aniq lashari@gmail.com",
        contactNumber: 9879332874928
    })
    await user.save()
    response.send("data saved")
})



app.listen(4000, function () {
    console.log("Server is listening")
})
