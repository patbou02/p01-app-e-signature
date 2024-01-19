import React from 'react';
import Date from './Date';
import Title from './Title';

export default function ESignature() {
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    padding: ".35rem",
    outline: "none"
  }

  const inputContainerStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    marginTop: "10rem"
  }

  return (
    <div className="container text-center">
      <Title classes="title" text="" />
      <Date classes="subtitle mb-4" text="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab accusamus accusantium autem beatae distinctio ducimus eum eveniet expedita hic id, ipsa ipsam laboriosam, minus nulla perspiciatis praesentium quae sapiente.</p>
      <div style={inputContainerStyle}>
        <input type="text" value={""} style={inputStyle}/>
        <input type="date" value={""} style={inputStyle}/>
      </div>

    </div>
  );
}