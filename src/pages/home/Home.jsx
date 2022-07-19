import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import pic1 from './user.PNG';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';
import pic2 from './php.PNG';
import pic3 from './figma.PNG';
import pic5 from './python.PNG';
import pic4 from './Zainab.jpg';
import Progressbar from './Progressbar.jsx';
const testData = [
  { bgcolor: "#6a1b9a", completed: 68 },
   
];

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />


        <div className='course'>
          <div className="part1"><h2>Your Courses</h2>
          <div className="btn">
            <button className="btn1">Premium</button>
          </div>
          
          </div>
          <div className="hello">
            <img  className="im"   src={pic1} alt="img" />
            
          </div>
          <div className="jy">
          <span className="sp">26 Courses</span>
          </div>
         
        </div>
        <div className="ui">
         <BookmarkIcon />
         <SearchIcon  className="ser" />
         </div>
        <div className="border"></div>
        <div className="widgets">
           <div className="php"> 
           <img className="ph" src={pic2} alt="" />

           <h5>Beginers</h5>
           <h3 className="fu">Fun with PHP</h3>
         
            {/* <h6 className="b">by</h6>
            <img  className="by" src={pic4} alt="" />
            <h5 className="dar">Darrell Steward</h5> */}


          <div className="divide"></div>
          <div className="try">
          <div className="perc">68%</div>
          {testData.map((item, idx) => (
        <Progressbar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
          </div>
         
                     </div>
                     
                     <div className="fig"> 
           <img className="fi" src={pic3} alt="" />

           <h5 className="ad">Advanced</h5>
           <h3 className="fu">Figma Workshop</h3>
           <div className="divide"></div>
         
                     </div>
                     <div className="fig"> 
           <img className="fi" src={pic5} alt="" />

           <h5 className="ad">Advanced</h5>
           <h3 className="fu">Python Development</h3>
           <div className="divide"></div>
                     </div>
        </div>
        <div className="charts">
           
           
        </div>
        
      </div>
    </div>
  );
};

export default Home;
