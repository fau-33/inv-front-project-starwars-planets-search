import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

function Filters() {
  const { setFilterByName } = useContext(StarWarsContext);
  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setFilterByName({ name: e.target.value }) }

      />
    </section>
  );
}

export default Filters;
