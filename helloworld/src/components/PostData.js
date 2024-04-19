import React, { Component } from 'react'
import { TextField, Button, Typography, Container, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { withRouter } from 'react-router-dom';
import axios from 'axios'

export class PostData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: '',
        };
    }
    handleInputChange = (event) => {
       this.setState({[event.target.name]:event.target.value});
    };

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    };
    submit=() =>{
        const{history}=this.props
        console.log("submit 32");
        // history.push('/getData')
    }
  render() {
    const{userId,title,body}=this.state
    return (
      <div>
        <Container maxWidth="sm">
                    <Typography variant="h4" align="center" gutterBottom>
                       Post Data
                    </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            type="text"
                            label="User ID"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="userId"
                            value={userId}
                            onChange={this.handleInputChange}
                            required
                        />
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="title"
                            value={title}
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
                            required
                        />
                        <Button type="submit" variant="contained" color="primary" onClick={this.submit}>
                            Register
                        </Button>
                    </form>
                </Container>
      </div>
    )
  }
}

export default PostData

