import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option
        value=''
        key='0'
        selected='selected'>Select Contact</option>
      {contacts.map( contact => <option value={contact.name} key={contact.name}>{contact.name}</option>)}
    </select>
  );
};
