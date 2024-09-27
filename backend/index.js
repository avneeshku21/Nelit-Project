import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import courseRoute from "./route/course.route.js"
const app = express()
dotenv.config();
const PORT=process.env.PORT || 4000
const URI=process.env.MongoDBURI;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


//Define Route
app.use("/course", courseRoute);




app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})