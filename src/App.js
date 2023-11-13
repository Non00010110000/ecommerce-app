import './App.css';
import ImagesSection from './components/ImagesSection';
import Cart from './components/Cart';
import Nav from './components/Nav';

function App() {

  return (

        <div className="App">
          <Nav/>
          <ImagesSection />
          <Cart/>
        </div>

  );
}

export default App;