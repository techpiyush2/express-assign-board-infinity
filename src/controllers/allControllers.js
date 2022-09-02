

const getAge = (req,res) =>{
    const dob = req.query
    const dateOfBirth =`${dob.year}-${dob.month}-${dob.date}`
    const myAge = (dob) => {
                let today = new Date();
                let birthDate = new Date(dob);
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }
    
    res.send(`Hello ${dob.name}, You are currently ${myAge(dateOfBirth)} years old. `)
}




module.exports.getAge = getAge ;
