import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Container, } from '@mui/material'
import { TableContainer, Table, TableBody, TableHead, TableCell, Paper, TableRow } from '@mui/material'
import axios from 'axios'
function Crud() {
    const [formData, setFormData] = useState({
        userId: '',
        id: '',
        title: '',
        body: ''
    })
    const [productData,setProductData]=useState({
        productName:'',
        price:'',
        description:'',
        shortDescription:'',
        status:''
    })
    const [data, setData] = useState([])

    const { userId, id, title, body } = formData
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId && id && title && body) {
            axios.post('https://jsonplaceholder.typicode.com/posts', formData)
                .then(res => {
                    setData([...data, res.data])
                    console.log(res.data)
                    setFormData({ userId: '', id: '', title: '', body: '' })
                })
                .catch(err => console.log(err))
        }
    }
    const handleDelete = (index) => {
        const newData = data.filter((item, i) => i !== index)
        setData(newData)
    }
    const handleEdit = (editId) => {
        console.log(editId);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + editId)
            .then(response => {
                setData(response.data)
            })
            .catch(console.error())
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get('http://172.17.12.135:3000/api/products')
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(console.error())
    },)
    return (
        <div >
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Crud
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
                        type="text"
                        label="ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="id"
                        value={id}
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">User Id</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Body</TableCell>
                            <TableCell align="center">Action</TableCell>
                            {/* <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Short Description</TableCell>
                            <TableCell align ="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((post, index) =>
                            <TableRow key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="center">{post.id}</TableCell>
                            <TableCell align="center">{post.userId}</TableCell>
                            <TableCell align="center">{post.title}</TableCell>
                            <TableCell align="center">{post.body}</TableCell>
                            <TableCell align="center">
                                <Button onClick={()=>handleEdit(post.id)}>Edit</Button>
                                <Button onClick={()=>handleDelete}>Delete</Button>
                            </TableCell>
                                {/* <TableCell align="center">{post.productName}</TableCell>
                                <TableCell align="center">{post.price}</TableCell>
                                <TableCell align="center">{post.description}</TableCell>
                                <TableCell align="center">{post.shortDescription}</TableCell>
                                <TableCell align="center">{post.status}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleEdit(post.id)}>Edit</Button>
                                    <Button onClick={() => handleDelete}>Delete</Button>
                                </TableCell> */}
                            </TableRow>)}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Crud
