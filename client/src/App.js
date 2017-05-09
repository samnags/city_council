import React, { Component } from 'react';
import './App.css';
import Table from './components/table';


class App extends Component {
  render() {
    return (
      <div>
        <Table members={[
          {"id":1,"firstName":"Gilbert","lastName":"Cedillo","party":"Democrat","district":1},
          {"id":2,"firstName":"Paul","lastName":"Krekorian","party":"Democrat","district":2},
          {"id":3,"firstName":"Bob","lastName":"Blumenfield","party":"Democrat","district":3}]}
        />
      </div>
    );
  }
}

export default App;
