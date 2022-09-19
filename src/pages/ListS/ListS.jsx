import React from 'react'
import "./listS.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import  DatatableS from '../../components/datatableS/DatatableS'


const ListS = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <DatatableS />
      </div>
    </div>
  )
}

export default ListS