import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        id="Results"
        value={props.search}
        name="search"
        list="text" 
      />
    </div>
  );
}

export default Search;
