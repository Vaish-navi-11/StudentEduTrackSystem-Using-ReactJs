import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GiPlayerBase } from "react-icons/gi";

const Cards = () =>{
    return (
        <div className="CardLine">
            <div className="card mb-3 f1 " style={{ "maxWidth": "540px" }}>
                <div className="row g-0">   
                    <div class="col-md-4">
                        <span><FaUserAlt /></span>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">00</h5>
                            <p class="card-text"><small> Regular Students</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 f2" style={{ "maxWidth": "540px" }}>
                <div className="row g-0">   
                    <div class="col-md-4">
                        <span><FaUserTie /></span>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">00</h5>
                            <p class="card-text"><small>Remedical Students</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 f3" style={{ "maxWidth": "540px" }}>
                <div className="row g-0">   
                    <div class="col-md-4">
                        <span><GiPlayerBase /></span>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">00</h5>
                            <p class="card-text"><small> Regular Student</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;