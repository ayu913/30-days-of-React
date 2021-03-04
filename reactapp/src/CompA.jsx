import axios from "axios";
import React, { useState, useEffect } from "react";
import CompB from "./CompB";


const CompA = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        //alert("I am Clicked");
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);

        }
        getData();
    });
    return (
        <>
            <h1>You choose <span> {num} </span> value</h1>
            <h1>My name is <span> {name} </span> </h1>
            <h1>I have <span> {moves} </span> moves</h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <CompB />
        </>
    );
};

export default CompA;