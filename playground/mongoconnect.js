//const Mongoclient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/todoapp',(err,client)=>{
  if(err){
  return  console.log('cannot connect to server');
  }
  console.log('connected to server');
const db=client.db('todoapp');
db.collection('users').insertOne({
  name:'kartik',
  age:18
},(err,result)=>{
  if(err){
    return console.log('unable to add user');
  }
  console.log(result);
});
//   db.collection('Todos').insertOne({
//     text:'something to do',
//     completed:false
//
//   },(err,result)=>
// {
//   if(err){
//     return console.log('unable to insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
  client.close();
});
