import React,{useState} from 'react'
import "./singleS.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { useParams} from 'react-router-dom'
import axios from 'axios';




const SingleS = () => {

  const param = useParams();
  console.log(param)

  const [Service, setService] = useState([]);



        axios.get(`http://127.0.0.1:8000/api/Service-by-id/${param.serviceId}`)
      .then(res => {
        setService(res.data)
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
              <div className="details">
                <h1 className='itemTitle'>Service</h1>
                <br />
                <div className="detailItem">
                <div className="detailItem">
                  <span className='itemKey'>Technicien : </span>
                  <span className='itemValue'>RACHIDY</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Service effectuée : </span>
                  <span className='itemValue'>{Service.Service_effectuée}</span>
                </div>
                  <span className='itemKey'>Date entrée : </span>
                  <span className='itemValue'>{Service.Date_entrée}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Date sortie : </span>
                  <span className='itemValue'>{Service.Date_sortie}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Voiture : </span>
                  <span className='itemValue'>BMW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleS