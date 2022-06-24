import React from 'react';
import JoinMember from './JoinMember';

import css from './Login.module.scss';
import { Link, Route, useNavigate } from 'react-router-dom';

function Login() {
  return (
    <>
      {/* <div className={css.container}> */}
      <div className={css.first}>
        L O G I N<div className={css.log}> 로그인 </div>
      </div>
      <div className={css.line}> </div>
      <div className={css.email_section}>
        <input placeholder="이메일 아이디" />
      </div>
      <div className={css.password_section}>
        <input placeholder="비밀번호" />
      </div>
      <button className={css.login_section} l>
        l o g i n
      </button>
      <div>
        <Link to="./JoinMember">
          <button className={css.join_membership}>회원가입</button>
        </Link>
      </div>
      <div className={css.find_password}>
        <button className={css.find_butt}>비밀번호 찾기</button>
        <button className={css.find_butt1}>비회원 예약 조회</button>
      </div>

      {/* //</> //</div> */}
    </>
  );
}

export default Login;
