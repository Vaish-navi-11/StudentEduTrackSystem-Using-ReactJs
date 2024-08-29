import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiPlayerBase } from "react-icons/gi";
import { GiWhiteBook } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaBuildingUser } from "react-icons/fa6";

const Grid =() =>{
    return(
        <div className="Table">
            <table>
                <tr>
                    <th colSpan={3}><h4>Menu</h4></th>
                </tr>
                <tr>
                    <td>
                        <span><FaUserAlt /></span>
                        <h6>Regular Enrollment</h6>
                    </td>
                    <td>
                        <span><GiWhiteBook /></span>
                        <h6>Remedical Enrollment</h6>
                    </td>
                    <td>
                        <span><GiPlayerBase /></span>
                        <h6>Regular Enrollment</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span><FaBookReader /></span>
                        <h6>Classroom Management</h6>
                    </td>
                    <td>
                        <span><IoMdMail /></span>
                        <h6>SMS/EMAIL</h6>
                    </td>
                    <td>
                        <span><IoDocumentText /></span>
                        <h6>Attendance</h6>
                    </td>
                </tr>
                    <tr>
                    <td colSpan={3}>
                        <span><FaBuildingUser /></span>
                        <h6>Client</h6>
                    </td>
                    </tr>
                    
            </table>
        </div>
    )
}
export default Grid;