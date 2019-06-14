import React, { Component } from 'react';
import Banner from './banner';
import ArtistList from './artistList';

// const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {

  constructor(props){
      super(props);

      this.state = {
          artists: ''
      }

  }

  // componentDidMount(){
      
  //     fetch(URL_ARTISTS,{
  //         method: 'GET'
  //     })
  //     .then(response => response.json())
  //     .then(json => {
  //         console.log(json);
  //         this.setState({
  //             artists: json
  //         });
  //     })
  //     .catch(err => console.log(err))
  // }

  componentDidMount() {

    fetch(`./data.json`, { //URL_ARTISTS
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.artists);
        this.setState({
          artists: data.artists
        });
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <Banner />
        <ArtistList allArtists={this.state.artists} />
      </div>
    )
  }

}

export default Home;
