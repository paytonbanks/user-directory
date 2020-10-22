import React, { useState, useEffect } from 'react';
import Main from './components/Container';



export default function App() {

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");


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
