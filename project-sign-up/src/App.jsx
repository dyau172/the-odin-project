import "./app.scss";
import SignupForm from "./components/SignupForm";
import ImageSidebar from './components/ImageSidebar';

function App() {
  return (
    <div className="app">
      <div className="left">
        <ImageSidebar/>
      </div>
      <div className="right">
        <SignupForm/>
      </div>

    </div>


  );
}

export default App;
