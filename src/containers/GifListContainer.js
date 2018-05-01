import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const url = 'http://api.giphy.com/v1/gifs/search?q='
const API = '&api_key=dc6zaTOxFJmzC'
export default class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      gifs: [],
      searchGifs: 'YOUR%20QUERY%20HERE'
    }
  }
  componentDidMount(){
    fetch(url + this.state.searchGifs + API).then(gifs => gifs.json())
    .then(json => {
      this.setState(
        {gifs: json.data}
      )
    })
  }
  handleSearch = keyword => {
    this.setState({searchGifs: keyword.split(' ').join('%20')})

  }
  showGifs = () => {
    fetch(url + this.state.searchGifs + API)
    .then(gifs => gifs.json())
    .then(json => {
      this.setState({gifs: json.data})
    })


  }
  render(){
    return (
      <div>
        <GifSearch
        searchGifs = {this.handleSearch}
        changeGifs = {this.showGifs}
        />
        <GifList
        gifs = {this.state.gifs.slice(0,3)}
        />
      </div>
    )
  }
}
