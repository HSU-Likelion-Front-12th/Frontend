import React from 'react';
import '../Styles/Profile.css'
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import address from "../assets/address.svg";
import subway_coding from "../assets/subway_coding.jpeg";

function Profile(props){
    return(
        <div className="profile-block fade-in-animation-delayed">
                <div id="profile-pic">
                    <img src={subway_coding} alt=""></img>
                </div>
                <div id="profile-name">{props.name}</div>
                <div id="profile-phone">
                    <img src={phone} alt="이미지 준비중"></img>{props.phone}</div>
                <div id="profile-mail">
                    <img src={mail} alt="이미지 준비중"></img>{props.mail}
                </div>
                <div id="profile-address">
                    <img src={address} alt="이미지 준비중"></img>
                        {props.address}
                </div>
            </div>
    )
}
export default Profile;