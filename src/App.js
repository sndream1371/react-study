// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  // const userInfo = [{'name':'JIN', 'age':100, sex:'male'}, {'name1':'JIN2', 'age':200, sex:'2male'}]

  return (

    // <Greeting isLoggedIn={true} isUserInfo={userInfo} />

    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti={true}
        isSearchable 
        placeholder={"입력값을 입력하시오"}
      />
    </div>
  );
}

export default App;


// function Greeting(props) {
//   console.table(props)
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }


// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

