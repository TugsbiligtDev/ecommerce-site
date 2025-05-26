import "./Card.css";

const Card = ({ ProductImage, Name, Price, Big, Discount }) => {
  const discountedPrice = Price - (Price * Discount) / 100;

  return (
    <div className="card">
      <div className="img-con">
        <img src={ProductImage} alt={Name} className="card-img" />
        {!Big && (
          <img src="./heart.svg" alt="heart icon" className="corner-icon" />
        )}
      </div>
      <p>{Name}</p>
      <div className="price-con">
        {Discount > 0 ? (
          <>
            <span className="discounted-price">
              {Math.round(discountedPrice)}₮
            </span>
            <span className="original-price">{Price}₮</span>
            <span className="discount-percent">{Discount}%</span>
          </>
        ) : (
          <span className="discounted-price">{Price}₮</span>
        )}
      </div>
    </div>
  );
};

export default Card;
