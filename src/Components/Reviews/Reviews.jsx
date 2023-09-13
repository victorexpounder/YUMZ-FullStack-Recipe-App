import React from 'react'
import './Reviews.scss'
import girl1 from '../../Assets/girl1.png'
import girl2 from '../../Assets/girl2.jpg'
export const Reviews = () => {
  return (
    <div className='reviewsContainer'>
        <div className="avatars">
          <div className="ellipse-5" style={{ backgroundImage: `url("https://images.pexels.com/photos/1561319/pexels-photo-1561319.jpeg?auto=compress&cs=tinysrgb&w=800")`}} ></div>
          <div className="ellipse-5" style={{ backgroundImage: `url("https://images.pexels.com/photos/1993660/pexels-photo-1993660.jpeg?auto=compress&cs=tinysrgb&w=800")`,  transform: `translateX(-20px)`}}></div>
          <div className="ellipse-5" style={{ backgroundImage: `url("https://images.pexels.com/photos/8108197/pexels-photo-8108197.jpeg?auto=compress&cs=tinysrgb&w=800")`, transform: `translateX(-40px)`}}></div>
        </div>

        <div className="infoCon">
            <p>Our Happy Customers</p>
            <div className="secondText">

            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M16.4603 6.88425C16.4131 6.7454 16.3264 6.6234 16.2107 6.5333C16.095 6.4432 15.9554 6.38895 15.8093 6.37725L11.5335 6.0375L9.68327 1.94175C9.62434 1.80984 9.5285 1.69779 9.4073 1.61915C9.28611 1.5405 9.14474 1.49861 9.00026 1.49853C8.85578 1.49845 8.71437 1.54018 8.59309 1.6187C8.47181 1.69721 8.37584 1.80915 8.31677 1.941L6.46652 6.0375L2.19077 6.37725C2.04711 6.38863 1.90977 6.44116 1.79519 6.52855C1.6806 6.61594 1.59361 6.73449 1.54464 6.87003C1.49566 7.00556 1.48677 7.15233 1.51903 7.29278C1.55128 7.43323 1.62332 7.56142 1.72652 7.662L4.88627 10.7423L3.76877 15.5813C3.73484 15.7277 3.74571 15.881 3.79998 16.0212C3.85426 16.1615 3.94942 16.2821 4.07312 16.3676C4.19682 16.453 4.34336 16.4994 4.49371 16.5005C4.64406 16.5016 4.79128 16.4576 4.91627 16.374L9.00002 13.6515L13.0838 16.374C13.2115 16.4588 13.3622 16.5025 13.5155 16.4991C13.6688 16.4958 13.8174 16.4455 13.9413 16.3552C14.0652 16.2649 14.1585 16.1387 14.2086 15.9938C14.2587 15.8489 14.2632 15.6921 14.2215 15.5445L12.8498 10.7445L16.2518 7.683C16.4745 7.482 16.5563 7.1685 16.4603 6.88425Z" fill="#F2C94C"/>
            </svg>
            <p> 4,8</p>
            <p className='rating'> (12.5k Review)</p>
            </div>
        </div>
    </div>
  )
}
