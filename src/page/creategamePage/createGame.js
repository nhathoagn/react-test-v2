import React, {useState} from "react";
import {Button, Checkbox, Form, Input} from "antd";
import './createGame.css'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {playerAdd} from "../../store/slices/playerSlice/player";
const CreateGame = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const onFinish = (values) => {
        console.log('Success:', values);
        if (values){
            dispatch(playerAdd(count,values))
            navigate('/loading')
        }
        setCount(count + 1)


    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  return(
      <div className="container-creategame">
          <div className="Label-game">
              <p>
                  Create Game
              </p>
              <hr className="hr-game"/>
          </div>
          <div className="invite-player">
              <Form
                  name="basic"
                  labelCol={{
                      span: 8,
                  }}
                  wrapperCol={{
                      span: 16,
                  }}
                  initialValues={{
                      remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
              >
                  <Form.Item
                      label="Player 1"
                      name="player1"
                      rules={[
                          {
                              required: true,
                              message: 'Please input your Player 1!',
                          },
                      ]}
                  >
                      <Input />
                  </Form.Item>

                  <Form.Item
                      label="Player 2"
                      name="player2"
                      rules={[
                          {
                              required: true,
                              message: 'Please input your Player2!',
                          },
                      ]}
                  >
                      <Input/>
                  </Form.Item>
                  <Form.Item
                      wrapperCol={{
                          offset: 8,
                          span: 16,
                      }}
                  >
                      <Button type="primary" htmlType="submit">
                          Submit
                      </Button>
                  </Form.Item>
              </Form>
          </div>
      </div>
  )
}
export default CreateGame
