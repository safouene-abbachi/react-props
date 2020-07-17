import React from "react";

function StudentCard(props) {
  return (
    <div className="list">
      {props.x.map((student) => (
        <div className="card">
          <img width="100px" src={student.image} alt="avatar" />
          <h1>{student.name}</h1>
          <h2>{student.age}</h2>
          <p>{student.adress}</p>
        </div>
      ))}
    </div>
  );
}
export default StudentCard;
