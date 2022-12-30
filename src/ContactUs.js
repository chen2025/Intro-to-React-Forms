import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("");
  const [comments, setComments] = useState("");
  const [notification, setNotification] = useState("Off");

  const onSubmit = (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    document.getElementById("notification").checked = false
    document.getElementById("instructor").checked = false
    document.getElementById("student").checked = false

    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      staff,
      comments,
      notification,
      submittedOn: new Date()
    };

    // Ideally, we'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact us information to the console.
    console.log(contactUsInformation);

    // Reset the form state.
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setStaff("");
    setComments("");
    setNotification("Off");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <small>Format: 123-456-7890</small>
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            required={phone !== ""}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
            Staff:
            <label htmlFor="instructor"> Instructor:</label>
            <input
              id="instructor"
              type="radio"
              name="staff"
              onChange={(e) => setStaff(e.target.value)}
              value="instructor"
            />
            <label htmlFor="student"> Student:</label>
            <input
              id="student"
              type="radio"
              name="staff"
              onChange={(e) => setStaff(e.target.value)}
              value="student"
            />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            maxLength={"280"}
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
          <small>{`${comments.length}/280`}</small>
        </div>
        <div>
            <label htmlFor="notification">Sign Up For Email Notifications</label>
            <input
              id="notification"
              type="checkbox"
              name="notification"
              onChange={(e) => setNotification(e.target.value)}
              value={(notification==="Off") ? "On" : "Off"}
            />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
