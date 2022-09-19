import React from 'react'
import "./listC.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import  DatatableC from '../../components/datatableC/DatatableC'


const ListC = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <DatatableC />
      </div>
    </div>
  )
}

export default ListC