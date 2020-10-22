import React, { useState, useEffect } from 'react';
import Main from './components/Container';



export default function App() {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");



  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?&results=100&nat=us")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));

  // }, []);

  return (
    <div>
      <div>
        <nav>
          User Directory
        </nav>
        filter goes here

      </div>
      <div>
        <Main />

      </div>
    </div>

  );

}


//App
  //Header 
  //Main
    //AreaData
      //DataTable <create table header <tr>
        //Nav <render search bar here
        //BodyData < each employee row



  
