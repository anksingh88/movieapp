import { useEffect, useState } from 'react';
import './App.css';
function App() {
  // url=`http://www.omdbapi.com/?t=thor&apikey=6dfdc2e8`;
  const[Title,SetTitle]=useState(null);
  const[name,setName]=useState("thor");
  useEffect(()=>{
    getmoviedata();
  },[])
  function readname(value){
    setName(value);
  }
  function getmoviedata(){
    let url=`http://www.omdbapi.com/?t=${name}&apikey=6dfdc2e8`;

    fetch(url)
    .then((response)=>response.json())
    .then((movie)=>{
      SetTitle(movie)
      // console.log(movie);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="padd">
          <h1 >Movie Search</h1>
        <div className="input-group">
          <input type="text" placeholder="Type here" onChange={(event)=>(readname(event.target.value))} className="search"></input>
          <button className="btn" onClick={getmoviedata}>Get Movie</button>
        </div>{
          Title?.Error===undefined?(
        
        <div className="movie">
          <div className="poster">
            <img src={Title?.Poster} alt="poster" className="img-poster"></img>

          </div>
          <div className="details">
            <div className="padd">
              <h1>{Title?.Title}</h1>
              <p><strong>Genre</strong> : {Title?.Genre}</p>
              <p><strong>Director</strong> : {Title?.Director}</p>
              <p><strong>Plot</strong> : {Title?.Plot}</p>
              <p><strong>Actors</strong> : {Title?.Actors}</p>
              <p><strong>Language</strong> : {Title?.Language}</p>
              <p><strong>Released</strong> : {Title?.Released}</p>
              <p><strong>Runtime</strong> : {Title?.Runtime}</p>
              <p><strong>Production</strong> : {Title?.Production}</p>
              <div className="ratings">
                {
                  Title?.Ratings.map((rating,index)=>(
                  
                  <div key={index}>
                    <strong>{rating.Source}</strong>
                    <h3>{rating.Value}</h3>
                  </div>
                  ))
                }
             
              </div>

              </div> 

          </div>

        </div>
            ):
            (
              <h1>Movie Not Found</h1>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
