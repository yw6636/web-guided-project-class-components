import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Class methods to update state
  constructor(){
    super()
    this.state={
      groceries: groceries
    }
  }

  addItem = (event, item) => {
    event.preventDefaults();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    }
    this.setState({...this.state, groceries: [...this.state.groceries, newItem]})
  }

  toggleItem = itemId => {
    console.log(itemId)
    this.setState({...this.state, groceries:this.state.groceries.map(item => {
      if(item.id === itemId){
        return {...item, purchased: !item.purchased}
      }
      return item;
    })})
  }

  clearPurchased = () => {
    this.setState({...this.state, groceries: this.state.groceries.filter(item => {
      if(!item.purchased) return item;
    })})
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm addItem={this.addItem}/>
         </div>
        <GroceryList toggleItem={this.toggleItem} groceries={this.state.groceries} />
        <button onClick={this.clearPurchased}className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);