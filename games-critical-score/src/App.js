import axios from 'axios';
import { useState, useEffect } from 'react';

import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const getGameList = async () => {
      const response = await axios.get('http://localhost:8000/games');

      console.log(response.data);
    };

    getGameList();
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
        </div>
      </main>
    </>
  );
}

export default App;
