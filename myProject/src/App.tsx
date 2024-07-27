import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentsTable from "./components/StudentsTable";
import AddStudent from "./components/AddStudent";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState(1);

  return (
    <>
      <AddStudent students = {students} setStudents = {setStudents} id={id} setId={setId}/>
      <StudentsTable students = {students} setStudents = {setStudents}/>
    </>
  );
}

export default App;
