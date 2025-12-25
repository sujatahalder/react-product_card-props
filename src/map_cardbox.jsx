import React from "react";

const App = () => {
  const rowStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "20px",
    marginTop: "30px",
  };

  const cardStyle = {
    width: "220px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#fff",
  };

  const imgStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const users = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Rahul Roy",
      role: "Frontend Developer",
      link: "https://www.google.com",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      name: "Sonia Singha",
      role: "Backend Developer",
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      name: "John Doe",
      role: "Backend Developer",
      link: "https://www.instagram.com",
    },
  ];

  return (
    <>
        <h1 style={{ textAlign: "center" }}>User Profiles</h1>
        <div style={rowStyle}>
          {users.map((user) => (
            <div key={user.id} style={cardStyle}>
              <img src={user.image} alt={user.name} style={imgStyle} />
              <h3>{user.name}</h3>
              <p>{user.role}</p>
             <a href={user.link} target="_blank" rel="noopener noreferrer">Visit Profile</a>
        </div>
      ))}
    </div>

    </>
  

  );
};

export default App;
