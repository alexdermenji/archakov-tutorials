import React from 'react';

let email = '';
let password = '';
const App = () => {
  const onChangeHandler = (event) => {
    if (event.target.type === 'text') {
      email = event.target.value;
      return email;
    } else {
      password = event.target.value;
      return password;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.length || !password.length) {
      alert('Please enter all details in form inputs');
      return;
    }
    console.log({ email, password });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' placeholder='email' onChange={onChangeHandler} />
      </div>
      <div>
        <input
          type='password'
          placeholder='password'
          onChange={onChangeHandler}
        />
      </div>
      <button>Войти</button>
    </form>
  );
};

export default App;
