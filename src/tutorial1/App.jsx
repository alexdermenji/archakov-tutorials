import React from 'react';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Profile = (props) => {
  const date = props.registredAt.toLocaleDateString('ru-RU', options);

  return (
    <div>
      <p>'Привет {props.name}</p>
      <p>Дата регистрации: {date}</p>
    </div>
  );
};

class Profile2 extends React.Component {
  constructor(props) {
    super(props);
    this.date = props.registredAt.toLocaleDateString('ru-RU', options);
  }
  render() {
    return (
      <div>
        <p>'Привет {this.props.name}</p>
        <p>
          Дата регистрации:
          {this.date}
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <Profile2 name='Вася Пупкин' registredAt={new Date(2021, 5, 22)} />
      <Profile name='Вася Пупкин' registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
