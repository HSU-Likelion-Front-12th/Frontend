import React from 'react'
import Profile from '../Cmpnts/Profile';
import Career from '../Cmpnts/Career';
import '../Styles/ProfileBlock.css';

function ProfileBlock(props){
    const xeEdu = (
        <p>한성대학교  컴퓨터공학부<br></br>
        2021.03~<br></br>
        </p>
    );

    const xeSkills = (
        <p>
            C<br></br>
            C++<br></br>
            Swift<br></br>
            Dart<br></br>
        </p>
    );
    const xeWork = (
        <p>
            프론트엔드 개발자
        </p>
    );
    const xeActivities = (
        <p>
            멋쟁이사자처럼 12기
        </p>
    );
    return(
        <div className='info-block'>
            <Profile
            name='김건우' 
            phone='010-5668-8438' mail='ge00nu@naver.com' 
            address = '동대문구'
            ></Profile>
            <div className='info-block'>
                <Career
                title = "Education"
                content = {xeEdu}
                ></Career>
                <Career
                title = "SKILLS"
                content = {xeSkills}
                ></Career>
                <Career
                title = "WORK"
                content = {xeWork}
                ></Career>
                <Career
                title = "ACTIVITIES"
                content = {xeActivities}
                ></Career>
            </div>
        </div>
    )
}

export default ProfileBlock;