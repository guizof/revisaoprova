import React, { useState } from 'react';

const BuscarDOG = () => {
  const [dogImage, setDogImage] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search');
      const data = await response.json();
      setDogImage(data[0].url);
    } catch (error) {
      console.error('Erro ao buscar imagem do cachorro:', error);
    }
  };

  return (
    <div>
      {dogImage && <img src={dogImage} alt="Cachorro" />}
      <p></p>
      <button onClick={fetchDogImage}>Buscar Imagem de Cachorro</button>
    </div>
  );
};

export default BuscarDOG;
