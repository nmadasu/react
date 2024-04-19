import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Container, } from '@mui/material'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom'
function Editdata() {
    const [data, setData] = useState([])
    const { id } = useParams();
    // const url = 'https://jsonplaceholder.typicode.com/comments?id=' + id
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id
    const [formData, setFormData] = useState({
        userId: '',
        title: '',
        body: ''
    })
    const { userId, title, body } = formData
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    useEffect(() => {
        axios.patch(url)
            .then((res => {
                setFormData(res.data)
            }))
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (userId && title && body) {
        axios.patch('https://jsonplaceholder.typicode.com/posts/' +id, formData)
            .then(res => {
                setData([...data, res.data])
                setFormData(res.data)
                console.log(res)
                // setFormData({ userId: '', title: '', body: '' })
                navigate('/')
            })
            .catch(err => console.log(err))
        }
    }
    return (
        <div>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Edit User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <label >
                        User Id:
                    </label>
                    <TextField
                        type="text"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        required
                    />
                    <label>
                        Title
                    </label>
                    <TextField
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="title"
                            value={formData.title}
                            // onChange={handleChange}
                            onChange={e=>setFormData({...formData,title:e.target.value})}
                            required
                        />
                    <label>
                        Body
                    </label>
                    <TextField
                            type="text"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="body"
                            value={formData.body}
                            onChange={handleChange}
                            required
                        />
                    <div style={{ display: 'flex' }}>
                        <Button type="submit" variant="contained" color="primary" >
                            Update
                        </Button>
                        <div style={{ width: '10px' }}></div> {/* Spacer */}
                        <Button type="submit" variant="contained" color="primary" >
                            Back
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Editdata
