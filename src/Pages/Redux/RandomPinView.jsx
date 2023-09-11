import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addPin, removePin } from "../../Redux/Slice/RandomPinSlice";

function RandomPinView() {
    const dispatch = useDispatch();
    const pinList = useSelector((state) => state.randompin.value)
    const removeArr = (index) => {
        dispatch(removePin(index))
    }
    return (
        <>
            <div>
                <Link to="/redux">Add Pins</Link>
            </div>

            <div>
                {
                    pinList.map((pins, index) => {
                        return (
                            <div key={index}>
                                <div style={{ display: 'flex', gap: '5px', alignItems: 'center', padding: '5px' }}>
                                    <span>{pins.name}</span>
                                    {
                                        pins.pins.map((pin, index) => (
                                            <span key={index}>{pin}</span>
                                        ))
                                    }
                                    <button onClick={(e) => removeArr(index)} >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RandomPinView;