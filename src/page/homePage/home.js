import React from "react";
import game from '../../image/game.jpeg'
import {Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import './home.css'
import {Link} from "react-router-dom";
const HomePage = () => {
  return(
      <div className="container-home">
          <div className="image-game">
                <img className="game" src={game}/>
          </div>
          <div className="title">
              <p className="title-game">
                  Funny Game
              </p>
          </div>
          <div className="btn-start">
              <Link to="/creategame">
                  <Button >Start Game </Button>
              </Link>
          </div>

      </div>
  )
}
export default HomePage
