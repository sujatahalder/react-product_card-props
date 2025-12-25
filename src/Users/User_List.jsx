import React from 'react'
import User_data from './User_data'
import User_card from './User_card'

const User_List = () => {
  return (
    <>
         {/* Heading */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>User Profiles</h1>

      {/* Flexbox container */} 
      <div style={{display: "flex",justifyContent: "center",gap: "40px" }}>
        {User_data.map((User) => (
            <User_card key={User.id} user={User} />
        ))}
      </div>
          
    </>
  )
}

export default User_List