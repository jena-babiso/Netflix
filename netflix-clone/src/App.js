import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       {/* <Home /> */}
      <Footer />

      </header>
    </div>
  );
}

export default App;
