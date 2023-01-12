import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Crew1 from './pages/Crew1';
import Crew2 from './pages/Crew2';
import Crew3 from './pages/Crew3';
import Crew4 from './pages/Crew4';
import Destination from './pages/Destination1';
import Destination2 from './pages/Destination2';
import Destination3 from './pages/Destination3';
import Destination4 from './pages/Destination4';
import HomePage from './pages/HomePage';
import Technology3 from './pages/Tecchnology3';
import Technology1 from './pages/Technology1';
import Technology2 from './pages/Technology2';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        exact
        element={
          <Layout
            imageSource='/home/background-home-mobile.jpg'
            alt='Home background'
          >
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        path='/destination/moon'
        exact
        element={
          <Layout
            imageSource='/destination/background-destination-mobile.jpg'
            alt='Destination Background'
          >
            <Destination />
          </Layout>
        }
      ></Route>
      <Route
        path='/destination/mars'
        exact
        element={
          <Layout
            imageSource='/destination/background-destination-mobile.jpg'
            alt='Destination Background'
          >
            <Destination2 />
          </Layout>
        }
      ></Route>
      <Route
        path='/destination/europa'
        exact
        element={
          <Layout
            imageSource='/destination/background-destination-mobile.jpg'
            alt='Destination Background'
          >
            <Destination3 />
          </Layout>
        }
      ></Route>
      <Route
        path='/destination/titan'
        exact
        element={
          <Layout
            imageSource='/destination/background-destination-mobile.jpg'
            alt='Destination Background'
          >
            <Destination4 />
          </Layout>
        }
      ></Route>
      <Route
        path='/crew/douglas-hurley'
        exact
        element={
          <Layout
            imageSource='/crew/background-crew-mobile.jpg'
            alt='Crew Background'
          >
            <Crew1 />
          </Layout>
        }
      ></Route>
      <Route
        path='/crew/mark-shuttleworth'
        exact
        element={
          <Layout
            imageSource='/crew/background-crew-mobile.jpg'
            alt='Crew Background'
          >
            <Crew2 />
          </Layout>
        }
      ></Route>
      <Route
        path='/crew/victor-glover'
        exact
        element={
          <Layout
            imageSource='/crew/background-crew-mobile.jpg'
            alt='Crew Background'
          >
            <Crew3 />
          </Layout>
        }
      ></Route>
      <Route
        path='/crew/anousheh-ansari'
        exact
        element={
          <Layout
            imageSource='/crew/background-crew-mobile.jpg'
            alt='Crew Background'
          >
            <Crew4 />
          </Layout>
        }
      ></Route>
      <Route
        path='/technology/launch-vehicle'
        exact
        element={
          <Layout
            imageSource='/technology/background-technology-mobile.jpg'
            alt='Technology Background'
          >
            <Technology1 />
          </Layout>
        }
      ></Route>
      <Route
        path='/technology/spaceport'
        exact
        element={
          <Layout
            imageSource='/technology/background-technology-mobile.jpg'
            alt='Technology Background'
          >
            <Technology2 />
          </Layout>
        }
      ></Route>
      <Route
        path='/technology/space-capsule'
        exact
        element={
          <Layout
            imageSource='/technology/background-technology-mobile.jpg'
            alt='Technology Background'
          >
            <Technology3 />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
