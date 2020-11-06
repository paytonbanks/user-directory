import React, { useState } from 'react';
import Main from './components/Container/container';
import '../src/style.css';




export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  return (
    <div className="background">
        <div>
          <div>
            <nav className="Background">
              <h1 className="Title">USER DIRECTORY</h1>
              <h4 className="Subtitle">Find Co-workers</h4>

            </nav>
          </div>
          <div>
            <Main />
          </div>
        </div>

    </div>
  );

  
}
