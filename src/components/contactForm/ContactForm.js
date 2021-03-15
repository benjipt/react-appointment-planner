import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        placeholder='Name'
        onChange={({target}) => {setName(target.value)}}
        required
      />
      <input
        type='tel'
        value={phone}
        placeholder='Phone'
        onChange={({target}) => {setPhone(target.value)}}
        pattern='^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$'
        required
      />
      <input
        type='email'
        value={email}
        placeholder='Email'
        onChange={({target}) => {setEmail(target.value)}}
        required
      />
      <input
        type='submit'
      />
    </form>
  );
};
