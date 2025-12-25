import React, { useState } from 'react'

const LikeHeart = () => {
    //place a heart icon here that can be toggled between liked and unliked states with white heart with black border and red colors respectively.
    const [liked, setLiked] = useState(false);
    return (
        <button  
            style={{    
                fontSize: "40px",
                cursor: "pointer",
                marginTop: "10px",  
                background: "none",
                border: "none",
                padding: "0",
                outline: "none",
                marginLeft: "10px"
            }}
            onClick={() => setLiked(!liked)}
        >
            {liked ? (
                <span style={{ color: "red" }}>&#10084;</span> // Red Heart
            ) : (
                <span style={{ color: "black" }}>&#9825;</span> // White Heart with Black Border
            )}
        </button>
    )
}

export default LikeHeart