let mongoose = require('mongoose');
var Restaurant=mongoose.model('Restaurant');

module.exports={
    add:(req,res)=>{
        restaurant = new Restaurant(req.body);
        restaurant.save(function(err){
            if(err)
                res.json(err);
            else
                res.json({message:'Success add a restaurant'});
        })
    },
    show:(req,res)=>{
        Restaurant.find({}).sort({createdAt:'desc'}).exec((err,results)=>{
            if(err)
                res.json(err);
            else
                res.json(results);
        })
    },
    showOne:(req,res)=>{
        Restaurant.find({_id:req.params.id},(err,results)=>{
            if(err){
                res.json(err);
            }     
            else{
                res.json(results);
            }        
        })
    },
    edit:(req,res)=>{
        Restaurant.update({_id:req.params.id},req.body,{runValidators: true},(err,results)=>{
            if(err)
                res.json(err);
            else
                res.json({message:'Success update a restaurant'});     
        })
    },
    remove:(req,res)=>{
        Restaurant.remove({_id:req.params.id},(err,results)=>{
            if(err)
                res.json(err); 
            else{
                res.json({message:'Success delete a restaurant'});
            }        
        })
    },
    addReview:(req,res)=>{
        Restaurant.update({_id:req.params.id},{ $push: {review:req.body}},{runValidators: true},(err,results)=>{
            if(err)
            res.json(err);
        else
            res.json({message:'Success add a review'});   
        })
    },
  
}