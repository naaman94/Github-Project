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
  // console.log("readRepos in DB req".'readRepos');
  Tasks.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('data:', data);
      cb(data)
    }
  })
}

let creatRepo = (newRepo, cb) => {
  // console.log("creatRepo in DB req", newRepo);
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
  // console.log("editRepo in DB req", togPrivate);
  Tasks.findByIdAndUpdate(togPrivate._id,
    { $set: { private: !togPrivate.private } },
    (err, data) => {
      if (err) {
        cb(err)
      } else {
        // console.log('new data:', data);
        readRepos(cb)
      }
    })
}

let deleteRepo = (deleteItem, cb) => {
  // console.log('deleteItem in DB req', deleteItem);
  Tasks.findByIdAndDelete(deleteItem._id, (err, data) => {
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



