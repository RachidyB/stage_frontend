import React from 'react'
import "./datatableC.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react'







const columns = [
  { field: 'Matricule', headerName: 'Matricule', width: 100 },
  { field: 'Marque', headerName: 'Marque', width: 130 },
  { field: 'Nombre_Cv', headerName: 'Nombre_Cv', width: 130, },
  {
    field: 'Serie',
    headerName: 'Serie',
    width: 90,
  },
  {
    field: 'Annee',
    headerName: 'Annee',
    width: 90,
  },
];



const DatatableC = () => {

  const [voitures, setvoitures] = useState([]);
  const [voit, setvoit] = useState([]);



  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Voiture-list/')
      .then(res => {
        setvoitures(res.data)
      }).catch(err => console.log(err))
  }, [])

  const postDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/Voiture-delete/${id}`).then(res => {
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
            <Link to={`/cars/${voit}`} className='link' >
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={(e) => postDelete(voit, e)}>Delete</div>
          </div>
        );
      },
    },
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add new Car
        <Link to="/cars/newC" className='link' >
          Add New
        </Link>
      </div>
      <DataGrid className='datagrid'
        getRowId={(voiture) => voiture.Matricule}
        rows={voitures}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onSelectionModelChange={(data) => {
          setvoit(data);
        }}
      />
    </div>
  )
}

export default DatatableC