import loupe from '../assets/images/icon-search.svg';

const SearchBar = ({ setUsername, fetchUser }) => {

  return ( 
    <section className="search">

    <div className="search-bar">
  
          <div className="search-bar-glass">
            <img src={loupe} alt="Loupe de recherche" />
            <label htmlFor="search-header">
              <span className="visually-hidden">Search GitHub username…</span>
            </label>
            <input 
              id="search-header"
              type="text" 
              placeholder="Search GitHub username…" 
              onChange={(evt) => setUsername(evt.target.value)}
            />
          </div>
          <button onClick={() => fetchUser()}>Search</button>
      </div>
    </section>
  );
}
 
export default SearchBar;