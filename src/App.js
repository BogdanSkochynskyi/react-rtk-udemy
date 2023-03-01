import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import {useDispatch} from "react-redux";
import {reset, removeAllSongs} from "./store";

export default function App() {
    const dispatcher = useDispatch();
  const handleResetClick = () => {
    //
      dispatcher(reset());
      // dispatcher(removeAllSongs());
  };

  return (
      <div className="container is-fluid">
        <button onClick={() => handleResetClick()} className="button is-danger">
          Reset Both Playlists
        </button>
        <hr />
        <MoviePlaylist />
        <hr />
        <SongPlaylist />
      </div>
  );
}