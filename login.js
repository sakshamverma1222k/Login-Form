const express = require("express")

const app = express();
app.use(express.json())

const auth = require("./Router/route")
app.use("/auth", auth)

app.get('/', (req,res)=>{
    res.send("hello there!")
})
app.listen(5000)























// const express = require("express");
// const app = express()
// const bodyparser = require("body-parser")
// app.use(bodyparser.urlencoded({extended:false}))

// const auth = require("./Router/route")
// app.use("/signup", auth)

// app.use(express.json());

// app.get('/', (req,res)=>{
//     res.send("hello there!")
// })
// app.listen(5000)














// const exp = require("express");
// const app = exp();
// const bodyparser = require("body-parser")
// app.use(bodyparser.urlencoded({extended:false}))
// const route = require("./Router/route");


// app.get('/', (req,res)=>{
//     res.send("hello there!")
// })

// app.use("/signup", route.signup);

// app.use(exp.json());

// app.listen(5000, ()=>{
//     console.log("5000")
// })
