import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './mathPage.css'
import {useDispatch, useSelector} from "react-redux";
import {GAME} from "../../utils/constants";
const Loading = () => {
    const navigate = useNavigate();
    const dispath = useDispatch()
    const [round,setRound] = useState()
    const Isgame = useSelector((state) => state.gameSlices.state)
    useEffect(()=>{
        if (localStorage.getItem("round")){
         setRound(localStorage.getItem("round"))
        }
    },[])
    useEffect( ()=>{
        if (Isgame === GAME){
            navigate('/pageQuestions')
        }
    },[])
  return(
      <div className="container-loading">
           <p className="title">Match {round}</p>

      </div>
  )
}
export default Loading
