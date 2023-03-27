import React from 'react';
import { Link } from 'react-router-dom';

function NaverMail() {
    return (
        <div>
            <h4>Naver Mail Clone Coding</h4>
            <div> - 현재 작업중 - </div>
            <div>네이버 메일 css구현, React로 작업</div>
            <div>Github에서 작업관리중</div>
            <br />
            <Link to="https://nv-clone.firebaseapp.com/" className="text-white">
                작업중인 내용보기
            </Link>
        </div>
    );
}

export default NaverMail;
