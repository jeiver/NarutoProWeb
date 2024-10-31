import {useState,useEffect} from 'react';

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

import {Link} from "react-router-dom";

// import "./HomePage.css";

import CardVertical from '../../Components/CardVertical/CardVertical';

const HomePage = () => {

  const [data, setData]=useState([]);

  useEffect(() => {
    const chargeData = async () => {

      const q = query(collection(db, "FavoritosNaruto"));
      const querySnapshot = await getDocs(q); //parar mientras traingo los datos
      const info = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        info.push({...doc.data(),id:doc.id})

      });
      console.log(info);
      setData(info);
    }
    chargeData();
  }, [])

  console.log(data);
  

  return (
    data.map((element) => {
      return (
        <div className="chards-home">
            <CardVertical hola={element.name} birthdate={element.personal.birthdate} img={element.images[0]} descripcion={element.personal.toString}/>
          {/* {console.log(element.images)} */}
          
        </div>
      )
    }
    )
  )
}

export default HomePage