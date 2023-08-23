var express=require('express')
var router=express.Router()

router.get('/joinroom',function(req,res,next){
    res.render('joinroom')
})

router.post('/chatinterface',function(req,res,next){  
   res.render('chatinterface',{data:req.body})
})

module.exports=router