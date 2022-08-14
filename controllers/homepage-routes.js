const router = require("express").Router()

router.get("/",(req,res)=>{
    res.render("homepage")
})

router.get("/search", async(req,res)=>{
    res.render("songinfo")
})
module.exports = router;