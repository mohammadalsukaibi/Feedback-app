import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes, FaEdit } from "react-icons/fa"
import {useContext} from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <Card className="card">
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="red" />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="blue" />
            </button>
            <div className="text-dispaly">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
