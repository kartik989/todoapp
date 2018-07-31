var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID}=require('mongodb');

var app = express();
const port=process.env.PORT||3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {

  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(ObjectID.isValid(id)){
    Todo.findById(id).then((doc)=>{
      if(!(doc===null)){
      res.send(doc)
    }else{
      res.send('cannot find data');
    }
  });

  }else{
    res.status(400).send('id not valid');
  }

});
app.get('/todos/:completed',(req,res)=>{
  var comp=req.params.completed;
  Todo.find({
    completed:comp
  }).then((doc)=>{
    res.send(doc);
  }).catch((e)=>{
    res.status(404).send('error404');
  });

});


app.listen(port, () => {
  console.log('Started on port'+port);
});

module.exports = {app};
