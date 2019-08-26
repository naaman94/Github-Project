const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
});





//Example get request with database
app.get('/tasks', (req, res) => {
  // console.log('get task from server');
  mongo.readRepos((result) => {
    res.json(result);
  })
});





// Start your code below
app.post('/tasks', (req, res) => {
  // console.log('post---------------------');
  // console.log('req.body from post in server', req.body);
  let togPrivate = req.body
  mongo.creatRepo(togPrivate, (result) => {
    res.json(result);
  })
});







app.put('/tasks', (req, res) => {
  // console.log('put---------------------');
  // console.log('req.body from put in server', req.body);
  let togCheck = req.body
  mongo.editRepo(togCheck, (result) => {
    res.json(result);
  })
})




app.delete('/tasks', (req, res) => {
  // console.log('delete---------------------');
  // console.log('req.body from delete in server', req.body);
  let deleteItms = req.body._id
  mongo.deleteRepo(deleteItms, (result) => {
    res.json(result);
  })
})





const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));