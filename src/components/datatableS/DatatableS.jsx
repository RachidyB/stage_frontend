import React from 'react'
import "./datatableS.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'







const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Service_effectuée', headerName: 'Service effectuée', width: 130 },
  { field: 'Date_entrée', headerName: 'Date entrée', width: 130 },
  {
    field: 'Date_sortie',
    headerName: 'Date sortie',
    width: 90,
  },
  {
    field: 'Technician',
    headerName: 'Technician',
    width: 90,
  },
  {
    field: 'Voiture',
    headerName: 'Voiture',
    width: 160,
  },
];



const DatatableS = () => {

  const [Serivces, setSerivces] = useState([]);
  const [Serv,setServ] = useState([]);



  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Service-list/')
      .then(res => {
        setSerivces(res.data)
      }).catch(err => console.log(err))
  }, [])

  const postDelete = (id,e)=>{
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/Service-delete/${id}`).then(res =>{
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
            <Link to={`/services/${Serv}`} className='link' >
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={(e) => postDelete(Serv,e)}>Delete</div>
          </div>
        );
      },
    },
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add new Service
        <Link to="/services/newS" className='link' >
          Add New
        </Link>
      </div>
      <DataGrid className='datagrid'
        rows={Serivces}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onSelectionModelChange={(data) => {
          setServ(data);
        }}
      />
    </div>
  )
}

export default DatatableS