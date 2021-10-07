import propTypes from 'prop-types';
import loupe from '../assets/images/icon-search.svg';

const SearchBar = ({ setUsername, fetchUser }) => {

  return ( 
    <section>
      <div className="search">
        <div className="search-bar">
          <div className="search-bar-glass">
            <img src={loupe} alt="Loupe de recherche" />
            <label htmlFor="search-header">
              <span className="visually-hidden">
                Search GitHub username…
              </span>
            </label>
            <input 
              id="search-header"
              type="text" 
              autoComplete="off"
              placeholder="Search GitHub username…" 
              onChange={(evt) => setUsername(evt.target.value)}
            />
          </div>
          <span className="error">No results</span>
          <button onClick={() => fetchUser()}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

SearchBar.propTypes = {
  setUsername: propTypes.string,
  fetchUser: propTypes.func
};
 
export default SearchBar;