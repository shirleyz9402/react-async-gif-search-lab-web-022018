import React from 'react'

export default class GifList extends React.Component {

  render(){
    const renderGIFS = this.props.gifs.map((gif,i) =>  <div key= {i}><img key={i} src= {gif.images.original.url} alt=""/> <br/></div>)
    return(
      <div>
        {renderGIFS}
      </div>
        )
  }
}
