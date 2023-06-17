import React, { useState, useEffect } from "react";
import Card from "./Card";
import AddContactForm from "./add-contact-form";
import _ from "lodash";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchedContacts, setSearchedContacts] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("https://contacts-api-xv9r.onrender.com/")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => a.name.localeCompare(b.name));
        setContacts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [addNew, deleted]);
  function contactAdded(value) {
    setAddNew(value);
  }
  function contactDeleted() {
    setDeleted(!deleted);
  }
  function setSearchField(event) {
    setSearchText(event.target.value);
    setSearchArray();
  }
  function setSearchArray() {
    if (searchText === "") {
      setSearchedContacts(contacts);
      console.log("search is empty");
    } else {
      const filteredContacts = contacts.filter((contact) => {
        return _.toLower(contact.name).includes(_.toLower(_.trim(searchText)));
      });
      setSearchedContacts(filteredContacts);
    }
  }
  setTimeout(() => {
    setSearchArray();
  }, 200);

  return (
    <div>
      <header>
        <input
          className="search"
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={setSearchField}
        />
        <button className="search" onClick={() => setAddNew(true)}>
          Add New Contact
        </button>
        {addNew && <AddContactForm onSubmit={contactAdded} />}
      </header>
      <div className="contacts">
        {searchedContacts.map((contact, index) => {
          return (
            <Card
              key={contact._id}
              id={contact._id}
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
              onDeleted={contactDeleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
