import React from 'react';
import './SearchResult.scss';

export const SearchResult = ({result, onClick}) => {
  return (
    <div className='search-result' onClick={()=>onClick(result)}>{result.author}</div>
  )
}
