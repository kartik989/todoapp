var  mongoose=require('mongoose');
var Todo=mongoose.model('Todo',{
  text:{
    type:String
  },
  completed:{
    type:Boolean
  },
  completedat:{
    type:Number
  }
});
var new2=new Todo({
  text:"watch bbt",
  completed:true,
  completedat:5456565
});
new2.save().then((doc)=>{
  console.log(doc);
},(e)=>{
  console.log(e);
});
module.exports={Todo};
