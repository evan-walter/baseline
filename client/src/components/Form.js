import React, { useState } from 'react';

export default function Form(register) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const onSubmit = () => {
    console.log('Form submission');
  }

  const label = '';
  const input = 'p-1 text-textlight bg-bgsecondary focus:outline-none rounded';

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='username' className={label}>Username</label>
        <input id='username' type='text' maxLength='256' required name='username'
          value={formData.username} onChange={handleChange} className={input} />
      </form>
    </div>
  );
}
