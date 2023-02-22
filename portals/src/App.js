import React, { Component } from 'react';
// import MyComponent from './components/MyComponent';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
    };
  }

  handleShowModal = () => {
    console.log(this.state.display);
    this.setState({ display: true });
  };

  handleCloseModal = () => {
    console.log('Le modal se ferme');
    this.setState({ display: false });
  };

  render() {
    return (
      <div className='App'>
        <button onClick={this.handleShowModal}>Show Modal</button>
        {this.state.display && <Modal onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;
