import React, { useState } from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList"; 

const Treatment = () => {
  const [students, setStudents] = useState([]);

  const handleStudentAdded = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <AddStudent onStudentAdded={handleStudentAdded} />
      <StudentList students={students} setStudents={setStudents} />
    </div>
  );
};

export default Treatment;