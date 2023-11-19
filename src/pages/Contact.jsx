import { useState } from "react";

export default function Contact() {
  const [emailVal, setEmailVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [messageVal, setMessageVal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(emailVal, nameVal, messageVal);
  };

  return (
    <div className="contact">
      <h1>Lets Chat!</h1>
      <p>Please complete this form and I will reachout to you soon.</p>

      <form className="contactme">
        <label>Name:</label>
        <input
          id="name"
          value={nameVal}
          title="Can not be blank, please enter your name..."
          required
          onChange={(e) => setNameVal(e.target.value)}
        ></input>
        <label>Email:</label>
        <input
          name="email"
          value={emailVal}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          title="Must be in a valid email format..."
          required
          id="emailadd"
          onChange={(e) => setEmailVal(e.target.value)}
        ></input>
        <label>Request Information:</label>
        <input
          value={messageVal}
          id="reqinfo"
          title="Please enter a message..."
          required
          onChange={(e) => setMessageVal(e.target.value)}
        ></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
