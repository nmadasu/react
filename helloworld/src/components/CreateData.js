import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableBody, TableHead, TableCell, Paper, TableRow,Typography,Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


function CreateData() {
    const[data,setData]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                // console.log(response);
                setData(response.data)
            })
            .catch(console.error())
    },[])
    function add(){
        console.log("add");
        navigate('/add',)
    }
    function edit(id){
        console.log("add");
        navigate('/edit/'+id)
    }
    const deleteData = (id)=>{
        console.log("delete");
        const confirm=window.confirm("would u like to delete?")
        if(confirm){
            axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
            .then((res=>{
                console.log("deleted sucessfully");
                navigate('/')
            }))
            .catch(err=>console.log(err))
        }
    }
  return (
    <div>
       <div>
           <Typography variant="h4" align="center" gutterBottom>
                 List of Users
                </Typography>
                <div>
                    <Button variant="contained" endIcon={<AddIcon />}  onClick={add}>Add</Button>
                </div>
            {
            data.length ?
            (<TableContainer component={Paper}>
               
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">User Id</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Body</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((post)=> 
                        (<TableRow key={post.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        
                            <TableCell align="center">{post.id}</TableCell>
                            <TableCell align="center">{post.userId}</TableCell>
                            <TableCell align="center">{post.title}</TableCell>
                            <TableCell align="center">{post.body}</TableCell>
                            <TableCell align="center">
                                {/* <Link to={`/edit/${post.id}`}>
                                <Button variant="contained" startIcon={<EditIcon />} >Edit</Button>
                                </Link> */}
                                <Button variant="contained" startIcon={<EditIcon />} onClick={e => edit(post.id)}>Edit</Button>
                                <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={e => deleteData(post.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>))}
                       
                    </TableBody>
                </Table>
            </TableContainer>):
            null
            }
      </div>
    </div>
  )
}

export default CreateData
