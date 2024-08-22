import React, { useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    // Search logic
  }

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search for products...'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
