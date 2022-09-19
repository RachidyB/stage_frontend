import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'







const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Nom', headerName: 'Nom', width: 130 },
  { field: 'Prenom', headerName: 'Prenom', width: 130 },
  {
    field: 'Profession',
    headerName: 'Profession',
    width: 90,
  },
  {
    field: 'Telephone',
    headerName: 'Telephone',
    width: 90,
  },
  {
    field: 'Nom complet',
    headerName: 'Nom complet',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.Nom || ''} ${params.row.Prenom || ''}`,
  },
];



const Datatable = () => {

  const [techniciens, setTechniciens] = useState([]);
  const [tech,setTech] = useState([]);



  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Technician-list/')
      .then(res => {
        setTechniciens(res.data)
      }).catch(err => console.log(err))
  }, [])

  const postDelete = (id,e)=>{
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/Technician-delete/${id}`).then(res =>{
      console.log(id)
    }).catch(err => console.log(err))
  }

  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <Link to={`/users/${tech}`} className='link' >
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={(e) => postDelete(tech,e)}>Delete</div>
          </div>
        );
      },
    },
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add new User
        <Link to="/users/new" className='link' >
          Add New
        </Link>
      </div>
      <DataGrid className='datagrid'
        rows={techniciens}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onSelectionModelChange={(data) => {
          setTech(data);
        }}
      />
    </div>
  )
}

export default Datatable