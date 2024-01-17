const RestaurantCard = ({ resname, cuisines, rating, deliveryTime, respic }) => {
    return (
        <div className='res-card'>
            <img className="res-logo" src={respic} alt={`${resname} Logo`} />
            <h3>{resname}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
}
export default RestaurantCard;