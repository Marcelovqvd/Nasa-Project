import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

interface AsteroidsListByDate {
  name: string;
  links: {
    self: string;
  };
}


const AsteroidsListByDate: React.FC = () => {
  const [asteroidsListByDate, setAsteroidsListByDate] = useState<AsteroidsListByDate[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  async function listByDate(
    event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=ZpR70Yw9ZalOz6lHZEELjIhd4nFfv2q2g77IudBl`)
    .then(response => {
      setAsteroidsListByDate(response.data.near_earth_objects);
    })
  }

  return (
    <>
      <h1>Asteroids</h1>
      <p>Search by date</p>
      <form onSubmit={listByDate}>
        <input
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          placeholder="text the first date"
        />
        <input
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          placeholder="text the last date"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AsteroidsListByDate;
