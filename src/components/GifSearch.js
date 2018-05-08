import React from 'react'

const GifSearch = ({onSearch, getGifs}) => {
  return(
    <form onSubmit= {getGifs}>
      <input onChange={onSearch} id="search" />
      <input type="submit"/>
    </form>
  )
}

export default GifSearch
