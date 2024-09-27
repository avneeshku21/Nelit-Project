import Course from "../Modal/manage.modal.js";


export const getCourse=async(req,res)=>{
    try{
const course=await Course.find()
res.status(200).json(course)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};