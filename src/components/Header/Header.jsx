import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          FoodieGo is a food delivery application that aims to connect users
          with their favorite restaurants and eateries
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
