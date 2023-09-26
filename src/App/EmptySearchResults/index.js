import React from 'react'

import './EmptySearchResults.css'


function EmptySearchResults(props) {
  return (
    <p className='textNada'>No hay ningun resultado para {props.searchText} </p>
  )
}

export {EmptySearchResults}