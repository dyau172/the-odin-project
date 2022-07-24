import './app.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Annoucements from './components/Announcements';


function App() {
  return (
    <div className="app">

      <div className="nav">
        <NavBar />
      </div>

      <div className="section">
        <Header />

        <div className="container">
          <Dashboard />
          <Annoucements />
        </div>

      </div>


    </div>
  );
}

export default App;
