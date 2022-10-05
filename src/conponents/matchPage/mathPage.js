import React, {useEffect, useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import './mathPage.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getQuestions} from "../../store/slices/questions/question";
import {selectAllPlayers} from "../../store/slices/playerSlice/player";
import PageQuestion from "../../page/pageQuestion/pageQuestion";
const Loading = () => {
    const navigate = useNavigate();
    const dispath = useDispatch()
    const player = useSelector(selectAllPlayers)
    const [dataRes,setDatares] = useState([])
    const player1 = []
    player.map( index => {
        player1.push(index.player.player1)
    })
    useEffect(()=>{
        axios.get('https://opentdb.com/api.php?amount=2&type=multiple').then( ( res)=>{
            console.log(0,res.data.results)
            setDatares(res.data.results)
        })
            .catch( e =>{
                console.log(e)
            })
    // if ( player){
    //     localStorage.setItem("player1",player1)
    //     setTimeout(()=>{
    //         navigate('/pageQuestions')
    //     },10000)
    // }
    },[])
    console.log("data",dataRes)
  return(
      <div className="container-loading">
          {dataRes.length <= 0 ? <p className="title">Match</p> : <PageQuestion  data = {dataRes}/>}

      </div>
  )
}
export default Loading
