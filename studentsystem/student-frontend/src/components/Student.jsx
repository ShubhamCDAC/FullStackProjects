

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';

const Student = () => {
    const paperStyle = { padding: '20px 20px', width: 600, margin: '50px auto' };
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);


    // for displaying add student
    const display = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log(student);

        // for connecting to react/frontend
        fetch("http://localhost:8080/students/add", {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student Added");
        })
    }

    //for ddisplayign getall students
    useEffect(() => {
        fetch("http://localhost:8080/students/allStudents")
            .then(res => res.json())   // res == response
            .then(result => {
                setStudents(result);
            })
    }, [])


    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: '#1f69b8', display: 'flex', justifyContent: 'center' }}>Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Student Name"
                        variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <TextField id="standard-basic" label="Student Address" variant="outlined" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                    <Button variant='contained' color='secondary'
                        style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginTop: '10px' }}
                        onClick={display}>
                        Submit
                    </Button>
                </Box>
            </Paper>

            <h1>Students</h1>
            <Paper elevation={3} style={paperStyle}>
                {   
                    students.map(student => (
                        <Paper elevation={6} style={{ margin: '10px', padding: '15px', textAlign: 'left' }} key={student.id}>
                            Id: {student.id}  <br/>
                            Name: {student.name}  <br/>
                            Address: {student.address} 
                        </Paper>
                    ))
                }

            </Paper>

        </Container>
    )
}

export default Student