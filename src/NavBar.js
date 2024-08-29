import React from 'react';
import Logo from './unnamed.png';
import { MdPeople } from "react-icons/md";
import { BiIdCard } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";

const SideNavBar = () =>{
    return (
        <div className='SideNav'>
            <ul>
                <li><img src={Logo} alt='img'></img></li>
                <li>
                    <span><MdPeople /></span>
                    <h6>Student Management</h6>
                </li>
                <li>
                    <span><BiIdCard /></span>
                    <h6>Financial Management</h6>
                </li>
                <li>
                    <span><RiDiscountPercentFill /></span>
                    <h6>Quality Control</h6>
                </li>
                <li>
                    <span><BiSolidDashboard /></span>
                    <h6>Property Delivery</h6>
                </li>
                <li>
                    <span><IoDocumentText /></span>
                    <h6>Attendace</h6>
                </li>
                <li className='LastLi'>
                    <span><FaQuestionCircle /></span><span><IoMdSettings /></span><span><MdExitToApp /></span>
                </li>
            </ul>
            

        </div>
    )
}
export default SideNavBar;