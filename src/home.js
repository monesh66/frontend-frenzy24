import './css/home.css';
import mainvid from './asset/main.mp4';



function Home() {
  return (
    <>
    <section className='mainSection'>
        <div className="hortext">
            <p>Techonology</p>
            <p>Of</p>
            <p>Institute</p>
            <p>Amman</p>
            <p>Bannari</p>
        </div>
        <div className="mainvid">
            <video src={mainvid} type="video/mp4" loop autoPlay muted></video>
            <div className="maintext">
                <h1>UNLOCK NEW</h1>
                <h1>PATHWAYS</h1>
                <h1>TO SUCCESS</h1>
            </div>
            <div className="vidtext">
                <div className="text1">
                    <h1>Undergraduate</h1>
                    <p>Four-Years and accelerated programs for resent high school graduates</p>
                </div>
                <div className="text2">
                    <h1>Adult</h1>
                    <p>Associate and bachelor's program with online or night class</p>
                </div>
                <div className="text3">
                    <h1>Graduate</h1>
                    <p>Advanced studies for a master's degree endorsement ar dectorate</p>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;
