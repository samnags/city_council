import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Table from './components/table';
import * as BS from 'react-bootstrap';

class App extends Component {

  render() {
    
    return (
      <div>
        <BS.Col
        lg={4}
        >
          <Table members={this.props.members}
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
