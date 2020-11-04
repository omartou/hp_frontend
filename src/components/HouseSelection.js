// import React from 'react'
// import hpHouseMain from '../images/hpHousesBackgMainv2Border.png';
// import {Link} from 'react-router-dom';
// import "./HouseSelection.css";
// import hpHouseGryffindor from '../images/hpHousesGryffindorBrightBorder.png';
// import hpHouseSlytherin from '../images/hpHousesSlytherinBrightBorder.png';
// import hpHouseHufflepuff from '../images/hpHousesHufflepuffBrightBorder.png';
// import hpHouseRavenclaw from '../images/hpHousesRavenclawBrightBorder.png';

// export default function HouseSelection() {


//     function changeBackgroundToNormal(e) {
//         let backgroundNode = document.querySelector("#background")
//         backgroundNode.style.backgroundImage = `url(${hpHouseMain})`;
//     }

//     function changeBackgroundToGryffindor(e) {
//         let backgroundNode = document.querySelector("#background")
//         backgroundNode.style.backgroundImage = `url(${hpHouseGryffindor})`;
//     }

//     function changeBackgroundToSlytherin(e) {
//         let backgroundNode = document.querySelector("#background")
//         backgroundNode.style.backgroundImage = `url(${hpHouseSlytherin})`;
//     }

//     function changeBackgroundToHufflepuff(e) {
//         let backgroundNode = document.querySelector("#background")
//         backgroundNode.style.backgroundImage = `url(${hpHouseHufflepuff})`;
//     }

//     function changeBackgroundToRavenclaw(e) {
//         let backgroundNode = document.querySelector("#background")
//         backgroundNode.style.backgroundImage = `url(${hpHouseRavenclaw})`;
//     }


//     return (
//         <div className="houseBackground" style={{backgroundImage:`url(${hpHouseMain})`}}>
//             <div id="background" className="houseBackground" style={{backgroundImage:`url(${hpHouseMain})`}}>
//                 <Link to="/gryffindor" className="houseDiv" onMouseOver={changeBackgroundToGryffindor} onMouseLeave={changeBackgroundToNormal}></Link>
//                 <Link to="/slytherin" className="houseDiv" onMouseOver={changeBackgroundToSlytherin} onMouseLeave={changeBackgroundToNormal}></Link>
//                 <Link to="/hufflepuff" className="houseDiv" onMouseOver={changeBackgroundToHufflepuff} onMouseLeave={changeBackgroundToNormal}></Link>
//                 <Link to="/ravenclaw" className="houseDiv" onMouseOver={changeBackgroundToRavenclaw} onMouseLeave={changeBackgroundToNormal}></Link>
//             </div>
//         </div>
        
//     )
// }

import React from 'react'
import { Link } from 'react-router-dom';
import "./HouseSelection.css";
import hpHouseMain from '../images/hpHousesBackgMainv2Border.png';
import hpHouseGryffindor from '../images/hpHousesGryffindorBrightBorder.png';
import hpHouseSlytherin from '../images/hpHousesSlytherinBrightBorder.png';
import hpHouseHufflepuff from '../images/hpHousesHufflepuffBrightBorder.png';
import hpHouseRavenclaw from '../images/hpHousesRavenclawBrightBorder.png';

export default function HouseSelection() {
    const changeBackgroundToImage = (image, e) => {
        e.target.parentNode.style.backgroundImage=`url(${image})`;
    }

    return (
        <div className="houseBackground" 
            onMouseLeave={(e) => changeBackgroundToImage(hpHouseMain, e)}>
            <Link 
                to="/gryffindor" 
                className="houseDiv" 
                onMouseOver={(e) => changeBackgroundToImage(hpHouseGryffindor, e)}>
            </Link>
            <Link 
                to="/slytherin" 
                className="houseDiv" 
                onMouseOver={(e) => changeBackgroundToImage(hpHouseSlytherin, e)}>
            </Link>
            <Link 
                to="/hufflepuff" 
                className="houseDiv" 
                onMouseOver={(e) => changeBackgroundToImage(hpHouseHufflepuff, e)}>
            </Link>
            <Link 
                to="/ravenclaw" 
                className="houseDiv"
                onMouseOver={(e) => changeBackgroundToImage(hpHouseRavenclaw, e)}>
            </Link>
        </div>
    )
}