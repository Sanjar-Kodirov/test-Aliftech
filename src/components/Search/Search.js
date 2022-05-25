import Reactk, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';
const Search = () => {
  const { setSearch, setTags } = useContext(Context);

  return (
    <div className='search-cont container'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        class='input primary'
        placeholder='search by name'
      />

      <div class='select'>
        <select
          onChange={(e) => setTags(e.target.value)}
          className='input primary'
        >
          <option value='posts'>Posts</option>
          <option value='todos'>Todos</option>
          <option value='albums'>Albums</option>
          <option value='photos'>Photos</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
