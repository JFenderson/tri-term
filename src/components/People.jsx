import React, { Component } from 'react';

const apiPeople = 'https://ghibliapi.herokuapp.com/people'



class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people:[],
            isLoading: false,
            error: null
        }

    }


    componentDidMount(){
        this.setState({ isLoading: true });

        fetch(apiPeople)
        .then(res => res.json())
        .then(people => this.setState({people}))
        .catch(error => this.setState({ error, isLoading: false }));
            
    }


    
    render(){
        // const { person, isLoading, error } = this.state;

        // if(error) {
        //     return <p>{ error.message }</p>
        // }

        if(!this.state.people) {
            return <p>Loading ... </p>
        }
        
        return (
            <div className="containerPeople">
                <h1 className="peopleTitle">People</h1>
                {this.state.people.map((person) => 
                    <div key={person.id} className="card showPeople">
                  <h3 className="personName">{person.name} </h3>
                  <p className="person">{person.age}</p>
                  <p className="person">{ person.gender}</p>
                  <a href={person.films}>film:{person.films}</a>
                  </div>
                )}
                
            </div>
        );
       
    } 
    
}

export default People