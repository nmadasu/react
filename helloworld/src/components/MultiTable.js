import React, { useState, useEffect } from 'react'
import { TableContainer, Table, TableBody, TableHead, TableCell, Paper, TableRow } from '@mui/material'
import { useLocation } from 'react-router-dom';
// import FunctionForm from './FunctionForm'

export const MultiTable = ({ props }) => {
    const location = useLocation()
    console.log(location);
    const formData = location.state.data;
    console.log(formData);
    const data1 = []
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                setData(data);
                setLoading(false);
                console.log('setdata: ', data);
    
                // data.map((x) => {
                //     // console.log(x);
                //     data1.push(x)
                // })
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();

    }, []);


    // const tableData = [{
    //     "id": 1,
    //     "first_name": "Oren",
    //     "last_name": "Kirkup",
    //     "email": "okirkup0@mozilla.org",
    //     "gender": "Male",
    // }, {
    //     "id": 2,
    //     "first_name": "Cristiano",
    //     "last_name": "Setterfield",
    //     "email": "csetterfield1@feedburner.com",
    //     "gender": "Male",
    // }, {
    //     "id": 3,
    //     "first_name": "Rena",
    //     "last_name": "Ledley",
    //     "email": "rledley2@delicious.com",
    //     "gender": "Female",
    // }, {
    //     "id": 4,
    //     "first_name": "Norris",
    //     "last_name": "O' Dooley",
    //     "email": "nodooley3@senate.gov",
    //     "gender": "Agender",
    // }, {
    //     "id": 5,
    //     "first_name": "Monika",
    //     "last_name": "Ferriere",
    //     "email": "mferriere4@ezinearticles.com",
    //     "gender": "Female",
    // }, {
    //     "id": 6,
    //     "first_name": "Margarette",
    //     "last_name": "Pearcehouse",
    //     "email": "mpearcehouse5@cnbc.com",
    //     "gender": "Female",
    // }, {
    //     "id": 7,
    //     "first_name": "Margaret",
    //     "last_name": "Dougill",
    //     "email": "mdougill6@apple.com",
    //     "gender": "Female",
    // }, {
    //     "id": 8,
    //     "first_name": "Wilbur",
    //     "last_name": "Sinclair",
    //     "email": "wsinclair7@prlog.org",
    //     "gender": "Male",
    // }, {
    //     "id": 9,
    //     "first_name": "Archie",
    //     "last_name": "Sickamore",
    //     "email": "asickamore8@desdev.cn",
    //     "gender": "Male",
    // }, {
    //     "id": 10,
    //     "first_name": "Boycey",
    //     "last_name": "Pittet",
    //     "email": "bpittet9@wix.com",
    //     "gender": "Male",
    // }]



    // const queryParams = new URLSearchParams(location.search);
    // const name = queryParams.get('firstName');
    // const email = queryParams.get('email');
    // const [submittedData, setSubmittedData] = useState(null);
    // const getData = (data) =>{
    //     console.log(data);
    // submittedData=data
    // }
    // console.log(props);
    // let tableData
    // const handleFormSubmit = (formData) => {
    //     // Handle form data here
    //     console.log(formData);
    //     tableData=formData
    //   };


    console.log(data1);
    return (
        <div>
            {/* {data && data.length > 0 ? ( */}
                <TableContainer component={Paper}>
                    {/* <FunctionForm onSubmit={getData}></FunctionForm> */}
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">User Id</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Body</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {tableData.map((row) => (
                              <TableRow
                                  key={row.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                  <TableCell component="th" scope="row">
                                      {row.id}
                                  </TableCell>
                                  <TableCell align="right">{row.first_name}</TableCell>
                                  <TableCell align="right">{row.last_name}</TableCell>
                                  <TableCell align="right">{row.gender}</TableCell>
                              </TableRow>
                          ))} */}
                            {/* {data.map((item) => {
                                <TableRow 
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center">{item.id}</TableCell>
                                    <TableCell align="center">{item.userId}</TableCell>
                                    <TableCell align="center">{item.title}</TableCell>
                                    <TableCell align="center">{item.body}</TableCell>
                                </TableRow>
                            })} */}
                            {/* <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center">{formData.id}</TableCell>
                                <TableCell align="center">{formData.userId}</TableCell>
                                <TableCell align="center">{formData.title}</TableCell>
                                <TableCell align="center">{formData.body}</TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </TableContainer>
            {/* ) : (
                <div>No data available</div>
            )} */}
    
        </div>


    )
}




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    {
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3
    },
    {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0
    },
    {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.0
    },
    {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3
    },
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];