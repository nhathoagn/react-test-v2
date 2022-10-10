import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./page/homePage/home";
import CreateGame from "./page/creategamePage/createGame";
import Loading from "./conponents/matchPage/mathPage";
import PageQuestion from "./page/pageQuestion/pageQuestion";
import QuestionPage from "./conponents/question/question";
import MathPage from "./conponents/matchPage/mathPage";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/mathpage" element={<MathPage/>}></Route>
         <Route path="/creategame" element={<CreateGame/>}/>
         <Route path="/loading" element={<Loading/>}/>
         <Route path="/pageQuestions" element={<PageQuestion/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
