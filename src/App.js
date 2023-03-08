import './App.css';
import { Route, Routes } from "react-router-dom";
import Travel from './Components/Travel';
import Post from './Components/post';
import Deletion from './Components/delete';
import PutValues from './Components/Put';
import GetValues from './Components/Get';
function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Travel/>} />
        <Route path="/get" element={<GetValues />} />
        <Route path="/post" element={<Post/>} />
        <Route path="/put" element={<PutValues />} />
        <Route path="/delete"element={<Deletion/>}/>
      </Routes>
      </>
  );
}

export default App;