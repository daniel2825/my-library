import logo from './book.png';
import BookComponent from './component/SendBookComponent';
import GetBookComponent from './component/GetBookComponent';
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
      <body>
      <GetBookComponent/>
      </body>
    </div>
  );
}

export default App;
