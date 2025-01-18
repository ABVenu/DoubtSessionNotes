

const validationMW = (req,res,next)=>{
    if(!req.body.email){
        res.send("Email is mandatory for signup")
    }else{
        if(!req.body.email.includes("@")){
            res.send("Email is in not valid format ")
        }else{
            next()
        }
    }
}

module.exports = validationMW;