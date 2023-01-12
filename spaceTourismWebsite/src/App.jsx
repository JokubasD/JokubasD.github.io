import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Crew1 from './pages/Crew1';
import Destination from './pages/Destination1';
import Destination2 from './pages/Destination2';
import Destination3 from './pages/Destination3';
import Destination4 from './pages/Destination4';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage />}></Route>
        <Route path='/destination/moon' exact element={<Destination />}></Route>
        <Route
          path='/destination/mars'
          exact
          element={<Destination2 />}
        ></Route>
        <Route
          path='/destination/europa'
          exact
          element={<Destination3 />}
        ></Route>
        <Route
          path='/destination/titan'
          exact
          element={<Destination4 />}
        ></Route>
        <Route path='/crew/douglas-hurley' exact element={<Crew1 />}></Route>
        <Route
          path='/crew/mark-shuttleworth'
          exact
          element={<h1>Mark Shuttleworth</h1>}
        ></Route>
        <Route
          path='/crew/victor-glover'
          exact
          element={<h1>Victor Glover</h1>}
        ></Route>
        <Route
          path='/crew/anousheh-ansari'
          exact
          element={<h1>Anousheh Ansari</h1>}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
