import React, { useState } from "react";

export default function EditModeBox(props) {
  const [contact, setContact] = useState({
    name: props.contact.name,
    phone: props.contact.phone.substr(3, 12),
    email: props.contact.email,
  });
  function updateEditForm(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function updateContact() {
    var formBody = `name=${contact.name}&phone=${contact.phone}&email=${contact.email}`;
    fetch("https://contacts-api-xv9r.onrender.com/" + props.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    });
  }
  return (
    <div>
      <form onSubmit={updateContact} className="updateForm">
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={updateEditForm}
          required
        />
        <input
          type="tel"
          name="phone"
          maxLength={10}
          pattern="\d{10}"
          value={contact.phone}
          onChange={updateEditForm}
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={updateEditForm}
          required
        />
        <button type="submit">Save</button>
        <button onClick={props.onDiscard} type="reset">
          Discard
        </button>
      </form>
    </div>
  );
}
