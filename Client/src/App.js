import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SDRoutes } from './routes';
import { Home, About, Contact, Blogs } from './pages/index';
function App() {
  return (
    <div className="App">
      <h1>
        <BrowserRouter>
          <Routes>
            <Route path={SDRoutes.Home.path} element={<Home />} />
            <Route path={SDRoutes.About.path} element={<About />} />
            <Route path={SDRoutes.Contact.path} element={<Contact />} />
            <Route path={SDRoutes.Blogs.path} element={<Blogs />} />
          </Routes>
        </BrowserRouter>
      </h1>
    </div>
  );
}

export default App;
