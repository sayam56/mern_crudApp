import mongoose from 'mongoose'
import Students from '../models/students_model.js'

export function getStudents(req, res) {
     Students.find()
     .exec((err, result) => {
          if (err) return res.status(400).json({err});
          if (result) return res.status(200).json({result});
     })
};

export function createStudents(req, res) {
     const student = new Students ({
          _id : new mongoose.Types.ObjectId,
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          place : req.body.place
     });
     student.save((err, stud) => {
          if (err) return res.status(400).json({err});
          if (stud) return res.status(200).json({stud});
     });
};

export function editStudents(req, res) {
     const id = req.params.id;
     const firstName = req.body.firstName;
     const lastName = req.body.lastName;
     const place = req.body.place;

     Students.findByIdAndUpdate({_id:id}, {
          firstName: firstName,
          lastName : lastName,
          place : place
     }, (err, result) => {
          if (err) return res.status(400).json({err});
          if (result) return res.status(200).json({result});
     })
};

export function delStudents (req,res) {
     const id = req.params.id;
     Students.remove({_id:id}, (err,result) => {
          if (err) return res.status(400).json({err});
          if (result) return res.status(200).json({result});
     })
};

