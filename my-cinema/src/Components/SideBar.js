import { useState } from 'react';
import DatePicker from 'react-date-picker';
import Seats from './Seats';
import './Sidebar.css'

const SideBar = () => {
    const [value, onChange] = useState(new Date());
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [screenSelection, setScreenSelection] = useState("Imax")

    const screenSelector = (event) => {
        setScreenSelection(event.target.value)
    }

    let numberOfSeats = "";
    switch(screenSelection){
        case "Imax": {
            numberOfSeats = 100;
            break;
        }
        case "3D": {
            numberOfSeats = 80;
            break;
        }
        case "UltraAVX": {
            numberOfSeats = 120;
            break
        }
    }

    return (
        <>
            <div className="sidebarModal">
                <div className="screenDropdown">
                    <select value={screenSelection} onChange={screenSelector}>
                        <option value="Imax">Imax</option>
                        <option value="3D">RealD 3D</option>
                        <option value="UltraAVX">UltraAVX</option>
                    </select>
                </div>
                <div className="dateDropdown">
                    <DatePicker
                        onChange={onChange}
                        value={value}
                    />
                </div>
                <div className="hourDropdown">
                    <select>
                        <option value="12:00">12:00</option>
                        <option value="14:30">14:30</option>
                        <option value="17:00">17:00</option>
                        <option value="19:30">19:30</option>
                        <option value="22:00">22:00</option>
                    </select>
                </div>
                <div className="customerPick">
                    <div className="adultCounter">
                        <button onClick={() => setAdultCount(adultCount - 1)}>-</button>
                        <span>Adult</span>
                        <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
                        <span>{adultCount}</span>
                    </div>
                    <div className="childCounter">
                        <button onClick={() => setChildCount(childCount - 1)}>-</button>
                        <span>Child</span>
                        <button onClick={() => setChildCount(childCount + 1)}>+</button>
                        <span>{childCount}</span>
                    </div>
                </div>
                <div>
                    <Seats
                    numberOfSeats={numberOfSeats}
                    />
                </div>
            </div>
        </>
    )
}

export default SideBar;