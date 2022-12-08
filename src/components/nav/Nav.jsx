import React from "react";
import styled from "styled-components";
import { IoMdNotifications } from "react-icons/io";
import { profile } from "../../assets/data";
function Nav() {
  return (
    <Container>
      <Send>Send & Recive</Send>
      <Account>
        <div className="notification-icon">
          <IoMdNotifications size="1.5rem" color="grey" />
        </div>
        <div className="user">
          <img src={profile} alt="" />
          <div className="details">
            <h2>Mary Stansfield</h2>
            <p>Tier 1 Account</p>
          </div>
        </div>
      </Account>
    </Container>
  );
}

export default Nav;
const Container = styled.nav`
  width: 100%;
  height: 15vh;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 2%;
`;
const Send = styled.button`
  @media (max-width: 768px) {
    width: 35%;
    font-size: 0.8rem;
  }
  width: 15%;
  border: none;
  border-radius: 25px;
  height: 8vh;
  background: #00031b;
  font-size: 1.2vw;
  color: #fff;
`;
const Account = styled.div`
  @media (max-width: 768px) {
    width: 50%;
  }
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
  .notification-icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #f9f5f5;
  }
  .user {
    @media (max-width: 768px) {
      height: 70%;
      width: 80%;
    }
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 5%;
    align-items: center;
    padding: 2%;
    border-radius: 20px;
    background: #f9f5f5;
    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
    .details {
      h2 {
        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
        font-size: 1.2vw;
      }
      p {
        @media (max-width: 768px) {
          font-size: 0.7rem;
          font-weight: 800;
        }
        font-size: 1vw;
      }
    }
  }
`;
