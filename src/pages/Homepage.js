import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <div className="Home">
            <Header />
         <div className="homePage">
            <div className="icons">
            <img src="https://cdn3.iconfinder.com/data/icons/female-user-icons/500/fuser-Graduate-512.png" alt="" className="left-icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/68/68045.png" alt="" className="right-icon" />
            </div>
            <h1 className="title">Missing Grade Reporting System</h1>
         </div>
        <div className="welcome">
            <h3>Welcome to Your Portal</h3>
            <p> Track your progress, explore resources, and stay updated on missing grades to excel academically.</p>
            <Link to="/LoginPage">
                <button className="home-button">
                    <img src="https://static-00.iconduck.com/assets.00/gradebook-icon-1810x2048-so1p8gaz.png" alt="" />
                    <span>Get Started</span>
                </button>
            </Link>
        </div>
        <Footer />             
    </div>
    );
}
 
export default Homepage;