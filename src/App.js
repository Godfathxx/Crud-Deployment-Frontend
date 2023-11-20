import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreatePet from './components/CreatePet';
import PetList from './components/PetList';
import EditPet from './components/EditPet';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreatePet />} />
          <Route path="/create-Pet" element={<CreatePet />} />
          <Route path="/Pet-list" element={<PetList />} />
          <Route path="/edit-Pet/:id" element={<EditPet />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

