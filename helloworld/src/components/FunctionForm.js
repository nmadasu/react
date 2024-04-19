import React, { useState } from 'react'
import { TextField, Button, Typography, Container, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { MultiTable } from './MultiTable';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const FunctionForm = ({ }) => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  // const history = useHistory();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {

    console.log(formData);
    // <MultiTable formData={formData.firstName}></MultiTable>
    // history.push(`/display?name=${formData.name}&email=${formData.email}`);

    // props.onSubmit(formData)

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: ''
    }); 
    e.preventDefault();

  };
  function submit(){
    navigate('/table',{state:{data:formData}})
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Registration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <TextField
          type="password"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        {/* <Button type="submit" variant="contained" color="primary" >
          Register
        </Button> */}
        {/* <Button type="submit" variant="contained" color="primary" onClick={()=>{navigate('table'),{state:{data:formData}}}}>
          Register
        </Button> */}
        {/* <Link to={{
          pathname: "/table",
          state: {
            formData: formData
          }
        }}> */}
        {/* <Link to={`/table/${formData.firstNameame}/${formData.email}`}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Link> */}
        <Button type="submit" variant="contained" color="primary" onClick={submit}>
          Register
        </Button>

      </form>
    </Container>

  );
}

export default FunctionForm