/*jshint esversion: 6 */
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require('../models/user');
const Course = require('../models/course');

mongoose.connect("mongodb://localhost/ibi-ironhack");
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
var encryptedPass = bcrypt.hashSync(password, salt);

var workers = [
  {
    username: 'theboss',
    name: 'Gonzalo',
    familyName: 'M.',
    password: encryptedPass,
    role: 'BOSS'
  },
  {
    username: 'dietta',
    name: 'Alejandro',
    familyName: 'D.',
    password: encryptedPass,
    role: 'DEVELOPER'
  },
  {
    username: 'andrei',
    name: 'Andrei',
    familyName: 'A.',
    password: encryptedPass,
    role: 'TA'
  }

];

const courses = [
  {
    name: 'Introduction to Ruby on Rails',
    startingDate: new Date('2017-03-01'),
    endDate: new Date('2017-04-01'),
    level: 'Beginner',
    available: true
  },
  {
    name: 'Ruby on Rails Advanced',
    startingDate: new Date('2017-02-01'),
    endDate: new Date('2017-03-27'),
    level: 'Advanced',
    available: true
  },
  {
    name: 'Angular 2',
    startingDate: new Date('2017-04-15'),
    endDate: new Date('2017-06-30'),
    level: 'Advanced',
    available: true
  },
  {
    name: 'MongoDB',
    startingDate: new Date('2017-04-04'),
    endDate: new Date('2017-05-04'),
    level: 'Advanced',
    available: true
  },
  {
    name: 'Express Introduction',
    startingDate: new Date('2017-03-01'),
    endDate: new Date('2017-04-01'),
    level: 'Beginner',
    available: true
  },
];

User.collection.drop();
Course.collection.drop();

User.create(workers, (err, docs) => {
  if (err) { throw err; }
  console.log("Workers added");
});

Course.create(courses, (err, docs)=>{
  if (err) { throw err; };
    docs.forEach( (course) => {
      console.log(course.name);
    });
    mongoose.connection.close();
});
