import {useState} from 'react'
import Header from "./componenets/Header"
import FeedbackList from "./componenets/FeedbackList"
import FeedbackStats from "./componenets/FeedbackStats"
import { FeedbackProvider } from "./context/FeedbackContext"
import FeedbackData from "./data/FeedbackData"
import FeedbackForm from './componenets/FeedbackForm'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

     
    return(
        <FeedbackProvider>
            
            <Header text='Feedback app' />
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            
        </FeedbackProvider>
        
        
    )
}

export default App