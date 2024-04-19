import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Container, } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddData() {
    const [formData, setFormData] = useState({
        userId: '',
        title: '',
        body: ''
    })
    const [data, setData] = useState([])
    const navigate=useNavigate()
    const { userId, title, body } = formData
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId && title && body) {
            axios.post('https://jsonplaceholder.typicode.com/posts', formData)
                .then(res => {
                    setData([...data, res.data])
                    console.log(res)
                    setFormData({ userId: '', title: '', body: '' })
                    navigate('/')
                })
                .catch(err => console.log(err))
        }
    }
  return (
    <div>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Add user
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        label="User ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="userId"
                        value={userId}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="body"
                        label="Body"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="body"
                        value={body}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" >
                        Register
                    </Button>
                </form>
            </Container>
    </div>
  )
}

export default AddData
