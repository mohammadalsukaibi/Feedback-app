import Spinner from "./shared/Spinner"
import FeedbackItem from "./FeedbackItem";
import {useContext} from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.lenght === 0)){
        return <h3>No feedback</h3>
    }

    return isLoading ? (<Spinner />) :
    (<div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem 
            key={item.id} 
            item={item}
            />
        ))}
    </div>) 

}

export default FeedbackList
