import React from 'react'
import "./list.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react'


const List = () => {

    const [techniciens, setTechniciens] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Technician-list/')
            .then(res => {
                setTechniciens(res.data)
            }).catch(err => console.log(err))
    }, [])


    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>ID</TableCell>
                        <TableCell className='tableCell'>Nom</TableCell>
                        <TableCell className='tableCell'>Prenom</TableCell>
                        <TableCell className='tableCell'>Profession</TableCell>
                        <TableCell className='tableCell'>Telephone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {techniciens.map((technicien) => (
                        <TableRow key={technicien.id} >
                            <TableCell className='tableCell'>{technicien.id}</TableCell>
                            <TableCell className='tableCell'>{technicien.Nom}</TableCell>
                            <TableCell className='tableCell'>{technicien.Prenom}</TableCell>
                            <TableCell className='tableCell'>{technicien.Profession}</TableCell>
                            <TableCell className='tableCell'>{technicien.Telephone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List