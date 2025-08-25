// StudentList.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = ({ students, setStudents }) => {


  React.useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/student");
        setStudents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, [setStudents]);

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <ul>
          {students.map((s) => (
            <li key={s._id}>
              {s.name} - {s.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;