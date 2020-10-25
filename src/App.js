import React, { useState } from 'react';
import Main from './components/Container';

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  return (
    <div>
      <div>
        <nav>
          USER DIRECTORY
        </nav>
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}
