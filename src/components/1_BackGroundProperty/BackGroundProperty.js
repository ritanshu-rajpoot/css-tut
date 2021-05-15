import React from "react";
import "./BackGroundProperty.css"
import img_1 from "../../assets/pexels-hasan-albari-1229861.jpg"
import img_2 from "../../assets/pexels-felix-mittermeier-956999.jpg"
import img_3 from "../../assets/pexels-pixabay-33688.jpg"
import img_4 from "../../assets/download (4).png"
const BackGroundProperty = () =>{
    const customStyle = {backgroundImage:`url(${img_4})`,backgroundAttachment:"",backgroundPosition:"left top", backgroundRepeat:"no-repeat",backgroundSize:""}
    return(
        <div className="parent-container">
            {/*Background-color*/}
            {/*image*/}
            {/*attachments*/}
            {/*repeat*/}
            {/*position*/}
            {/*linear-gradient*/}
            <div className="background-color common">
                <h2>hii im teal color background</h2>
            </div>

            <div className="background-img common" style={{backgroundImage:`url(${img_1})`}}>
                <h2>hii im img background</h2>
            </div>

            <div className="background-attachment common" style={{backgroundImage:`url(${img_3})`,backgroundAttachment:"fixed"}}>
                <h2>hii im img background-attachment</h2>
            </div>
            <div className="common background-position" style={{backgroundImage:`url(${img_3})`,backgroundAttachment:"",backgroundPosition:"left", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <h2>hii im img background-position</h2>
            </div>
            <div className="common background-position" style={customStyle}>
                <h2>hii im img background-position</h2>
            </div>
            <div className="common background-position" style={{background:"linear-gradient(45deg,orangered,black)"}}>
                <h2>hii im img linear-gradient</h2>
            </div>
            <div className="common background-position" style={{background:`lightblue url(${img_4}) no-repeat fixed center`}}>
                <h2>hii im img ,master</h2>
            </div>
            <div className="margin-div">

            </div>
        </div>

    )
}

export default BackGroundProperty