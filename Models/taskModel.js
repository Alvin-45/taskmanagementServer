const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  taskid: {
    type: String,
    required: true,
    unique:true
  },
  asignedby: {
    type: String,
    required: true
  },
  taskdescr: {
    type: String,
    required: true
  },
  assigedto: [
    {
      username: { type: String },
      tid: { type: String }
    }
  ],
  assigneddate:{
    type:String,
    required:true

  },
  assignedtodate:{
    type:String,
    required:true

  }
});

const task = mongoose.model('task', taskSchema);

module.exports = task;
