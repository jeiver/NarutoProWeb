import {useState,useEffect} from 'react';

import {Link} from "react-router-dom";

// import "./HomePage.css";

import CardHorizontal from '../../Components/CardHorizontal/CardHorizontal';

const HomePage = () => {

  const [data, setData]=useState([]);

  useEffect(()=>{
    fetch("https://dattebayo-api.onrender.com/characters/?page=1")
    .then(resp=>resp.json())
    .then(info=>setData(info.characters));
},[]);

  console.log(data);
  

  return (
    data.map((element) => {
      return (
        <div className="chards-home">
            <CardHorizontal hola={element.name} birthdate={element.personal.birthdate} img={element.images[0]} descripcion={element.personal.toString}/>
          {/* {console.log(element.images)} */}
          
        </div>
      )
    }
    )
  )
}

export default HomePage