import { React, useState } from 'react';
import css from './JoinMember.module.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function JoinMember() {
  //   const navigate = useNavigate();
  const [identify, setIdentify] = useState('');
  const [password, setPassword] = useState('');
  const [nAme, setAme] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');

  const check = nAme => {
    if (!nAme) {
      return alert('빈칸을 채워주세요');
    }
  };
  const validation = (identify, password) => {
    console.log('idText:', identify);
    console.log('pwText: ', password);
    if (!identify.includes('@')) {
      return false;
    }

    if (password.length < 7) {
      return false;
    }

    return true;
  };

  const buttonOnClick = () => {
    if (validation(identify, password)) {
      alert('가입이 되었습니다. ');
    } else {
      alert('가입에 실패하였습니다.');
      setIdentify('');
      setPassword('');
    }
  };

  //   const val = validation(identify, nAme, password, phone);
  //   console.log('val', identify);
  return (
    <>
      <div className={css.first}>
        J o i n<div className={css.log}>회원가입</div>
      </div>
      <div className={css.line_front}></div>
      <div className={css.email_section}>
        {/* <div className={css.eMail}>이메일</div> */}
        이메일
        <input
          value={identify}
          placeholder="이메일을 입력해주세요"
          onChange={event => {
            setIdentify(event.target.value);
          }}
        />
      </div>
      <div className={css.email_section}>
        <div> 이름</div>

        <input
          value={nAme}
          placeholder="이름을 입력하세요"
          onChange={event => {
            setAme(event.target.value);
          }}
        />
      </div>
      <div className={css.email_section}>
        <div>비밀번호</div>
        <input
          values={password}
          placeholder="비밀번호를 입력하세요"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <div className={css.func}>
          <a href="#" title="english">
            영문
          </a>

          <a href="#" title="number" className={css.func}>
            숫자
          </a>

          <a href="#" title="special" className={css.func}>
            특수문자
          </a>

          <a href="#" title="length" className={css.func}>
            8자이상 20자 이하
          </a>
        </div>
      </div>
      <div className={css.email_section}>
        <input
          value={pass}
          placeholder="비밀번호를 확인해 주세요"
          onChange={event => {
            setPass(event.target.value);
          }}
        />
      </div>
      <div className={css.email_section1}>
        <div className={css.phone}>휴대전화</div>
        <div className={css.korea}>대한민국+82</div>

        <input
          value={phone}
          placeholder="휴대전화번호를 입력해주세요"
          onChange={event => {
            setPhone(event.target.value);
          }}
        />
      </div>
      <div className={css.find_password}>
        <button className={css.find_butt}>인증번호 발송</button>
      </div>
      <div className={css.find_password}>
        <button className={css.find_butt1}>인증번호 확인</button>
        <button className={css.agree_butt1}>인증번호 재발송</button>
      </div>
      <div className={css.find_password1}>
        <input type="checkbox" value="agree" className={css.gap} />
        사용자 약관에 전체 동의
      </div>
      <div className={css.find_password}>
        <input type="checkbox" value="service_agree" className={css.gap} />
        서비스 이용 약관 동의(필수)
      </div>
      <div className={css.find_password}>
        <input type="checkbox" value="service_agree" className={css.gap} />
        개인정보 처리방침 동의(필수)
      </div>
      <div className={css.find_password}>
        <input type="checkbox" value="service_agree" className={css.gap} />만
        14세 이상 확인(필수)
      </div>
      <div className={css.find_password}>
        <input type="checkbox" value="service_agree" className={css.gap} />
        평생회원제 동의(필수)
      </div>
      <div className={css.find_password}>
        <input type="checkbox" value="service_agree" className={css.gap} />
        마케팅 정보 수신 동의(선택)
      </div>
      <div className={css.find_password}>
        <button className={css.find_butt} onClick={buttonOnClick}>
          회원가입
        </button>
        <div className={css.gap_line}></div>
      </div>
    </>
  );
}

export default JoinMember;
