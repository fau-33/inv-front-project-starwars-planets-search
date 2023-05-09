import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';
import apiStarWars from '../services/apiStarWars';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({});

  useEffect(() => {
    const fetchPlanets = async () => {
      const newPlanets = await apiStarWars();
      setPlanets(newPlanets);
    };
    fetchPlanets();
  }, []);

  const contextType = {
    planets,
    filterByName,
    setFilterByName,
  };
  return (
    <StarWarsContext.Provider value={ contextType }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StarWarsProvider;