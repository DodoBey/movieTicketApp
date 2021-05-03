import './App.css';
import MovieList from './Components/MovieList';
import MoviesComponent from './Components/MoviesComponent';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="all">
    <NavBar/>
    <MoviesComponent/>
    </div>
  );
}

export default App;
