import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
