import "./Card.css";

const Card = ({ productImage, name, price, big, discount }) => {
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="card">
      <div className="img-con">
        <img src={productImage} alt={name} className="card-img" />
        {!big && (
          <img src="/heart.svg" alt="heart icon" className="corner-icon" />
        )}
      </div>
      <p>{name}</p>
      <div className="price-con">
        {discount > 0 ? (
          <>
            <span className="discounted-price">
              {Math.round(discountedPrice)}₮
            </span>
            <span className="original-price">{price}₮</span>
            <span className="discount-percent">{discount}%</span>
          </>
        ) : (
          <span className="discounted-price">{price}₮</span>
        )}
      </div>
    </div>
  );
};

export default Card;
