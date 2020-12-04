import React, {useEffect, useState} from "react";
import Quotes from "./Quotes";
import '../App.css';




const App = () => {  
const [quotes, setQuotes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState()
  useEffect(() =>{
    getQuotes();
  }, [query]);
  const getQuotes = async() => {
    const response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15`);
    const data = await response.json(); 
    setQuotes(data);
  }

const updateSearch = e =>{
  setSearch(e.target.value);
} 

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className="App"> 
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type='text' value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">Search</button>
    </form>
    <div className= "quote">
    {quotes.map(quote => (
      <Quotes 
      key={quote.quote}
      quote={quote.quote} 
      character={quote.character}
      image={quote.image}
      />
    ))}
    </div>
    </div>
  );
};

export default App;