import React, { useState, useEffect } from 'react';

import Datatable from "./datatable";



export default function App() {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");



  useEffect(() => {
    fetch("https://randomuser.me/api/?&results=100&nat=us")
      .then((response) => response.json())
      .then((json) => setData(json));

  }, []);

  return (
    <div>
      <div>
        filter goes here

      </div>
      <div>

        <Datatable 
        data={data} />
      </div>
    </div>

  );

}

  
