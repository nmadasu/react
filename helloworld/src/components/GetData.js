import React, { Component } from 'react'
import { TableContainer, Table, TableBody, TableHead, TableCell, Paper, TableRow,Typography,Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import { Link } from 'react-router-dom';
class GetData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response);
                this.setState({posts:response.data})
            })
            .catch(console.error())
    }
  render() {
    const{posts}=this.state
    return (
      <div>
           <Typography variant="h4" align="center" gutterBottom>
                 List of Users
                </Typography>
                <div>
                    <Button variant="contained" endIcon={<AddIcon />}>Add</Button>
                </div>
            {
            posts.length ?
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
                        {posts.map((post)=> 
                        (<TableRow key={post.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        
                            <TableCell align="center">{post.id}</TableCell>
                            <TableCell align="center">{post.userId}</TableCell>
                            <TableCell align="center">{post.title}</TableCell>
                            <TableCell align="center">{post.body}</TableCell>
                            <TableCell align="center">
                                <Button variant="contained" startIcon={<EditIcon />}>Edit</Button>
                                <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
                            </TableCell>
                        </TableRow>))}
                       
                    </TableBody>
                </Table>
            </TableContainer>):
            null
            }
      </div>
    )
  }
}

export default GetData
