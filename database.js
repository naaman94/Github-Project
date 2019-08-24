const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Repos', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


// Example schema
let tasksSchema = new mongoose.Schema({
  // _id: String,
  title: String,
  language: String,
  private: Boolean
});

// Example modal
let Tasks = mongoose.model('tasks', tasksSchema);

// Example function
let readRepos = (cb) => {
  console.log('readRepos');
  Tasks.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      console.log('data:', data);
      cb(data)
    }
  })
}

let creatRepo = (newRepo, cb) => {
  console.log('newRepo**', newRepo);
  Tasks.create(newRepo, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('new data:', data);
      readRepos(cb)
    }
  })
}

let editRepo = (togPrivate, cb) => {
  // y = ObjectId(togPrivate._id)
  Tasks.findByIdAndUpdate(togPrivate._id, { $set: { private: !togPrivate.private } }, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('new data:', data);
      readRepos(cb)
    }
  })
}

let deleteRepo = (deleteItem, cb) => {
  console.log('deleteItem', deleteItem);
  Tasks.findOneAndDelete(deleteItem, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('new data:', data);
      readRepos(cb)
    }
  })
}


// example of module.export
module.exports = {
  readRepos,
  creatRepo,
  editRepo,
  deleteRepo
}


// Start your code below


// if(mongoose.Types.ObjectId.isValid(id)) {
//   User.findByIdAndUpdate(id,{$set:{name:user.name}},{new:true})       .then((docs)=>{
//      if(docs) {
//        resolve({success:true,data:docs});
//      } else {
//        reject({success:false,data:"no such user exist"});
//      }
//   }).catch((err)=>{
//       reject(err);
//   })
//   } else {
//     reject({success:"false",data:"provide correct key"});
//   }
// ObjectId('5d6076139d73c7300787b94f')