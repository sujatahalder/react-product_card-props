import React from 'react';
//passing an array as a props
const List = ({ props }) => {
  return (
    <>
    <table border="1" cellPadding="10" cellSpacing="0">
    <tbody>
      {props.map((number, index) => (
        <td key={index}>{number}</td>
      ))}
    </tbody>
    </table>
      
    </>
  )

}

const App = () => {
const numbers = [10,20,30,54,78,45,69,57,45,63,75,84];
return (
  <>
    <h1>Numbers List</h1>
    <List props={numbers} />
  </>
)

}

export default App