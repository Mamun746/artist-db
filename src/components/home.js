import React, {Component} from 'react'
import Banner from './banner'
import ArtistsList from './artistslist'

const URL_ARTISTS=`http://localhost:5000/artists`

class Home extends Component{
    state={
        artists:''
    }

    componentDidMount=()=>{
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response=>response.json())
        .then(json=>{
            this.setState({
                artists:json
            })
            
        })
    }
    render(){
        return(
            <div>
            <Banner/>
            <ArtistsList allArtists={this.state.artists }/>
            
            </div>
        )
    }
}

export default Home