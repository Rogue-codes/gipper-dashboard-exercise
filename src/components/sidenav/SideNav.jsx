import React from "react";
import styled from "styled-components";
import { CgMenuGridR } from "react-icons/cg";
import {
  AiOutlineTransaction,
  AiTwotoneShop,
  AiFillSetting,
} from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { FaBtc } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
function SideNav() {
  return (
    <Container>
      <div className="logo">
        <h1>Gipper</h1>
        <span>pay</span>
      </div>
      <NavLink>
        <CgMenuGridR color="#ff4800" />
        <span>Overview</span>
      </NavLink>

      <NavLink>
        <AiOutlineTransaction />
        Transactions
      </NavLink>

      <NavLink>
        <AiTwotoneShop />
        Products
      </NavLink>

      <NavLink>
        <MdOutlinePayments />
        Payroll
      </NavLink>

      <NavLink>
        <FaBtc />
        Buy and sell
      </NavLink>

      <NavLink>
        <GiFlowerPot />
        Gipperfi
      </NavLink>

      <NavLink>
        <AiFillSetting />
        Settings
      </NavLink>
    </Container>
  );
}

export default SideNav;
const Container = styled.aside`
  @media (max-width: 768px) {
    display: none;
  }
  width: 15%;
  height: 100vh;
  position: fixed;
  background: white;
  left: 0;
  top: 0;
  .logo {
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2.5vw;
      font-weight: 700;
    }
    span {
      font-size: 2vw;
    }
  }
`;
const NavLink = styled.a`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  padding-left: 10%;
  align-items: center;
  gap: 2%;
  font-size: 1.5vw;
  cursor: pointer;
  span {
    color: #ff4800;
  }
`;
