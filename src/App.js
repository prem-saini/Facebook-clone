
import './App.css';
import Header from './component/Header_left';
import Feed from './Feed';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">

      <Header />
      <div className='App_body'>
        <Sidebar />
        <Feed />
      </div>

    </div>
  );
}

export default App;
