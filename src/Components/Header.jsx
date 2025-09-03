import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="menu-container">
          <div className="nav-left">
            <div className="logo-container">
              <img src="/logo.svg" alt="pinecone logo" />
              <p>ECOMMERCE</p>
            </div>
            <p>Ангилал</p>
          </div>
          <div className="search-bar">
            <img src="/search.svg" alt="Search products" />
            <input type="text" placeholder="Бүтээгдэхүүн хайх" />
          </div>
          <div className="nav-right">
            <img src="/heart.svg" alt="Wishlist icon" />
            <img src="/shopping-card.svg" alt="Card icon " />
            <div className="btn-container">
              <button className="primary-btn">Бүртгүүлэх</button>
              <button className="secondary-btn">Нэвтрэх</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
