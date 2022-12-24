import React from 'react';

const CartItem = (props) => {
    const { price, title, qty } = props.product;
    const { 
      product, 
      onIncreaseQuantity, 
      onDecreaseQuantity, 
      onDeleteProduct } = props;
    return (
      <div className="cart-item">
        {props.jsx}
        <div className="left-block">
          <img style={styles.image} alt="" src={product.img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://www.pngmart.com/files/21/Add-Button-PNG-Transparent.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_QZe0oYEp6-QEsMGseYQ1X2vEaFb_SDz6zfh9Ar8et4-f6fgm4G6jivSlDDNZB2AfAk&usqp=CAU"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1KlcHYRhmQBFbU1GgWNlS0dn4_2AF-K0cTkP8B-FmpRa62evYhVMfY0sJH7O7GisVxE&usqp=CAU"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;