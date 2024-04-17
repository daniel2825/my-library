import logo from './book.png';
import BookComponent from './component/bookComponent';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        
        <h1>Book register</h1>
        </div>
        <BookComponent/>
      
      </header>
      <h1>fdf</h1>
    </div>
  );
}

export default App;
