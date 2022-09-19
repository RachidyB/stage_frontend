import React from 'react'
import "./newS.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios';
import { useState } from 'react'

const NewS = () => {
  const [Technician, setTechnician] = useState('')
  const [Voiture, setVoiture] = useState('')
  const [Service_effectuée, setService_effectuée] = useState('')
  const [Date_entrée, setDate_entrée] = useState('')
  const [Date_sortie, setDate_sortie] = useState('')


  const hundleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://127.0.0.1:8000/api/Service-create/', { Technician: Technician, Voiture: Voiture, Service_effectuée: Service_effectuée, Date_entrée: Date_entrée, Date_sortie: Date_sortie });
      console.log(resp.data)
    } catch (error) {
      console.log(error.response)
    }
  }



  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new Service</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={hundleSubmit}>
              <div className="formInput">
                <label>Technicien</label>
                <input type="text" placeholder='Rachidy' id='Technician' value={Technician} onChange={(e) => setTechnician(e.target.value)} />
              </div>
              <div className="formInput">
                <label>Voiture</label>
                <input type="text" placeholder='BMW' id='Voiture' value={Voiture} onChange={(e) => setVoiture(e.target.value)} />
              </div>
              <div className="formInput">
                <label>Service_effectuée</label>
                <input type="text" placeholder='ventilateur ' id='Service_effectuée' value={Service_effectuée} onChange={(e) => setService_effectuée(e.target.value)} />
              </div>
              <div className="formInput">
                <label>Date entrée</label>
                <input type="text" placeholder='10-08-2022' id='Date_entrée' value={Date_entrée} onChange={(e) => setDate_entrée(e.target.value)} />
              </div>
              <div className="formInput">
                <label className='annee'>Date_sortie</label>
                <input type="text" placeholder='20-08-2022' id='Date_sortie' value={Date_sortie} onChange={(e) => setDate_sortie(e.target.value)} className="annee" />
              </div>
                <button>Send</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NewS