import mongoose from "mongoose";
const CousreSchema=mongoose.Schema({
name:String,
price:Number,
category:String,
image:String,
title:String

})

const Course=mongoose.model("Course",CousreSchema)
export default Course;