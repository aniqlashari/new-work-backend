const express = require("express") 
const app = express()
const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://mahaqamber3:aniq123@cluster0.sbmat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((data) => {
    console.log("Mongoodb Connected")
}).catch((err) => {
    console.log("Mongoodb Disconnected")
})

const userSchema = mongoose.Schema({
    pcname: {
        type: String,
    },
     pcpassword: {
        type: String,
    },
    server: {
        type: String,
    },
   
  removeEventListener: {
        type: Number
    }
})
const userModel = mongoose.model("Pc", userSchema)


app.post("/users", async (request, response) => {
    const user = userModel({
        pcusername: "aniq lashari",
        password: "pcno#1",
        server: "pakistan",
        pccontacturl: 9879332874928
    })
    await user.save()
    response.send("data saved")
})



app.listen(4000, function () {
    console.log("Server is listening")
})
