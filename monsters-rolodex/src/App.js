import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
  };
}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters:users }));
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // Example of destructing
    const { monsters, searchField } = this.state;
    // Same as below
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monsters =>
        monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="App">
          <h1> Monsters Rolodex </h1>
          <SearchBox
            placeholder='Search Monsters'
            handleChange={this.onSearchChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      );
    }
  }

export default App;
