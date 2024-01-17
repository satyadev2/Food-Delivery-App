import RestaurantCard from "./RestaurantCard";
import { restarr } from "../../utils/constants";
import { useState } from "react";

const Body = () => {
    // Initialize with all restaurants
    const [filteredRest, setFilteredRest] = useState(restarr);

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    // Filter logic
                    const filtered = restarr.filter((element) => {
                        return element.info.rating.aggregate_rating > 4;
                    });
                    setFilteredRest(filtered);
                }}>TOP Rated</button>
            </div>
            <div className='res-container'>
                {filteredRest.map((restaurant, index) => (
                    <RestaurantCard
                        key={index}
                        resname={restaurant.info.name}
                        respic={restaurant.info.image.url}
                        cuisines={"Biriyani, Asian, North Indian"}
                        rating={restaurant.info.rating.aggregate_rating}
                        deliveryTime={restaurant.order.deliveryTime}
                    />
                ))}
            </div>
        </div>
    );
}

export default Body;
