import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
export default App;