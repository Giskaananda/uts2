import './App.css';
import Header from './components/Header';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import CardList from './components/Card';
import Testi from './components/Testi'; 
import Footer from './components/Footer';



function App() {
  return (
      <div className="App">
          <Header />
          <NavBar />
          <Hero />
          <CardList />
          <Testi />
          <Footer />
          
      </div>
  );
}

export default App
