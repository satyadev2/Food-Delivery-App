import React from 'react';
import ReactDOM from 'react-dom/client';



const Header = () => {
    return (
        < div className="header" >
            <div className='logo-container'>
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757406_PjHAMPHNAEyf5NvyEYlC7mJNRKHHkmCz.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </ div >
    );
};

const RestaurantCard = () => {
    return (<div className='res-card'>
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/288abbc58babf7b063b256e729b045b9"></img>
        <h3>Barbeque Nation</h3>
        <h4>Biriyani,Asian,North Indian</h4>
        <h4>4.3 stars</h4>
        <h4>38 min</h4>

    </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                search
            </div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />  <RestaurantCard />  <RestaurantCard />  <RestaurantCard />  <RestaurantCard />  <RestaurantCard />
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>)
}

const root = ReactDOM.createRoot(
    document.querySelector("#root")
)

root.render(<AppLayout />)