import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import TutorSearch from './pages/TutorSearch';
import TuteeSearch from './pages/TuteeSearch';
import FreeBoard from './pages/FreeBoard';
// import FreeBoard2 from './pages/FreeBoard2';
import SignUp from './pages/SignUp';
// import PageNumber from './components/PageNumber';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route inedx element ={<Main/>}/>
          <Route path="main" element ={<Main/>}/>
          <Route path="mypage" element ={<MyPage/>}/>
          <Route path="login" element ={<Login/>}/>
          <Route path="tutorsearch" element ={<TutorSearch/>}/>
          <Route path="tuteesearch" element ={<TuteeSearch/>}/>
          <Route path="freeboard" element ={<FreeBoard/>}/>
          {/* <Route path="freeboard2" element ={<FreeBoard2/>}/> */}
          <Route path="signup" element ={<SignUp/>}/>
          {/* <Route path="pagenumber" element ={<PageNumber/>}/> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './layouts/Layout';
// import Main from './pages/Main';
// import MyPage from './pages/MyPage';
// import Login from './pages/Login';
// import TutorSearch './pages/TutorSearch';
// import TuteeSearch from './pages/TuteeSearch';
// import FreeBoard from './pages/FreeBoard'; 
// import SignUp from './pages/SignUp';
// // import PageNumber from './components/PageNumber';


// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Main />} />
//                     <Route path="main" element={<Main />} />
//                     <Route path="mypage" element={<MyPage />} />
//                     <Route path="login" element={<Login />} />
//                     <Route path="tutorsearch" element={<TutorSearch />} />
//                     <Route path="tuteesearch" element={<TuteeSearch />} />
//                     <Route path="freeboard/:page" element={<FreeBoard />} />
//                     <Route path="signup" element={<SignUp />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;