import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Headers/HeaderInitial/Header';
import './App.css';
import OpeningPage from './Components/Content/OpeningContent/OpeningPage';


function App() {
  return (
    <Container className='MainContainer' fluid>
      <Header />
      <OpeningPage />
    </Container>
  );
}

export default App;
