import React, { useState, useEffect } from 'react';
import Loading from './components/Loading.js';
import Tours from './components/Tours.js';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [isLoading, setisloading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteCard = (id) => {
    const UpdatedCard = tours.filter((tour) => tour.id !== id)
    setTours(UpdatedCard);
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tourData = await response.json();
      setisloading(false);
      setTours(tourData);
      
    } catch (er) {
      setisloading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Available</h2>
          <div className='underline'></div>
        </div>
        <button className='btn btn-refresh' onClick={() => window.location.reload()}>
          Refresh
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} deleteCard={deleteCard} />
      </main>
    );
  }

}

export default App;
