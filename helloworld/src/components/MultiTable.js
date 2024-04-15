import * as React from 'react'
import { TableContainer, Table, TableBody, TableHead, TableCell, Paper, TableRow } from '@mui/material'

export const MultiTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">IP Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
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
                            <TableCell align="right">{row.ip_address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
const tableData = [{
    "id": 1,
    "first_name": "Oren",
    "last_name": "Kirkup",
    "email": "okirkup0@mozilla.org",
    "gender": "Male",
    "ip_address": "222.121.246.220"
}, {
    "id": 2,
    "first_name": "Cristiano",
    "last_name": "Setterfield",
    "email": "csetterfield1@feedburner.com",
    "gender": "Male",
    "ip_address": "181.240.14.59"
}, {
    "id": 3,
    "first_name": "Rena",
    "last_name": "Ledley",
    "email": "rledley2@delicious.com",
    "gender": "Female",
    "ip_address": "120.35.202.72"
}, {
    "id": 4,
    "first_name": "Norris",
    "last_name": "O' Dooley",
    "email": "nodooley3@senate.gov",
    "gender": "Agender",
    "ip_address": "120.238.230.63"
}, {
    "id": 5,
    "first_name": "Monika",
    "last_name": "Ferriere",
    "email": "mferriere4@ezinearticles.com",
    "gender": "Female",
    "ip_address": "223.0.110.24"
}, {
    "id": 6,
    "first_name": "Margarette",
    "last_name": "Pearcehouse",
    "email": "mpearcehouse5@cnbc.com",
    "gender": "Female",
    "ip_address": "214.34.159.89"
}, {
    "id": 7,
    "first_name": "Margaret",
    "last_name": "Dougill",
    "email": "mdougill6@apple.com",
    "gender": "Female",
    "ip_address": "217.33.52.84"
}, {
    "id": 8,
    "first_name": "Wilbur",
    "last_name": "Sinclair",
    "email": "wsinclair7@prlog.org",
    "gender": "Male",
    "ip_address": "65.249.175.250"
}, {
    "id": 9,
    "first_name": "Archie",
    "last_name": "Sickamore",
    "email": "asickamore8@desdev.cn",
    "gender": "Male",
    "ip_address": "66.7.2.135"
}, {
    "id": 10,
    "first_name": "Boycey",
    "last_name": "Pittet",
    "email": "bpittet9@wix.com",
    "gender": "Male",
    "ip_address": "209.5.225.86"
}]

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