import React from "react";

export default function DeleteBox(props) {
  function deleteContact() {
    let url = "https://contacts-api-xv9r.onrender.com/" + props.id;
    fetch(url, { method: "DELETE" }).then();
    setTimeout(() => {
      props.onDelete();
    }, 500);
  }

  return (
    <div className="deletePopUp">
      <h1>Are you sure?</h1>
      <div>
        <button onClick={deleteContact}>Delete</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  );
}
