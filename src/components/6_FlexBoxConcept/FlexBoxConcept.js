import React from "react";
import "./FlexBoxConcept.css";
// import "./FlexBoxConcept.scss"

const FlexBoxConcept = () =>{
    return(
        <div className="flexbox-parent">
            <div className="flex-container d-flex flex-wrap ">
                <div className="flex-item">
                    <h6>1</h6>
                </div>
                <div className="flex-item">
                    <h6>2</h6>
                </div>
                <div className="flex-item">
                    <h6>3</h6>
                </div>
                <div className="flex-item">
                    <h6>2</h6>
                </div>
                <div className="flex-item">
                    <h6>3</h6>
                </div>
                <div className="flex-item">
                    <h6>1</h6>
                </div>
                <div className="flex-item">
                    <h6>2</h6>
                </div>
                <div className="flex-item">
                    <h6>3</h6>
                </div>
            </div>
        </div>
    )
}

export default FlexBoxConcept
