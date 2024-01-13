const mongoose = require('mongoose');
 

const PersonSchema = new mongoose.Schema(
   {
        firstName: { 
          type: String,
          required: [true, "firstName is required"],
          maxlength: [8, "lastName must be less than 20 characters long"]
        },
        lastName: { 
            type: String,
            required: [true, "lastName is required"],
            maxlength: [8, "lastName must be less than 20 characters long"]
        }
   }, 
   { timestamps: true }
);
 
const Person = mongoose.model('Person', PersonSchema);
 
module.exports = Person;