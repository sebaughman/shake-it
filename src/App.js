import React from 'react';
import { useFetch } from './hooks'
import './App.css';
import ReviewList from './Views/ReviewsList';

function App() {
  const [data, loading] = useFetch(
    `https://shakespeare.podium.com/api/reviews`
  );

  return (
    <div className="App">
      <ReviewList reviews={data} />
    </div>
  );
}

export default App;
