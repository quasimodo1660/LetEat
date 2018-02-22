let mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
    name:{ type:String,unique:[true,'This restaurant is already register'],required:[true,'Restaurant names is required.'],minlength:[3,'Restaurant names must be at least 3 characters long']},
    cuisine:{type:String,required:[true,'Cuisine is required'],minlength:[3,'Cuisine must be at least 3 characters']},
    review:[{
        customer:{type:String,required:[true,'Customer\'s name is required'],minlength:[3,'Customer\'s name must be at least 3 characters long']},
        stars:{type:Number,required:true,default:1,min:[1],max:[5]},
        description:{type:String,required:[true,'Review is required'],minlength:[3,'Name must be at least 3 characters long']},
        created_at:{type:Date,default:new Date()}
    }]
},{timestamps:true})

var Restaurant = mongoose.model('Restaurant',RestaurantSchema);