import React from "react";

export default function AddContactForm(props) {
  function addNewContact(event) {
    event.preventDefault();
    let name = event.target[0].value,
      phone = event.target[1].value;
    let email = event.target[2].value;
    var formBody = `name=${name}&phone=${phone}&email=${email}`;
    fetch("https://contacts-api-xv9r.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    });
    setTimeout(() => {
      props.onSubmit(false);
    }, 500);
  }
  return (
    <div>
      <form onSubmit={addNewContact} className="form">
        <label htmlFor="name">
          Enter name: <input type="text" name="name" required />
        </label>
        <label htmlFor="phone">
          Enter phone:{" "}
          <input
            type="tel"
            name="phone"
            maxLength="10"
            pattern="\d{10}"
            required
          />
        </label>
        <label htmlFor="">
          Enter email: <input type="email" name="email" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
