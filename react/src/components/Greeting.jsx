import React from "react";

const greet = "Good morning";
let date=new Date();
const Greeting = () => {
  return (
    <div>
      <h1>{greet}</h1>
      <p>
        {date.getDate()} / {date.getMonth()}{" "} / {date.getFullYear()}
      </p>
    </div>
  );
};

export default Greeting;
