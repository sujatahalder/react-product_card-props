import React from 'react';
import { useState } from 'react';
const Test = () => {
  const[isDark, setIsDark] = useState(false);
  return (
        <>
          <div className={isDark ? 'dark' : 'light'} style={{textAlign: "center", marginTop: "50px"}} >
             <h1 style={{color: isDark ? 'white' : 'black'}}>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
             <button className='btn btn-danger' onClick={() => setIsDark(!isDark)}>Toggle theme</button>
          </div>
        </>
  )
}

export default Test;