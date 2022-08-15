const router = require("express").Router()

// make axios call on line 5
router.post("/", async(req,res)=>{
    console.log(req.body) 
})

module.exports = router;