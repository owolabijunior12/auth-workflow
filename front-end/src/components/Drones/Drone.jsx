import "./Drone.css";
import { transactions } from "../../data/data";


const Drone = () => {
//  transactions.slice
  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">All Drones Done</h3>
            <button className="grid-c-title-icon">
                 See all
            </button>
        </div>

        <div className="grid-content">
            <div className="grid-items">
                { transactions.slice(0,3)
                    .map((transaction) => (
                        <div className="grid-item" key = { transaction.id }>
                            <div className="grid-item-l">
                                {/* <div className="avatar img-fit-cover">
                                    <img src={ transaction.image } alt="" />
                                </div> */}
                                <p className="text">{ transaction.name } <span>{ transaction.date }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-scarlet">$ { transaction.amount }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Drone
