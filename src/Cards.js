import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/land1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
             
            />
            <CardItem
              src='https://thumbs.dreamstime.com/b/spring-landscape-blooming-sakura-cherry-tree-single-falling-pink-flower-petals-hills-covered-fresh-green-grass-142256962.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/land3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
             
            />
            <CardItem
              src='images/land4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            
            />
            <CardItem
              src='images/land5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
function CardsService() {
  return (
    <div className='cards'>
      <h1>Check out our Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/land6.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
             
            />
            <CardItem
              src='images/land7.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/land8.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
             
            />
            <CardItem
              src='images/land9.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            
            />
            <CardItem
              src='images/land1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards;
export {CardsService};
