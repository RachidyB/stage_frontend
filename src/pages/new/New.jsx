import React from 'react'
import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios';
import { useState } from 'react'

const New = () => {
  const [Nom, setNom] = useState('')
  const [Prenom, setPrenom] = useState('')
  const [Profession, setProfession] = useState('')
  const [Telephone, setTelephone] = useState('')

  const hundleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://127.0.0.1:8000/api/Technician-create/', { Nom: Nom, Prenom: Prenom, Profession: Profession, Telephone: Telephone });
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
          <h1>Add new Technicien</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg" alt="" />
          </div>
          <div className="right">
            <form onSubmit={hundleSubmit}>
              <div className="formInput">
                <label>Nom</label>
                <input type="text" placeholder='Lionnel_bader' id='Nom' value={Nom} onChange={(e) => setNom(e.target.value)} />
              </div>
              <div className="formInput">
                <label>Prenom</label>
                <input type="text" placeholder='Rachidy Bader-eddine' id='Prenom' value={Prenom} onChange={(e) => setPrenom(e.target.value)} />
              </div>
              <div className="formInput">
                <label>Profession</label>
                <input type="text" placeholder='Rachidy@gmail.com ' id='Profession' value={Profession} onChange={(e) => setProfession(e.target.value)} />
              </div>
              <div className="formInput">
                <label>Telephone</label>
                <input type="text" placeholder='+212 633042773' id='Telephone' value={Telephone} onChange={(e) => setTelephone(e.target.value)} />
              </div>
                <button>Send</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default New