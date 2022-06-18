
import Fetchfunction from "./components/Fetch";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="settings__menu">
        <Settings/>
      </div>
      <Fetchfunction/>
    </div>
  );
}

export default App;
