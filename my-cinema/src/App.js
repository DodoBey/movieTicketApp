import './App.css';
import Banner from './Components/Banner.';
import MovieList from './Components/MovieList';
import MoviesComponent from './Components/MoviesComponent';
import NavBar from './Components/NavBar';
import Seat from './Components/Seat';

function App() {
  return (
    <div className="all">
    <NavBar/>
    <Banner/>
    <MoviesComponent/>
    </div>
  );
}

export default App;
