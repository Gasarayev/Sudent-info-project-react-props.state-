import { useState } from "react";

function AddStudent({ students, setStudents, id, setId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [error, setError] = useState("");

  const handeAddStudent = () => {
    if (name === "" || email === "" || gpa === "") {
      setError("All fields are required.");
      return;
    }

    const newStudent = {
      id: id,
      name,
      email,
      gpa: parseFloat(gpa),
    };

    setStudents([...students, newStudent]);
    setId(id + 1);
    setName("");
    setEmail("");
    setGpa("");
    setError("");
  };

  return (
    <div>
      <h2>Add Student Info</h2>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="number"
        name="gpa"
        placeholder="gpa"
        onChange={(e) => setGpa(e.target.value)}
      />{" "}
      <br />
      <button onClick={handeAddStudent}>Add</button>
    </div>
  );
}

export default AddStudent;
