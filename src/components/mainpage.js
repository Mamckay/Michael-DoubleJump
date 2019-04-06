import React from "react";
import "./css/mainpage.css";
import chair from '../assets/chairsale.png';
import keyboard from '../assets/keyboardsale.png';
import game from '../assets/comingsoongame.png';
import { Link } from 'react-router-dom';

export default class MainPage extends React.Component {

  deals() {
    const dealImgs = ['https://target.scene7.com/is/image/Target/GUEST_e58d3991-53a4-4b7c-9e78-77b4945f45ca',
      'https://target.scene7.com/is/image/Target/GUEST_5b1f3daf-8634-437c-82b0-9b702c0551ba',
      'https://target.scene7.com/is/image/Target/GUEST_7b165c8a-aeb5-42b7-ba73-813c90380dbf',
      'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86Z2FtZXN0b3A/9622f423-8a48-5345-b819-5ef50ee9ae63',
      'https://scene7.samsclub.com/is/image/samsclub/0004787588098_A'];

    return dealImgs.map((source, index) => {
      return <Link key={index} to='/store'><img className='deal-img' alt='Great Deal' src={source}></img></Link>
    })
  }

  popular() {
    const popularImgs = ['https://www.brufind.com/wp-content/uploads/2017/02/1082407679-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuDAQgxsIm6HqvkdO-_GxQ2U8xi9sc89vh6W20lwPyQvdOVQvfg',
      'https://target.scene7.com/is/image/Target/GUEST_cbc6b2d8-f493-4321-8b23-1d89a78c6c45',
      'https://target.scene7.com/is/image/Target/GUEST_f06a3dc9-afc8-401f-a241-35b9cc9987c0',
      'https://www.picclickimg.com/d/l400/pict/173780178520_/Gunnar-RAZER-30006-fps-Advanced-Gaming-Glasses.jpg'
    ]

    return popularImgs.map((source, index) => {
      return <Link key={index} to='/store'><img className='deal-img' alt='Great Deal' src={source}></img></Link>
    })
  }


  render() {
    return (
      <section className="containerFeaturedReview">
        <header className="intro">
          <span>Welcome to Double Jump!</span>
          <br />
          <p>
            This sites purpose is to provide reviews and a means to purchase
            video games and accessories
          </p>
          <p>Sign up to utilize the most of this site.</p>
        </header>
        <div className="customHr" />
        <h2 className='section-title'>Featured</h2>
        <div className='sale-container'>
          <Link to='/store' className='sale'><img alt='sale item one' className='sale-img' src={chair}></img></Link>
          <Link to='/store' className='sale'><img alt='sale item two' className='sale-img' src={keyboard}></img></Link>
          <Link to='/store' className='sale'><img alt='sale item three' className='sale-img' src={game}></img></Link>
        </div>
        <div className="customHr" />
        <h2 className='section-title'>Popular Games</h2>
        <div className='deal-container'>
          {this.deals()}
        </div>
        <div className="customHr" />
        <h2 className='section-title'>Whats New</h2>
        <div className='deal-container'>
          {this.popular()}
        </div>

      </section>
    );
  }
}
