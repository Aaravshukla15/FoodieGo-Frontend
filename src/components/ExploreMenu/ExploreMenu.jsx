import './ExploreMenu.css';
import PropTypes from 'prop-types';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='exploreMenu' id='exploreMenu'>
            <h1>Explore Our Menu</h1>
            <p className='exploreMenu-text'>Indians, can even have enough of a biryani. Biryani is my most favorite rice-based dish.
                Even if I have to have biryani every day, I won’t mind it at all.</p>
            <div className='exploreMenu-list'>
                {menu_list.map((item, index) => {
                    return (<div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='exploreMenu-listItem'>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                        <p>{item.menu_name}</p>
                    </div>)
                })}
            </div>
            <hr />
        </div>
    )
}

ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu
