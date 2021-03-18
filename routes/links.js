const express= require( "express");
// const {scrape}=require("../controller/getlinks.js");
const{getScholarLinks} = require('../controller/scholar');
const router=express.Router()

// router.post('/',scrape)

router.post('/',getScholarLinks)


module.exports=router;