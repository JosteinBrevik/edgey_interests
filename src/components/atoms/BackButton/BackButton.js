import './BackButton.css';
import BackArrowSVG from "../../../assets/back-arrow.svg"
import {
    Link
  } from "react-router-dom";

const BackButton = ({BackPage}) =>(
    <Link className="BackButton" to={"/"+ BackPage}>
        <img src={BackArrowSVG} alt="back arrow"/>
    </Link>
)

export default BackButton;