import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPin } from "../../Redux/Slice/RandomPinSlice";


const RandomPin = () => {
    const dispatch = useDispatch();
    const pinList = useSelector((state) => state.randompin.value);

    const [randomPins, setRandomPins] = useState([]);

    const addArr = () => {
        dispatch(addPin({
            name: 'Random Pin',
            pins: randomPins
        }))
        setRandomPins([]);
    }

    const genratePin = () => {
        const randomNumbers = getRandomNumbers();
        setRandomPins(randomNumbers);
    }

    const getRandomNumbers = (min = 1, max = 100) => {
        const numbers = [];
        for (let i = 0; i < 5; i++) {
            numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return numbers;
    }

    return (
        <>
            <div>
                <Link to="/redux-view">View Pins</Link>
            </div>
            <p>Welcome to Random Pin Using Redux</p>
            <button onClick={() => genratePin()} > Genrate Pin </button>
            {
                randomPins.length > 0 ?
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        {
                            randomPins.map((pin, index) => (
                                <span key={index}>{pin}</span>
                            ))
                        }
                        <span>
                            <button onClick={() => addArr()} >
                                Add Pin
                            </button>
                        </span>
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default RandomPin;