import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  console.log(data);
  
  // Fetch data from the Express API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3030'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.text();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Response</h1>
      <p className='data'>{data}</p>
    </div>
  );
};

export default App;
