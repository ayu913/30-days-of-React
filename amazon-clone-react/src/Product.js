import React from "react";
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product({ id, title, image, price, rating }) {

    const[{user} , dispatch] = useStateValue();
    const addTobasket = () => {
       if(user){
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      }
      else{
        alert("Sorry!! You don't have an account. Please Sign In/Sign Up")
      } 
      
     
    }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>Rs </strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addTobasket}> Add to basket</button>
    </div>
    
  );
}

export default Product;
