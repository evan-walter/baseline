import React, { useState } from 'react';

export default function Form({ register }) {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const item = 'my-2 flex flex-col';
  const label = 'my-1';
  const input = ' my-1 p-2 text-textlight bg-bgsecondary focus:outline-none focus:ring focus:ring-themeprimary rounded';

  return (
    <div className='flex justify-center border border-bordergray'>
      <div>
        <h1 className='mb-2 text-lg'>{register ? 'Register' : 'Login'}</h1>
        <form onSubmit={onSubmit}>
          <div className={item}>
            <label htmlFor='username' className={label}>Username</label>
            <input id='username' type='text' maxLength='50' required name='username' placeholder='Username'
              value={values.username} onChange={onChange} className={input} />
          </div>
          {register ? (
            <div className={item}>
              <label htmlFor='email' className={label}>Email</label>
              <input id='email' type='text' maxLength='50' required name='email' placeholder='Email'
                value={values.email} onChange={onChange} className={input} />
            </div>
          ) : null}
          <div className={item}>
            <label htmlFor='password' className={label}>Password</label>
            <input id='password' type='text' maxLength='50' required name='password' placeholder='Password'
              value={values.password} onChange={onChange} className={input} />
          </div>
          {register ? (
            <div className={item}>
              <label htmlFor='confirmPassword' className={label}>Confirm Password</label>
              <input id='confirmPassword' type='text' maxLength='50' required name='confirmPassword' placeholder='Confirm Password'
                value={values.confirmPassword} onChange={onChange} className={input} />
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
