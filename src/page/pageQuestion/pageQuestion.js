// import React, {useEffect, useState} from "react";
// import './pageQuestion.css'
// import {Button, Steps, message, Radio} from "antd";
// import axios from "axios";
// import QuestionPage from "../../conponents/question/question";
// import {useDispatch, useSelector} from "react-redux";
// import {saveAnwser, selectAllQuestion} from "../../store/slices-old/questions/question";
// const { Step } = Steps;
// const steps = [
//     {
//         title: "1",
//         // content: <QuestionPage />,
//         content: 1,
//     },
//     {
//         title: "2",
//         // content: <QuestionPage/>,
//         content: 2,
//     },
//
// ];
// const PageQuestion = ({data} = []) => {
//     const dispatch = useDispatch()
//     const [count,setCount] = useState(10)
//     const [questionLength, setquestionLength] = useState()
//     const questionData = useSelector(selectAllQuestion)
//     let countdown
//     let flag = data.length
//     useEffect( ()=> {
//          countdown = setInterval( ()=>{
//             setCount(prevState => {
//                 if (prevState <= 0){
//                     flag = flag - 1
//                     if (flag<=0){
//                         clearInterval(countdown)
//                     }
//                     next()
//                     return  prevState = 10
//                 }
//                 else {
//                    return  prevState - 1
//                 }
//             })
//         },1000)
//
//     },[])
//     const [value, setValue] = useState([]);
//     const onChange = (e) => {
//         console.log('radio checked', e.target.value);
//         setValue(e.target.value);
//         dispatch(saveAnwser(value))
//     };
//
//     const [current, setCurrent] = useState(0);
//     let [checked,setChecked] = useState(false)
//     const handleChecked = () => {
//       setChecked(!checked)
//     }
//     const next = () => {
//         setCurrent(current + 1);
//     };
//     return(
//       <div className="container-page-questions">
//           <div className="header-page-questions">
//               <div className="header-page-questions-left">
//                   <p className="Questions-title-left">Questions Left</p>
//               </div>
//               <div className="header-page-questions-right">
//                   <p className='Questions-title-right'>Timeremaining <span className="countdown">{count}</span></p>
//
//               </div>
//           </div>
//           <Steps current={current} style={{display: "none"}}>
//               {data.map((item) => (
//                   <Step key={item.question} title={item.question} />
//               ))}
//           </Steps>
//           <div className="steps-content">{data[current].question}</div>
//           <Radio.Group style={{display: "flex",flexDirection: "column",marginLeft: "36%",gap: "50px", marginTop: "2%"}}  className="radio-group" onChange={onChange} value={value}>
//               {data[current].incorrect_answers.map(value =>
//                           <Radio className="option" value={value}>{value}</Radio>
//               )
//               }
//               <Radio value={data[current].incorrect_answers}>{data[current].incorrect_answers}</Radio>
//           </Radio.Group>
//           <div>
//           </div>
//       </div>
//   )
// }
// export default PageQuestion
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const PageQuestion = () => {
    const dispatch = useDispatch();
    const [timeLeft, setTimeLeft] = useState(10)
    useEffect(()=>{
        const countDown = setInterval( () => {
            setTimeLeft( (prevState) => prevState -1)
        },1000)
        return () =>{
            clearInterval(countDown)
        }
    },[])
    return (
        <div>
            <div className="container-page-questions">
                <div className="header-page-questions">
                    <div className="header-page-questions-left">
                        <p className="Questions-title-left">Questions Left</p>
                    </div>
                    <div className="header-page-questions-right">
                        <p className='Questions-title-right'>Timeremaining<span className="countdown">{timeLeft}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageQuestion
