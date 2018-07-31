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
db.collection('Todos').deleteMany({
  completed:true
})

// db.collection('Todos').find({_id}).toArray().then((docs)=>{
//   console.log('todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('unable to fetch todos',err);
// });
  //client.close();
});
