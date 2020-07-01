import React from 'react';

import { ButtonImg } from './style';
import api from '../../services/api';

const List: React.FC = () => {

  async function showImage() {
    const response = await api.get('/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY');
    console.log(response.data);
  }

  return (
    <>
      <h1>List</h1>
      <ButtonImg onClick={showImage}>Load image</ButtonImg>
    </>
  );
}

export default List;
