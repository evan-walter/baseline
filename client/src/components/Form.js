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

  const item = 'py-2 flex flex-col';
  const label = 'py-1';
  const input = ' my-1 p-2 text-textlight bg-bgprimary border border-bordergray focus:outline-none focus:ring focus:ring-themeprimary rounded';

  return (
    <div className='flex justify-center border border-bordergray'>
      <div className='w-full max-w-xl py-8 px-24 bg-bgprimary rounded-xl'>
        <h1 className='py-4 text-xl'>{register ? 'Register' : 'Login'}</h1>
        <form onSubmit={onSubmit}>
          <div className={item}>
            <label htmlFor='username' className={label}>Username</label>
            <input id='username' type='text' maxLength='50' required name='username' placeholder='Username'
              value={values.username} onChange={onChange} className={input} />
          </div>
          {register ? (
            <div className={item}>
              <label htmlFor='email' className={label}>Email</label>
              <input id='email' type='email' maxLength='50' required name='email' placeholder='Email'
                value={values.email} onChange={onChange} className={input} />
            </div>
          ) : null}
          <div className={item}>
            <label htmlFor='password' className={label}>Password</label>
            <input id='password' type='password' maxLength='50' required name='password' placeholder='Password'
              value={values.password} onChange={onChange} className={input} />
          </div>
          {register ? (
            <div className={item}>
              <label htmlFor='confirmPassword' className={label}>Confirm Password</label>
              <input id='confirmPassword' type='password' maxLength='50' required name='confirmPassword' placeholder='Confirm Password'
                value={values.confirmPassword} onChange={onChange} className={input} />
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
