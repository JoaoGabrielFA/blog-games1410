import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Article from './components/Article/Article';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/article/:title' element={<Article/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
