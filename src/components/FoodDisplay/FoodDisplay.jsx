import { useContext } from 'react';
import './FoodDisplay.css';
import PropTypes from 'prop-types'; // Import PropTypes
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../context/StoreContext';



const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className='food-display-list'>{food_list.map((item, index) => {
                if (category === "All" || category === item.category) {
                    return <FoodItem key={index}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image} />
                }
            })}
            </div>
        </div>
    )
}

FoodDisplay.propTypes = {
    category: PropTypes.string
};

export default FoodDisplay;
