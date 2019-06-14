import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {

    const list = ({allArtists}) => { // {allArtists} y3ny props.allArtists
        console.log(props);
        if(allArtists){ // y3ny lw feh data
            return (
                allArtists.map((item) => {

                    const style={  // momkn a3mlha btre2a tanya f artist.js
                        background: `url('/images/covers/${item.cover}.jpg') no-repeat`
                    }

                    return(
                        <Link key={item.id} to={`/artist/${item.id}`} className='artist_item' style={style}>
                            <div>{item.name}</div>
                        </Link>
                    )
                })
            )
        }
    }

    return(
        <div className='artists_list'>
            <h4>Browser the artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistList;