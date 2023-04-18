import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props){

    let [quantity, setQuantity] = useState(1);

    function increase(){
        console.log("button click");
        let val = quantity + 1;
        setQuantity(val);
        props.onQuantityChange(val);
    }
    function decrease(){
        
        console.log("button click");
        if (quantity === 1) return;
        let val = quantity - 1;
        setQuantity(val);
        props.onQuantityChange(val);
    }


    return (
        <div className = "qt-picker">
            <button className="btn" disabled = {quantity === 1} onClick={decrease}> - </button>
            <label>{quantity}</label>
            <button className="btn" onClick ={increase}> + </button>
        </div>

    );
}
export default QuantityPicker
