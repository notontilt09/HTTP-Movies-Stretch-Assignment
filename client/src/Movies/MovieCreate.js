import React from 'react'

const MovieCreate = props => {
    return (
        <form onSubmit={props.handleSubmit} className="add">
            <h3>Add your favorite movie!</h3>
            <input onChange={props.handleChange} name='title' value={props.title} required type='text' placeholder='Movie Title...' />
            <input onChange={props.handleChange} name='director' value={props.director} required type='text' placeholder='Directed By...' />
            <input onChange={props.handleChange} name='metascore' value={props.metascore} required pattern='^[1-9][0-9]?$|^100$' type='text' placeholder='Metascore... (0-99)' />
            <input onChange={props.handleChange} name='star1' value={props.star1} required type='text' placeholder='MovieStar 1...' />
            <input onChange={props.handleChange} name='star2' value={props.star2} required type='text' placeholder='MovieStar 2...' />
            <input onChange={props.handleChange} name='star3' value={props.star3} required type='text' placeholder='MovieStar 3...' />
            <button>Add Movie</button>
        </form>
    );
}

export default MovieCreate;