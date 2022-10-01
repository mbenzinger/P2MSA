import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './view pages/HomePage';
import POSPage from './view pages/POSPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/POS" element={<POSPage/>}></Route>
      </Routes>
    </Router>
 )
}


export default App;