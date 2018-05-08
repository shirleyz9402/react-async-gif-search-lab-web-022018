import React from 'react'

const GifList = ({gifs}) => {
  return(
  gifs.map((gif,i) =>
    <li key={i}> <img src={gif.images.original.url} alt=""/> </li>
    )
  )
}
export default GifList
