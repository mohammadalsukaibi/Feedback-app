import { v4 as uuidv4 } from "uuid"
import {useState} from 'react'
import Header from "./componenets/Header"
import FeedbackList from "./componenets/FeedbackList"
import FeedbackStats from "./componenets/FeedbackStats"
import FeedbackData from "./data/FeedbackData"
import FeedbackForm from './componenets/FeedbackForm'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) =>{
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
     
    return(
        <>
            <Header text='Feedback app' />
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </>
        
    )
}

export default App