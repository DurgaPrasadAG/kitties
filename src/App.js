import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component'

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [kitties, setKitties] = useState([]);
  const [filteredKitties, setFilteredKitties] = useState(kitties);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((kitties) => setKitties(kitties))
        .catch((error) => console.log(error));
    }, []
  );

  useEffect(
    () => {
      const newFilteredKitties = kitties
        .filter((ele) => {
          return ele.name
            .toLocaleLowerCase()
            .includes(searchField);
        });
      setFilteredKitties(newFilteredKitties);
    }, [kitties, searchField]
  );

  return (
    <div className="App">
      <h1>Kitties</h1>
      <SearchBox
        className='kitties-search-box'
        placeholder='Search Kitties'
        onChangeHandler={onSearchChange}
      />
      <CardList kitties={filteredKitties} />
    </div>
  );
};

export default App;
