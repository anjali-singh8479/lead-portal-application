


import { useState } from "react";

function App() {

  const formStyle = {
  width: "500px",
  margin: "auto",
  marginTop: "50px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  alignItems: "left",
  display: "flex",
  flexDirection: "column"
};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    skills: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


const handleSubmit = async (e) => {

  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.email ||
    !formData.phone
  ) {
    alert("Please fill required fields");
    
    return;
  }

  try {

    const response = await fetch(
    "http://localhost:3000/createlead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    alert(data.message);

  } catch (error) {

    console.error(error);

    alert("Error sending data");

  }
  setFormData({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: ""
  });
};

  return (
    <div style={formStyle}>
      <h1>Lead Application Portal</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Full Name</label>
          <br />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Phone Number</label>
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Experience(In Yrs)</label>
          <br />
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Skills</label>
          <br />
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit" style={{
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  }}>
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;

