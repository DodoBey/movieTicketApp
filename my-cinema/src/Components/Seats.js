import Seat from "./Seat"
import Seatimg from '../Images/seat.png';
import './Seat.css';

const Seats = (props) => {
    const seatCreator = [props.numberOfSeats]
    console.log(seatCreator)

    const seatCreate = [];
    for (var i=1; i<=seatCreator.values; i++){
        seatCreate.push(<Seat/>)
    }

    console.log(seatCreate)
    return(
        <div>{seatCreate}</div>
    )
}
export default Seats;