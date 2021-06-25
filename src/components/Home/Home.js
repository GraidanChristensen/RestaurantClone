import './Home.css';
import plant from '../../media/plant.png'
function Home() {
  return (
    <div className="Home">
      <img className="homeImage" src="https://static.wixstatic.com/media/a560a5_7e7bc9bca5bc41a8b67f34adb1676e7e~mv2_d_2400_3600_s_4_2.jpg/v1/fill/w_634,h_640,al_c,q_85,usm_0.66_1.00_0.01/bevri_website_gift_card.webp" alt="bread plate"/>
      <div className="topHome">
        <div className="filler"> </div>
        <div className="welcome">
          <h1>Welcome to Eat Fresh</h1>
          <img className="homePlantImage" src={plant}/>
        </div>
      </div>
      <div className="discoverHome"></div>
    </div>
  );
}

export default Home;
