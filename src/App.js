import React, { useState } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import './App.css';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>My Item List</h1>
      <ItemList items={items} deleteItem={deleteItem} />
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;