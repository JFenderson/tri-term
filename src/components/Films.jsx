import React, { Component } from 'react';

const apiFilms = "https://ghibliapi.herokuapp.com/films"

class Films extends Component{
    constructor(props) {
        super(props)

        this.state = {
            films:[],
            isLoading: false,
            error: null
        }
    }
    
    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(apiFilms)
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(error => this.setState({ error, isLoading: false }));

    }

    render(){
        // const { film, isLoading, error } = this.state;

        // if (error) {
        //     return <p>{error.message}</p>
        // }

        // if (isLoading) {
        //     return <p>Loading ... </p>
        // }

        return (
            <div className="containerFilms">
                <h1 className="filmsHeading">Films</h1>
                {this.state.films.map((film) =>
                    <div key={film.id} className="card showFilm">
                        <h3 className="filmTitle">{film.title} </h3>
                        <p className="film">{film.description}</p>
                    </div>
                )}

            </div>
        );
    }
}

export default Films;