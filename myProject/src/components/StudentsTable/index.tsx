import Table from 'react-bootstrap/Table';

function StudentsTable({students, setStudents}) {

    const handleDelete = (id) =>{
        setStudents(students.filter(student => student.id !== id))
    }
    

  return (
    <div>
      <input type="text" placeholder="search here..." />
      <button>Search</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.gpa}</td>
              <td>
                <button className='bg-danger' onClick={() => handleDelete(student.id)}>X</button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default StudentsTable
