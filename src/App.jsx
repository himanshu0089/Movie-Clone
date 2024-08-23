import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Login from "./components/Login";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowseRouter enable routing in the components
import Banner from "./components/Banner";
import UseEffects from "./components/useEffects";
import SignUp from "./components/SignUp";

function App() {
   const [login, setLogin] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

  const handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    setWatchlist(newWatchList);
    localStorage.setItem('movieApp', JSON.stringify(newWatchList))
    console.log(newWatchList);
  };

  const handleRemoveFromWatchlist=(movieObj)=>
  {
    let filterdWatchlist=watchlist.filter((movie)=>
     { return movie.id!=movieObj.id }
    )
    setWatchlist(filterdWatchlist);
    localStorage.setItem('movieApp', JSON.stringify(filterdWatchlist))
    console.log(filterdWatchlist);
  }
  const handleLogin=(login)=>{
      if(login==true){
        setLogin(false);
      }
  }

  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem('movieApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <BrowserRouter>
      <Navbar login={login} handleLogin={handleLogin} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
            </>
          }
        ></Route>
        { login && <Route path="/watchlist" element={<WatchList  watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}></Route> }
        {!login && <Route path="/watchlist" element={<Login login={login} setLogin={setLogin} />}></Route>}
        <Route path="/login" element={< Login login={login} setLogin={setLogin} />} />
        <Route path="/signup" element={< SignUp/>} />
        
        </Routes>
    </BrowserRouter>
    // <>
    //   <UseEffects />
    // </>
  );
}

export default App;
