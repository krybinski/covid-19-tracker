import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function handleFetch() {
      const data = await fetchData();
      setData(data);
    }

    handleFetch();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
