import './app.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Annoucements from './components/Announcements';


function App() {
  return (
    <div className="app">
   <NavBar/>
   <Header/>
   <div className="section">
    <Dashboard/>
    <Annoucements/>
   </div>
      

    </div>
  );
}

export default App;
