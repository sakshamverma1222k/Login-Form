const router = require("express").Router()
const { check, validationResult } = require("express-validator")
const { users } = require("../db")
const bcrypt = require("bcrypt")

router.post('/signup',[
    check("email","Please Input A Valid Email").isEmail(),
    check("password","Your Provided Password Has Less Than 8 Character").isLength({
        min: 6
    })
], async (req,res)=>{
    const {password, email} = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    
    let user = users.find((user) => {
        return user.email === email
    })
    if(user) {
        res.status(400).json({
            "errors": [
                { 
                    "msg": "This Mail Already Exists",
                }
            ]
        })
    }

    let hashpass = await bcrypt.hash(password,10)
    console.log(hashpass)

    users.push({
        email,
        password: hashpass
    })

    res.send("Validation Cleared")
})

router.get("all",(req,res)=>{
   res.json(users) 
})

module.exports = router




















// const router = require("express").Router()

// router.post('/',(req,res)=>{
//     const {password, email} = req.body;
//     console.log(`email = ${email}\npassword = ${password}`)
//     res.send("Auth route Working")
// })

// module.exports = router














// const signup = async (req, res) => {
//     const {password, email} = req.body;
//     console.log(`email = ${email}\npassword = ${password}`)
//     res.send("Auth route Working")
// };

// module.exports = {
//     signup
// }
