import React,{useState} from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/list/List'
import { useParams} from 'react-router-dom'
import axios from 'axios';




const Single = () => {

  const param = useParams();
  console.log(param)

  const [technicien, setTechnicien] = useState([]);



        axios.get(`http://127.0.0.1:8000/api/Technician-by-id/${param.userId}`)
      .then(res => {
        setTechnicien(res.data)
      }).catch(err => console.log(err))

      
  return (
        <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className="editButtom">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className='itemImg' />
              <div className="details">
                <h1 className='itemTitle'>{technicien.Nom} {technicien.Prenom}</h1>
                <div className="detailItem">
                  <span className='itemKey'>Profession : </span>
                  <span className='itemValue'>{technicien.Profession}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Telephone : </span>
                  <span className='itemValue'>{technicien.Telephone}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title="User spending (last 6 months)" />
          </div>
        </div>
        <div className='bottom'>
          <h1 className="title">Last transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single