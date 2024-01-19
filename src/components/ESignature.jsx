import React from 'react';
import { useState } from 'react';
import MyDate from './Date';
import Title from './Title';

export default function ESignature() {
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    padding: ".35rem 0",
    outline: "none"
  }
  const inputContainerStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    marginTop: "20rem"
  }
  document.body.style.background = '#EEE';

  const today = new Date().toLocaleString();

  const [title, setTitle] = useState("Your signature");
  const [date, setDate] = useState(today);

  const handleTitleChange = e => setTitle(e.target.value);

  const handleDateChange = e => setDate(e.target.value);

  return (
    <div className="container text-center">
      <Title classes="title" text={title} />
      <MyDate classes="subtitle mb-4" text={date} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab accusamus accusantium autem beatae distinctio ducimus eum eveniet expedita hic id, ipsa ipsam laboriosam, minus nulla perspiciatis praesentium quae sapiente.</p>
      <div style={inputContainerStyle}>
        <input type="text" value={title} onChange={handleTitleChange} style={inputStyle} />
        <input type="date" value={date} onChange={handleDateChange} style={inputStyle} />
      </div>
    </div>
  );
}