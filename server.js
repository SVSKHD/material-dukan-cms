const express = require("express")
const mongoose = require("mongoose")
const Morgan = require("morgan")
// swagger
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerDocument = YAML.load("./swagger.yaml")

require("dotenv").config()

// Assignes
const Server = express()

// database
mongoose.connect(process.env.DATABASE_URI).then(()=>{
    console.log("Database is up Baby")
})

// middlewaress
Server.use(Morgan('dev'))
// routevariables


// routes


// swaggerui
Server.use("/api-docs", swaggerUI.serve , swaggerUI.setup(swaggerDocument))


// Server
const Port = process.env.PORT
Server.listen(Port,()=>{
    console.log("Server is up at 8000")
})