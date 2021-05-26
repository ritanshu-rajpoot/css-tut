import React from "react";
import {Dropdown,DropdownButton} from "react-bootstrap"

const BootstrapDemo  = () =>{
    return(
        <div>
            <h1 className="display-1 text-warning">
                ritanshu singh
            </h1>
            <DropdownButton
                menuAlign="right"
                title="Dropdown right"
                id="dropdown-menu-align-right"
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
    )
}

export default BootstrapDemo
