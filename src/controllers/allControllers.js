const StudentModel = require('../models/studentSchema')

const craeteStudent = async(req,res) =>{
    const {studentFirstName, college, location} = req.body
     
    if (!studentFirstName){
        return res.json({error : "please provide studentFirstName"})
    }else if(!college){
        return res.json({error : "please provide college"})
    }else if(!location){
        return res.json({error : "please provide location"})
    }
    const newStudent =await StudentModel.create({
        studentFirstName,
        college,
        location
    })

    res.json({result :"Success" })

}

const getStudentsList = async(req,res) =>{
      
    const allStudent = await StudentModel.find().select({studentFirstName : true , _id : false})
    const studentList = []
      for(let i = 0; i<allStudent.length;i++){
        studentList.push(allStudent[i].studentFirstName)
      }
    
    res.json({ results : studentList});
}


module.exports.craeteStudent = craeteStudent ;
module.exports.getStudentsList = getStudentsList ;
