import React from 'react'

export default class GifSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      searchTerm: ''
    }
  }
  handleClick = event => {
    this.props.changeGifs()
  }
  handleChange = event => {
    this.setState({searchTerm: event.target.value})
    this.props.searchGifs(this.state.searchTerm)
  }
  render(){
    return (
      <div>
        <input type="text" id="seachTerm" onChange = {this.handleChange}/>
        <button onClick = {this.handleClick}>Search GIFs</button>
      </div>
    )
  }

}
