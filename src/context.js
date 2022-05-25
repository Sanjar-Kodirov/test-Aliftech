import React, { useState, createContext, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  /* search */
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('photos');
  const getPhotos = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${tags}`
    );
    const data = await response.json();
    setPhotos(data);
    setIsloading(false);
  };
  useEffect(() => {
    getPhotos();
  }, [tags]);
  return (
    <Context.Provider
      value={{
        photos,
        isLoading,
        setPhotos,
        search,
        setSearch,
        getPhotos,
        setTags,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
