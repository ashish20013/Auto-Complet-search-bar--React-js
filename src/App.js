import SearchBar from './component/atom/search-bar/search-bar';
import './App.css';
import {useState , useEffect} from 'react'

function App() {
  const [search , setSearch] = useState()

useEffect(() => {
  fetch(" http://cdn-api.co-vin.in/api/v2/admin/location/states ").then((Response)=>Response.json()).then((data)=>setSearch(data))
}, [])

const getSearch =()=>{
  return(
<h2>{search}</h2>
  )
}

  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
