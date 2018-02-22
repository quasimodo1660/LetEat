var restaurants = require('../controllers/restaurants.js');
let path = require('path');


module.exports=function(app){ 
    app.post('/restaurants',(req,res)=>{
        restaurants.add(req,res);
    })
    app.get('/restaurants',(req,res)=>{
        restaurants.show(req,res);
    })
    app.get('/restaurants/:id',(req,res)=>{
        restaurants.showOne(req,res)
    })
    app.put('/restaurants/:id',(req,res)=>{
        restaurants.edit(req,res)
    })
    app.delete('/restaurants/:id',(req,res)=>{
        restaurants.remove(req,res)
    })
    app.post('/review/:id',(req,res)=>{
        restaurants.addReview(req,res)
    })
    app.all('*',(req,res,next)=>{
        res.sendFile(path.resolve('./Client/dist/index.html'))
    });
}