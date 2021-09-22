import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import SearchBar from "./SearchBar";


const HomePage = () => {
   
  const [username, setUsername] = useState('Octocat');
  const [user, setUser] = useState([])

  const fetchUser = () => {
    fetch(`https://api.github.com/users/${username}`)
    .then(async (response) => {
      const data = await response.json();
        setUser(data);
      // console.log(data);
    })
    .catch((error) => {
      // showError(error);
      console.log(error);
    });
  };


  // const showError = () => {
  //   const error = document.getElementsByClassName('error');
  //   error.classList.add("error-visible");
  // }
  
  useEffect(() => {
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ( 
    <>
      <Header />
      <SearchBar 
        username={username}
        setUsername={setUsername}
        fetchUser={fetchUser}
      />
      <Main user={user} />
    </>
  );
}
 
export default HomePage;