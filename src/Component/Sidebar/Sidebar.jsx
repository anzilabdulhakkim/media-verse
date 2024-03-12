import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import blogs from '../../assets/blogs.png'
import music from '../../assets/music.png'
import news from '../../assets/news.png'
import carry from '../../assets/carry_minati.jpg'
import gaming from '../../assets/total_gaming.jpeg'
import m4_tech from '../../assets/m4_tech.jpg'
import Technical_guruji from '../../assets/Technical_Guruji.jpg'
import crafts from '../../assets/minute_crafts.png'
import T_Series from '../../assets/T_series.png'
import mr_beast from '../../assets/mr_beast.jpg'
import dude_perfect from '../../assets/dude_perfect.jpg'
import pewdiepie from '../../assets/pewdiepie.jpg'
import karikku from '../../assets/karikku.jpg'

function Sidebar({sidebar,category,setCategory}){
    return(
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">
            <div className={`side-link ${category===0 ? "active" :""}`} onClick={()=>setCategory(0)} >
                <img src={home} alt="" /><p>Home</p>
            </div>

            <div className={`side-link ${category===20 ? "active" :""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>

            <div className={`side-link ${category===2 ? "active" :""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>

            <div className={`side-link ${category===17 ? "active" :""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>

            <div className={`side-link ${category===24 ? "active" :""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>

            <div className={`side-link ${category===28 ? "active" :""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>Technology</p>
            </div>

            <div className={`side-link ${category===10 ? "active" :""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>


            <div className={`side-link ${category===22 ? "active" :""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>

            <div className={`side-link ${category===25 ? "active" :""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
             <hr />
        </div>
        <div className="subscribed-list">
          <h3>Subscriptions</h3>
          <div className="side-link">
            <img src={carry} alt="" /><p>CarryMinati</p>
          </div>

          <div className="side-link">
            <img src={gaming} alt="" /><p>Total Gaming</p>
          </div>

          <div className="side-link">
            <img src={m4_tech} alt="" /><p>M4 Tech</p>
          </div>

          <div className="side-link">
            <img src={Technical_guruji} alt="" /><p>Technical Guruji</p>
          </div>

          <div className="side-link">
            <img src={crafts} alt="" /><p>5-Minute Crafts</p>
          </div>

          <div className="side-link">
            <img src={T_Series} alt="" /><p>T-Series</p>
          </div>

          <div className="side-link">
            <img src={mr_beast} alt="" /><p>MrBeast</p>
          </div>

          <div className="side-link">
            <img src={dude_perfect} alt="" /><p>Dude Perfect</p>
          </div>

          <div className="side-link">
            <img src={pewdiepie} alt="" /><p>PewDiePie</p>
          </div>

          <div className="side-link">
            <img src={karikku} alt="" /><p>Karikku</p>
          </div>

          <div className="side-link" id='showmore'>
            <p> ▼ Show more</p>
          </div>
          <hr />
          <div className={`side-footer ${sidebar?"":"small-side-footer"}`}>
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Copyright</a>
          <br />
          <a href="">Contact us</a>
          <a href="">Creator</a>
          <a href="">Advertise</a>
          <br />
          <a href="">Developers</a>
          <br />
          <br />
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Policy & Safety</a>
          <br />
          <a href="">How YouTube works</a>
          <br />
          <a href="">Test new features</a>
          <h6>© 2024 Google LLC</h6>
        </div>
        </div>
        </div>
    )
}

export default Sidebar