import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'

function Listado() {

    let token = sessionStorage.getItem('token')

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        //API Key c42f6c4504f7a0e283392320a038eef3
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c42f6c4504f7a0e283392320a038eef3&language=es-ES')
            .then(response => {
                let apiData = response.data.results
                setMovieList(apiData)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <>
            {!token && <Navigate to='/' />}
            <div className='row'>

                {
                    movieList.map((oneMovie, idx) => {
                        return (
                            <div key={idx} className='col-3 my-2'>
                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.title.slice(0, 18)}</h5>
                                        <p className="card-text">{'Rating: ' + oneMovie.vote_average + '/10'}</p>
                                        <p className="card-text">{oneMovie.overview.slice(0, 100) + '...'}</p>
                                        <Link to={`/detail?movieID=${oneMovie.id}`} className="btn btn-primary">Detalles</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

            </div>
        </>
    )
}

export default Listado