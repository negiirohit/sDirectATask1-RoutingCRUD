const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({

         firstName: {
            type: String,
            required:true
          },
          lastName: {
            type: String,
         
          },
          email: {
              type: String,
              required: true,
              unique: true
          },
          age: {
               type: Number
          },
          DOB : {
                type: Date
          }
})



module.exports = mongoose.model('Taskuser',User);
