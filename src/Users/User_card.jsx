import React from 'react'
import LikeHeart from './LikeHeart'


const User_card = ({user}) => {
  return (
    <>  
        <div   // unique key
          style={{
              border: "1px solid black",
              padding: "15px",
              width: "300px",
              height: "350px",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          >
           
            {/* Profile Image */}
            <img
              src={user.image}
              alt={user.name}
              width="120"
              height="120"
              style={{ borderRadius: "50%", marginBottom: "20px" }}
            />
            

            {/* User Name */}
            <h3>{user.name}</h3>

            {/* User Role */}
            <p>{user.role}</p>

            {/* External Link */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center" }}>
                  <button className='btn btn-primary'>
                     <a href={user.link} target="_blank" rel="noopener noreferrer" className='text-light text-center text-decoration-none'>
                        View Profile
                     </a>
                  </button>
                  <LikeHeart />
             </div>
            
          </div>
          
          
       
    </>
  )
}

export default User_card