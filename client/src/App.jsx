import Companies from './Components/Companies';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import DetailCompanies from './Components/DetailCompanies';

function App() {
 const element = useRoutes([
  {path: '/', element: <Companies />},
  {path: '/company/:name', element: <DetailCompanies />},
 ]);
 return element;
};

export default App
