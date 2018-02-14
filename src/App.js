import React, { Component } from 'react';
import './App.css';
import Films from './components/Films';
import People from './components/People';



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      showFilms: false,
      showPeople: false
    }
    this.state.handleFilms = this.handleFilms.bind(this);
    this.state.handlePeople = this.handlePeople.bind(this);
  }

  handleFilms(e){
    e.preventDefault();
    this.setState({
      showFilms: true,
      showPeople: false
    })
  }

  handlePeople(e){
    e.preventDefault();
    this.setState({
      showPeople: true,
      showFilms: false
    });
  }



  render() {
    return (
      <div>
        <nav>
          <button className="filmsBtn" onClick={this.handleFilms.bind(this)}>Show Films</button>
          
          <button className="peopleBtn" onClick={this.handlePeople.bind(this)}>Show People</button>

        </nav>

        <div>
          {this.state.showFilms ? <Films /> : null}
          {this.state.showPeople ? <People /> : null}
        </div>
      </div>
    );
  }
}

export default App;
