import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Table from './components/table';
import * as BS from 'react-bootstrap';

class App extends Component {
  // constructor(props) {
  //   super(props)
    
  // }

  handleClick = () => {
      alert("hi")
  }


  render() {
    
    return (
      <div>
        <BS.Col
        lg={4}
        >
          <Table 
          onClick={this.handleClick}
          members={this.props.members}
          />
        </BS.Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  }
}

export default connect(mapStateToProps)(App);
