import { video } from "./index";
import "./Cards.css";

const Cards = () => {
  return (
    <div className=" grid-c1">
   <video src={video}  
        autoPlay
        muted
        loop />
    </div>
  )
}

export default Cards
