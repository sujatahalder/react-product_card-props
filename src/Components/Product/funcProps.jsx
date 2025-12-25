import React from 'react';

//Passing function as props to onClick event handler
const Greetings = ({name}) => {
  alert(`Hello, ${name}! Welcome to the React world.`);
}

const App = () => {
  return (
    <>
      <div>
        <h1>My React App</h1>
        <button onClick={() => Greetings({ name: 'Sujata' })}>
          Greet Me
        </button>
      </div>
    </>
  )
}
export default App;