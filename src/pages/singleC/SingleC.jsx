import React,{useState} from 'react'
import "./singleC.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { useParams} from 'react-router-dom'
import axios from 'axios';




const SingleC = () => {

  const param = useParams();
  console.log(param)

  const [Voiture, setVoiture] = useState([]);



        axios.get(`http://127.0.0.1:8000/api/Voiture-by-id/${param.carId}`)
      .then(res => {
        setVoiture(res.data)
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
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUWGBgaGRkYGhkYGhUaGhoeGBgaGRwYGhwcIC4lHR4rIRgYJjorLjAxNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHDQrJCs2MTQ0NDQ0NDQxNDQ0NDQ0NDE0NDQ0NjQ0NDY0NDQ0NDQ0ND00NDQxNDQxNjQ0NDE0NP/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABGEAACAQIDBAYIAwYDBgcAAAABAgADEQQSIQUxQVEGEyJhcZEHMkJygaGxwVKC0RQjQ7Lh8DNikhZUosLj8RUXRFNzg6P/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAIhEBAQEAAwACAQUBAAAAAAAAAAERAhIhMUFhIjJCUXED/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERMVj9vYeiC1SsigXG++o3iw490DKxOfbR9LGBpmy53PgVH0J+Uwdb0vlv8Oio8RVf6KJNHXInFn9KOIbcUUd1Gr9wZQnpDxbsFXEIGbcOrUE+AZZnt+B2yJx2p0xxiC74kD/66dvO2sgP6UK6/wAcN4U0P0tE5b9DuMThw9LWIHtKfGkfsRJlD0vVPaSkR7rp885l38DssTmeC9LVJtGpD8lQE+TKPrNgwfT/AAb72dD/AJ1v80LS7BtsSFg9pUav+HVR+5WUkeI3iTZQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiR8XikpI1SowRFBLMxAAA4kwJEwO2uklHDsKQDVa7C60KVme34muQETmzEDxmr7T6WVsQG/ZicNhgbPiqi/vHtvWhTbj3nUa+qbE4vZGx3xKsuGU0cOzHrK7EtVrspIYs181Rrg7yFBvxBEC10i6U1XOV2DsxsuHoFjSB4K7LZsQ3Neym8ZXmrdINm41aHX1lK0wQop6AqtiR2E7KILW4WJGms69sjozRww7CXcizVH7Tt+a2g7hYd0mYp0pDNUdKY5u6oPNiIRwDYvR93dEqYPFlXZQaiq6gKzAZ9aZFgDfU204S3isPRFR1oXairZUd8pL2FmbQAWLXsQN1p1Dpf0noPhnpYXEU3qP2CyuLIjXztmJAJt2RY37V+E0Gns5kKhlGS4Darci40HedfOBksJ0VorRpvicSKD1bmmgQsxXgcoOY6EHQWAIkHFGlhVY5s+pAYrlLDkFucvn+kzfSfaqVKprKhWyKiqSCQoLNYAaC5Y37gNbCathMSqV1r1wlQo1xTa7Itr9kgbyDYk8xbhM/u/wAVaxOzsVVys9NwHpvWVVF36tSAXZRdguotcC/fvkEYdAua6gfFr+AF50LA9LqbPiKjoweugpq6kEU1VWCqF35czFyb313aS0nRdMmTOgF0a4K7kVha99xzX+EvwOePkY2QEEAnda9u6R6VE3Gml7eX9mdGTozRVta1LjvdBw7zIpweFRiGr0NKgt+8p6gotyNdwLnyMow+zuhmIxADJSOQ+2zIB5Mc3ymQ/wDLzHoLoyG3so5X5NZT8Zm8JtPDUe0mOpL7rKfgQLkiTtr9NsI9Nab4izXDMUSsMwt2Qez33t4aQjR61LG4d8lVCrizDMoBsb2KFCFOqnX4XmzbG6cY2loc1RRvD3qCx1Gps+osfjumPq9K8CrLlFd9SD2FAsRuGZx7QXylFDpfSFQ9VhKrqRqLqCpJveyhtNSeZLHukyK6ZsX0iYat2al6TbiTcqDybQMn5gAOc3GlVVlDKwZSLhlIIIPEEaGcA2ltlq5XLhkpW9rMr1NxGRgPVXUHtAagcRJex9u4jDNekzAXuVOqN7y7ie/Q98l5Z8jvE9mkbF9INBxbEXovzszI3hYEr4HzM27CYtKih6bK6ncym400lll+BJiIlCIiAiIgIiICIlDMALk2A1JMCqezW8d0oRSRTAa3tscqDw4t8B8Zr2N28zE5qjtwKociDuIU5vMzN5Qb7XxaJ67qvvMB9ZFO2aXAs3uo9vMi3znOTtNvYCp3qAD8W3n4mRKu0AfWdnPcbD/U2vkPjJ2HSanSGmP6sn0DEyHV6VJ7IU992NvEZR9ZzhsZ3hfdFz5tc+VpYbEJxUuebsTJ2o3ur0uN/wDGT8lMBh5u/wBJr+069DEsDXqYmuFbMqFlVVPMItNASOZue+YRsa1tAijuUfeR6mLY6XZu65tM9qrP7U6isAH/AGhQAFVOsp0VUDgqqCAPATGNQpIgSlicYgG5UxVYqut9wpqBvO6Y0u53L5yko54iO1ErrKgBAxeM8WxNdvkGWY79hFyxrVix3sXNz4k3Jl/qDxaVLhL8THaihAB/EqHxc/YSghQ2e7FrHtO7tbnbMTl+Ekfsqjff5yk00/CT5Rt/sa3ito37d79rKig2aw9apxsdOzy37wDI2HbTs0Rwt1nXMbAW0NMKLeIPjNxRVG5PnYeQEpanyRP+I/UzXbEa/hzW9mlQA92rfydrTyhsNy5dgLkk2CqBc8gGOm+bIofhlHgqD7S4A53u3mZLz2Ys89YU9H3JBK2tfUXG8W/DLR6KrclnF+RZPsQZlMfTdUzIpY3F7LmIHE5bi/8AWRdmdYz2ZXK8S6qoGlxaw37tJJbJkLbbtW06PUBa7L/xn9RL7bMoXJbtE7zkVr/6gJllwvdPf2XujeQxqUKS+qrj3QE+jSp3Q2uhPIu4+6zIfsciYrZJZswdl0tuU8+YuN8m0BSJ9lR4kn6Txqdt5X4f1Mro4IouUszd5t9BoJbqKo3lR4kD6wKGK85sXQratSjXCJqlQjOp9X3hyYDz3HhbA06QOoII5ixEmUK5okOhUOpBXNci45gbx3cY9+m/+d4y+zY7mJ7Imz8WtWklRfVdQw7ri9j4bpLndzIiICIiAiIgJzj0p9Inw5o0U6vK4dnDmoMwQqFUBHUnUk77aCdGJnzl6SOkJxtZKiplppnp07ghjpTZs4O5gWII3acd5CQ3SdWBzU1zGyhEe+a9+0C9yFsG35rac7SHV6QtwpW9UAdYCe1qB/hDW2tuU1BaRJJA0A1+Zt42v5GUo5UggkEEG457tJOsG6YPbAe+YEWNt4Ivcj1rAWNjy18RJqK7J1ioAmUPd3C9gjMHyqGNrazTcBi6rVADnqXBTLfUhuAPA3Aa/wDlud02tcHWFMIGXQ3Buwy3vmUaEOhvextYkkaG0zZxlEYbRRiAK6C+gtSqMd197sgnrYumPWbGsLXuqUKS2PfZm+8pw2wGQgglSL2KVCo15gobi4Glx48rh2a+Y58uU3vlqFTY78nYNviNJr9OJ7qdghTKhuodgdVapiqzZu6yFFG46eHOSqr0zYmglNDcZkq4k1Bwumd2R7cihHO2+Y+lQVPU6zxqVTVPdbsovwKmW8TWtdmJJ7zcnkLn+xM8uXH+JN+1wYki9zcXNiQAbX7OYDQNa17aXvaWW2ko3XMgVGuMzsFUfAf39Zjq23FXREv3tp8piS1pnTtFuCH5/pK6W1BezqyjmNfkQJqr7ardw8F/WXsPtp9zgMvhYy9KOk4TZoqIHRg6HcR8weRHI6y4dm24TS8LtB6QzUqjrmtly1HQM2vZbLaxA5ngZNTpBibdqu4PvA+BBkzwbGcJ3SpMCx3KT4AzVm21XP8A6irx3Ow49xkertB29arUb3qjt9TIN1OzmHrDL71l+sssaS+tXoDu6xCfIEmaNnXkPITw1oG7NtDDLvrqfdSq3zCW+csvt3DLu65/dpoP53E07rTPM5jRth6TUQOzQqN7zon0Vpa/2sT/AHb/APb/AKc1hVY8DKhTP92jRt9DpTQPr0aqe4yVPrkmVobUwbgkVlWwuQ6sh+YsT3Amc9FM8voZ6lMkgf3bjGjM4/GvXJKfu6QOnAsObH7Xtw13zDPXoKbGpc91pZxdVq7ZFOWmhym3tEaZRKf/AAalmFM3DsCQLm+l+NsoPZOhI3Tc478oyGDqW/eUWzWF2U8VG/xA+W/hJeL2qhF0U35tbT4C95r+Ez4WspU3UsCraEBhqL8DfyYHjLhNhbdw/rJymK+juiAP7Dhb7zh6THxZFJ+szUwnRTFI+FTIbqhegDe9xQdqQa433CA/GZudIhERKEREBERAibTpu1GotM2co4Q8mKkKfO04fhkw2MoUqdanWp1CzsHCo1MltLA9YrBrIBqLXB0Ok71PmnG9IXTFVqbgNRTEV7UxlQgGq5sHAvpma178t0TN9G1YboXRpJVphnZ2UqC9OoMl1I3qpAPra621tvN9XxHQV0IBxVAXuAGbKTa1wA1ieHCZl+nWHqXzipmZ0Ys1NDrTpsgu6uT+Hcu7NvzGYnpb0nFRafUVjcFyVVXXIrBezdlF1utxbdmI1sGaYMph9lU8DSZ9KlUrcvwF9Mqcl3XbebcBpMPV6RVx7FMflb7tMLszaFRs1EsSHOYX4sNco97TTiQOchbSoG+Yag7/ABmc9yjYG6S1+Cp5H7NJ+C2l1xVQjK50tfMGPALoDz5/rowYi1iQRutpbfutMjhtoszBWCkNZScoB5Dda3C8t4TB0KlsWsw9Q+HEeImt4xwXK+yhI7iRofmPISOKJQ51OUjUFdGHDQjUSFjKmWk1tLkIPjf7A+YnOTfFWapfEPYGyLx4ePeTw/7zI4TBgaUkG8KXe29mC6k97DQcNbS1gMPZVUELe7MxKqBYXJLHQctfvJePwzZ8qrZFV1W1sydYhVUcAnKQ1uJBbNrmvbrJiLNFg7ZVdS1ibMjhTY5bXIvctZRcDUgSFjNng6qFDa2ylWR7GxysDa/h8bSbQKllemMz1QapVbkg0lLlbbwGrAWHJF5yzgKQVSrOtmZVuNUWpplCkGzN+IjsqpPrMVEog7Pq3DI17HzB3gjvFvlJ1MtazbxrfW1gdW8PofnYNK1W9rZlJI5MCA3x4/mk5VE58vKr18OwNreWs9GGPE2kmhilChXFwNxGhGu7vEqbF0vwufEhf1mBE6kd5lQpjlLpx6cKY+LE/S0pO1DwRB4Lf+YmMBafd8peTCudyt8AZFO1n/HbwCr9BKWxTtvLt4ljGDIDBsPWyr7xA+s9FJBve/co+5mNpq5GimSEovyt43+wjBKLj2QB37z5yBjWyKzDfaw7yxsPnYyUtO3rNb4W+ZMx22atO6qrBu2GNip3LxtuFyB8DLxm0XsKihMpfLoQCL3sLF20HI6neAxa3ZJHuGp2Kk26xECqLj1QivmzXy2urre9j1qygqtqT3JdfVUOqC5YkHOysCTa2U2uAZR1SdawtlVU7Qc3pq17FVyMvYzHKCWvpre5E7IdSoo9VmLOFNRTY5bXFst9QuY6cwWOgK3vPhBkFQ1KYBNshbt7vWtbdp8xLtBc1RwVpmoVb1FrZTcoAFLvaxzJay5bWsbTPbG9E+NqAdcKOHA0JduufxVEOS3cTM8uOjonokp22cjcHqVWHgHKfVDN3mP2Js1cNh6VBTdaaKgJ0JsNWPeTc/GZCWTAiIlCIiAiIgW3awJ5C+lz8hvnzHtrZjYmvUr4RMyVGLmmrK1WmzMQ6ul847QYg2tYj4fUE5l0m9EtLE1aleniKlN6jF2DqKi3Y3NtVIHxNoHDa+FdCVdHVhvBB+fnLN51TE+j/bNEWpYha6jQJ1pII5ZKwyDzmubUwW0cOpbFYCmUG9jQphB4vh8oA8TA1Cm5BzA2INweRGv2mYc5uyym50K2NweItvuD9JHO1Laph6NJvx0+tLC/4c7sFP8AmAzDgRLCViuqVwptydW7wcqkfOZvHRXW2PWU6UnYb7qC2neFvY+MhVsO6EFkZOWZWXdyvJox9b/eGPgzk/AWnprFyDUZiF3KxJJPNuXh/Zvv2MvSfOgvpcA/e0gbTOtJeGrH5C/yMrXGLuB+AvIlV89S/IWHwufqTMcZ6MkWORyrICciEuyqMjBi1gd+qruudZRhmRsv78GqllFRA6oKTdgrVZshsuYWIG7sk2y5b+ysUVR7XJyg2u29bjcvraMTY6aX4S9hc7MtOo5Cl/3hZmYkqCDRpXOjBSczjcW36DN0EChRvUqUlqdYq5u0gVc6g2LIWIUA5m38DoDeXsTRV/4VeiqqAiv1eUAEHs5imZiRcneb+EuUFRVUXqKKlOo2ZGuyNSUtYLcAqe1YHeCpBFpawlEOwYsraqXqrftohzHOpF1qdldTo1jqW1airGpas/c9Qc97jl4cJWmFcj78PnaRqmJUuzNe5ZmIFrdo33zw4tPwE+Jv9pz5cbaJf7HzcfKUFaK+tVF+WZftMe1ZCb9WpPNi7fzGeftA4Ig8ET9I6CY2Iww438M7f0lLbToDcl/yp9W1kJq5Mtnwl6wZJdsp7KqPeZh/KpHzkqnjidz0078ob6Pf5TBgd0qA7o6wbGjKx7eKVRzTMT5Glp/ql8YbCt62Ma3/AMVcn45cQoPkJq4U8pUFbkZcg2XGbNwgpVGTGZ6oUlFOEpIpI1ylmZ2ubEA33kTUxiXc3d2Yjdcmw7gNw4buUkZX/C3kZGq4Vybqj3PJWP0Eoy2zmRlzO2UUwzGwBa111T/OOHC5zHRSDLGNGZFQZVNsi2WwQoqsGU3DXSoSb3uafG5vh8Bg8SGumHrt7tNzfyWbFh+j2MqFWXZ+IzKMq5kamLeDkAwJ/o/wJxOJojIFysHfLfKKdFw+l9QjVAgAO4lraWC/QM4tsPoXtMHNl6gta5NRAbDcLITp3ToGx9hYtLdZjXbuAzDzaBtMSld2+/fKoCIiAiIgIiIHhM07bfTtKDFRRqMRpc9kTcpDxmzaVUWqIreIF/OBzDG+lGv7FKmvvZm+4muY/wBIW0HuFrhAeC06Xl2lM6bj/R5hXuVDIe43HkZreN9Fbfw6qnuYEQOQYymzsXdhmY3OVUQX8FAAkY4XvM6XivRti13Ire6wmJxHQrFrvoP8FJ+kDTFo5TcEgjjxl0u3FifEkzP1OjOIG+i4/KZZPR6v/wC2/wDpMDDB25mWWJBzecz46M4k7qNQ/kb9J7/sfjj6uGqn8jQMThcVkcMptx00seUn1FZ3DJlsEdVXQFcyMoUC2q3YHj32l5PR9tNj2cG/xZF/mYTL4H0ZbUO+nTT36if8uaBrlBH61uycgZGUkMoApdlQS1t6Zl7yRBIQMAQzNYMQLDKNyqOCiwPiPPfMP6Jcc3r4jDp7vWOfmqiZfAeh5V1q4tm7kpqvzZmgch6ljwlxMEx4Tv8AgPR1gqe9Xc83b7KBM1Q6N4VPVoJ8Rf6wPm+nsd23KfIyfh+idd91Nz4KZ9H08FTX1aaDwUCX8o5QPn7DejzFN/BceOn1mWw/ouxJ3qi+LD7TtsQOTYb0UN7dRB4AmZWh6LaI9aox8FA+86JEDTcP6OcGu8O3iQPoJkqHQ7BJuoKfG5mwRAx9HY2HX1aFMfkX9JLWio3Ko8ABLsQEREBERAREQEREBERAREQEREBERAREQE8tPYgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/Z"
                alt=""
                className='itemImg' />
              <div className="details">
                <h1 className='itemTitle'>{Voiture.Marque}</h1>
                <div className="detailItem">
                  <span className='itemKey'>Nombre Cv : </span>
                  <span className='itemValue'>{Voiture.Nombre_Cv}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Serie : </span>
                  <span className='itemValue'>{Voiture.Serie}</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Annee : </span>
                  <span className='itemValue'>{Voiture.Annee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleC