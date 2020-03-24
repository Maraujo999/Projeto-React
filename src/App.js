import React, {Component} from 'react';
import DataContainer from './components/DataContainer';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  handleClick = () => {
    this.props.dispatch({
      type: 'DATA_REQUEST'
    })
  }

  render(){
    return (
      <div className='container-fluid mt-3'>
      <h2 className='jumbotron text-center'>Projeto Redux-React-Java</h2>
      <button onClick={this.handleClick} 
      className='btn btn-outline-dark btn-sm'>
        Listar Alunos
      </button>

      <hr></hr>      

      <DataContainer></DataContainer>

      </div>
    )
  }
}

export default connect()(App);
