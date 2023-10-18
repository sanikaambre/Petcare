import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img23 from './img23.jpg';
import img5 from './img5.jpg';
import img20 from './img20.jpg';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const Comps=()=>{ 
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FF8303' }}>
          <div className="container">
            <a className="navbar-brand" href="#">
            <div>
            <FontAwesomeIcon icon={faPaw} size="2x"/>
            <span className="ml-4 purrfect-text">Purrfect</span>
            </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="search-box">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
          </div>
        </nav>
        <div> 
         <Carousel>
      <Carousel.Item>
        <img style={{height: '60vh'}}
          className="d-block w-100"
          src={img23}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '60vh'}}
          className="d-block w-100"
          src={img5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '60vh'}}
          className="d-block w-100"
          src={img20}
          alt="Third slide"
        />
     
      </Carousel.Item>
    </Carousel></div>
      <h1 className="text-center text-danger my-5" style={{ color: 'black' }}>
      <FontAwesomeIcon icon={faAward} size="lg" className="mr-2" /> Contests and Challenges <FontAwesomeIcon icon={faTrophy} size="lg" className="mr-2" />
        </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://anthonyrubiodesigns.files.wordpress.com/2015/02/anthony-rubio-kimba-2015-new-york-pet-fashion-show.jpg" class="card-img-top" alt="..." height="350px"/>
         <div class="card-body">
        <h5 class="card-title">Pet Fashion Show</h5>
        <p class="card-text"> Date: Saturday, Nov 12th, 2023  Time: 2:00 PM - 4:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cat-and-dog-competition-design-template-1a604ade4205b9f81ea0211c60f37244_screen.jpg?ts=1686133680" class="card-img-top" alt="..." height="350 px"/>
         <div class="card-body">
        <h5 class="card-title">Flyball</h5>
        <p class="card-text">Date: Wednesday, Nov 22th, 2023  Time: 2:00 PM - 6:00 PM </p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3">
          <div className="card card-hover">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWHPngkDuYbmWdo3Ht0F9AOT7_7zYYWj6zP9IeiLa3dRfk-oqAU0hz5PylL6VbrQp2zE&usqp=CAU" class="card-img-top" alt="..." height="350px"/>
         <div class="card-body">
        <h5 class="card-title">Pet a Palooza</h5>
        <p class="card-text">Date: Saturday, Nov 25th, 2023  Time: 4:00 PM - 8:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://flxt.tmsimg.com/assets/p18610621_v_v13_aa.jpg" class="card-img-top" alt="..." height="350"/>
         <div class="card-body">
        <h5 class="card-title">Pet Walk</h5>
        <p class="card-text">Date: Tuesday, Nov 30th, 2023  Time: 2:00 PM - 6:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://cdn-az.allevents.in/events5/banners/142a817f2e12b9ddd12f1bc958b2421b4c40fe1996a9a2857e1debaf2e253712-rimg-w874-h960-gmir.jpg?v=1693035518" class="card-img-top" alt="..." height="350"/>
         <div class="card-body">
        <h5 class="card-title">Dog Picnic</h5>
        <p class="card-text">Date: Saturday, Dec 2nd, 2023  Time: 4:00 PM - 9:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://img.freepik.com/free-vector/international-all-breeds-cat-show-announcement-poster-with-dates-time-place-2-participants-cartoon_98292-7792.jpg" class="card-img-top" alt="..." height="350 px"/>
         <div class="card-body">
        <h5 class="card-title">Meow Madness</h5>
        <p class="card-text">Date: Sunday, Dec 3rd, 2023  Time: 6:00 PM - 9:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiAyLjXZ5_YTlkH71zm6fG0Pn4FNDvjJaTt11v2iu49DAVFMERMEwdQpp8U0RnS3htTY&usqp=CAU" class="card-img-top" alt="..." height="350 px"/>
         <div class="card-body">
        <h5 class="card-title">Pet Parade</h5>
        <p class="card-text">Date: Wednesday, Dec 06th, 2023  Time: 2:00 PM - 4:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://images.squarespace-cdn.com/content/v1/5ecd6bf1ea936a6584d44a2b/1603130126950-88EURNKNX8F4MIXZZTV7/Screen+Shot+2020-10-18+at+4.47.04+PM.png" class="card-img-top" alt="..." height="350"/>
         <div class="card-body">
        <h5 class="card-title">Hallowen Competition</h5>
        <p class="card-text">Date: Sunday, Dec 12th, 2023  Time: 4:00 PM - 10:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://www.expressandstar.com/resizer/6ZpZJBsGL9Dw72PO3NP_7InsFwQ=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/W5DZUWRNVRCYHESBD3YM52ZDQU.jpg" class="card-img-top" alt="..." height="350 px"/>
         <div class="card-body">
        <h5 class="card-title">Furry Friends Fiesta</h5>
        <p class="card-text">Date: Saturday, Dec 16th, 2023  Time: 6:00 PM - 9:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://www.nowplayingutah.com/wp-content/uploads/sites/www.nowplayingutah.com/images/2022/01/classified-featured-receiving-art-for-frame-your-pet-competition-1643234920-scaled.jpeg" class="card-img-top" alt="..." height = "350px"/>
         <div class="card-body">
        <h5 class="card-title">Tails and Trails</h5>
        <p class="card-text">Date: Sunday, Dec 17th, 2023  Time: 2:00 PM - 6:00 PM.</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmIWwntuwNtwozndnERmO4L7uGiww-q5pt6A&usqp=CAU" class="card-img-top" alt="..." height="350 px"/>
         <div class="card-body">
        <h5 class="card-title">Swimming Competition</h5>
        <p class="card-text">Date: Saturday, Dec 23rd, 2023  Time: 6:00 PM - 8:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
          <div className="col-md-3 mb-3">
          <div className="card card-hover">
         <img src="https://inside.isb.ac.th/parentportal/files/2022/08/Pet-show-poster.jpg" class="card-img-top" alt="..." height="350 px"/>
         <div class="card-body">
        <h5 class="card-title">Pet Olympics</h5>
        <p class="card-text">Date: Sunday, Dec 24th, 2023  Time: 2:00 PM - 4:00 PM</p>
        <Link to="/Registration" class="btn btn-danger">Register</Link>
        </div>
        </div>
          </div>
        </div>
      </div>

      </>
    
    )
  }
  export default Comps;