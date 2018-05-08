import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      searchWord: ''
    }
  }
  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.searchWord !== this.state.searchWord){
  //     this.fetchGifs()
  //   }
  // }
  handleSearch = event => {
    // event.preventDefault()
    console.log(event.target.value)
    this.setState({searchWord: event.target.value.replace(' ', '-')})
  }
  fetchGifs = event => {
    event.preventDefault()
    fetch('http://api.giphy.com/v1/gifs/search?q=' + this.state.searchWord + ' &api_key=dc6zaTOxFJmzC').then(r => r.json()).then(r => this.setState({gifs: r.data.slice(0,3)}))
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <GifSearch
        getGifs = {this.fetchGifs}
        onSearch = {this.handleSearch}
        />
        <ul id="gif-list">
        <GifList
        gifs = {this.state.gifs}
        />
        </ul>
      </div>
    )
  }
}
