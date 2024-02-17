// get-top-courses.js

const courses = [
    { id: 1, name: "Course 1", instructor: "Instructor 1" },
    { id: 2, name: "Course 2", instructor: "Instructor 2" },
    { id: 3, name: "Course 3", instructor: "Instructor 3" }
  ];
  
  module.exports = (req, res) => {
    // Assuming you want to return JSON data
    res.status(200).json(courses);
  };
  