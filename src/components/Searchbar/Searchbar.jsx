import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

export default function Searchbar({ onSubmit }) {
  const [searchImage, setSearchImage] = useState('');

  const handleImageChange = event => {
    setSearchImage(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchImage.trim() === '') {
      return alert('Please, enter image name.');
    }

    onSubmit(searchImage);

    setSearchImage('');
  };

  return (
    <header className="Searchbar">
      <h1 className="visually-hidden">images gallery</h1>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <label htmlFor="searchInput"></label>
        <input
          id="searchInput"
          type="text"
          name="image"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImage}
          className="SearchForm-input"
          onChange={handleImageChange}
        ></input>
        <button type="submit" className="SearchForm-button">
          <FcSearch size={30} />
          <span className="SearchForm-buttonLabel">Search</span>
        </button>
      </form>
    </header>
  );
}
