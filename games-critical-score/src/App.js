import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const getGameList = async () => {
      const response = await axios.get('http://localhost:8000/games');

      setGameList(response.data);
    };

    getGameList();
  }, []);

  return (
    <>
      <main className="container">
        <Header />
        <div className="row">
          {gameList.map(
            ({ id, name, image, release_year, category, score }) => {
              return (
                <Card
                  key={id}
                  name={name}
                  image={image}
                  year={release_year}
                  category={category}
                  score={score}
                />
              );
            }
          )}
        </div>
      </main>
    </>
  );
}

export default App;
