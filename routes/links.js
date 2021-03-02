const express= require( "express");
const {scrape}=require("../controller/getlinks.js");
const router=express.Router()

router.post('/',scrape)

module.exports=router;