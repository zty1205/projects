import { BrowserRouter, Routes, Route } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((r) => (
          <Route path={r.path} element={r.element} key={r.key}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
