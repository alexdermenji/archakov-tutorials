import Home from '../pages/Home';
import About from '../pages/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../pages/Post';
import { Route, Routes } from 'react-router-dom';

// function Route({ path, children, exact }) {
//   const { pathname } = window.location;

//   if (exact) {
//     if (path === pathname) {
//       return children;
//     }
//   } else {
//     if (pathname.includes(path)) {
//       return children;
//     }
//   }

//   return null;
// }
export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path={'/post/:postNumber'} element={<Post />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}
