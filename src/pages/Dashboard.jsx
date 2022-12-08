import React from "react";
import styled from "styled-components";
import Nav from "../components/nav/Nav";
import ActiveButton from "../widgets/ActiveButton";
import {
  MdGeneratingTokens,
  MdSwapHoriz,
  MdSend,
  MdAddBox,
  MdContentCopy,
} from "react-icons/md";
import { GiHeartStake } from "react-icons/gi";
import { FaDonate } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { btc, eth, usdt } from "../assets/data";
import InactiveButton from "../widgets/InactiveButton";
function Dashboard() {
  return (
    <Container>
      <Nav />
      <section>
        {/*-------------------------------------  left card ------------------------------------- */}
        <div className="left-card">
          {/* total balance */}
          <div className="total-balance">
            <div className="text">
              <span>Total Balance</span>
              <p>$0.00</p>
            </div>
            <ActiveButton content="Payout" />
          </div>
          {/* gust */}
          <div className="transaction">
            <div className="gust">
              <MdGeneratingTokens size="1.5rem" color="var(--main-bg-color)" />
              <p>Gust</p>
            </div>
            <div className="gust-price">
              <p>$0.00</p>
              <span>Gust 0.00</span>
            </div>
          </div>
          {/* gust */}

          {/* icons */}
          <div className="icons">
            <div className="icon">
              <MdSwapHoriz size="1.5rem" color="var(--main-bg-color)" />
              <p>swap</p>
            </div>
            <div className="icon">
              <GiHeartStake size="1.5rem" color="var(--main-bg-color)" />
              <p>stake</p>
            </div>
            <div className="icon">
              <MdSend size="1.5rem" color="var(--main-bg-color)" />
              <p>send</p>
            </div>
            <div className="icon">
              <MdAddBox size="1.5rem" color="var(--main-bg-color)" />
              <p>Top up</p>
            </div>
          </div>
          {/* icons */}

          {/* tag */}
          <div className="tag">
            <span>Tag: b4ytr8ue</span>
            <MdContentCopy />
          </div>
          {/* tag */}

          {/* btc */}
          <div className="btc">
            <div className="btc-left">
              <div className="img">
                <img src={btc} alt="" />
              </div>
              <div className="text-btc">
                <h2>BTC</h2>
                <p>Bitcoin</p>
              </div>
            </div>
            <div className="btc-right">
              <p>$ 0.00</p>
              <span>BTC 0.00</span>
            </div>
          </div>
          {/* btc end */}

          {/* eth */}
          <div className="btc">
            <div className="btc-left">
              <div className="img">
                <img src={eth} alt="" />
              </div>
              <div className="text-btc">
                <h2>ETH</h2>
                <p>Etherium</p>
              </div>
            </div>
            <div className="btc-right">
              <p>$ 0.00</p>
              <span>ETH 0.00</span>
            </div>
          </div>
          {/* eth end */}

          {/* usdt */}
          <div className="btc">
            <div className="btc-left">
              <div className="img">
                <img src={usdt} alt="" />
              </div>
              <div className="text-btc">
                <h2>USDT</h2>
                <p>Tether USD</p>
              </div>
            </div>
            <div className="btc-right">
              <p>$ 0.00</p>
              <span>USDT 0.00</span>
            </div>
          </div>
          <hr />
          {/* usdt */}
        </div>
        {/*-------------------------------------  left card ends ------------------------------------- */}

        {/*-------------------------------------  right card ------------------------------------- */}
        <div className="right-card">
          {/* donation */}
          <div className="donation">
            <div className="donations">
              <div className="donate-icon">
                <FaDonate size="1.5rem" color="#ff4800" />
              </div>
              <p>Donations</p>
            </div>

            <div className="amount">
              <span>Amount Recieved</span>
              <h2>$ 0.00</h2>
            </div>

            <InactiveButton content="Request Withdrawal" />
          </div>

          <div className="donation-link">
            <div className="donation-link-text">
              <h2>Donation Link</h2>
              <p>
                Get and share Donation link to <br />
                receice donation from friends
              </p>
            </div>

            <span>
              <p>create link</p> <HiPlus />
            </span>
          </div>
        </div>
        {/*-------------------------------------  right card ends ------------------------------------- */}
      </section>
    </Container>
  );
}

export default Dashboard;

const Container = styled.main`
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
  width: 85%;
  margin-left: 15%;
  min-height: 100vh;
  background: #f9f5f5;
  border: 1px solid #f9f5f5;
  section {
    @media (max-width: 768px) {
      flex-direction: column;
      width: 90%;
      margin: auto;
      height: auto;
    }
    width: 100%;
    height: 100vh;
    margin-bottom: 10%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2%;
    /*---------------------------------- left card ---------------------------------- */
    .left-card {
      @media (max-width: 768px) {
        width: 100%;
      }
      width: 50%;
      height: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 3%;
      border-radius: 15px;
      background: white;
      /* total balance */
      .total-balance {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 2%;
        align-items: center;
        margin-bottom: 25%;
        .text {
          span {
            color: grey;
          }
          p {
            font-weight: 700;
          }
        }
      }
      /* total balance end*/

      /* transaction */
      .transaction {
        width: 100%;
        margin-top: 5%;
        display: flex;
        align-items: center;
        padding: 2%;
        .gust {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 50%;
          gap: 5%;
          p {
            @media (max-width: 768px) {
              font-size: 1rem;
            }
            font-size: 1.5vw;
            font-weight: 800;
          }
        }
        .gust-price {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-end;
          width: 50%;
          gap: 5%;
          p {
            @media (max-width: 768px) {
              font-size: 1rem;
            }
            color: #000;
            font-size: 1.5vw;
            font-weight: 800;
          }
          span {
            @media (max-width: 768px) {
              font-size: 1rem;
            }
            color: grey;
            font-size: 1vw;
          }
        }
      }
      /* transaction end */

      /* icons */
      .icons {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 2%;
        margin-top: 5%;
        .icon {
          @media (max-width: 768px) {
            width: 40%;
          }
          width: 20%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 5%;
          p {
            @media (max-width: 768px) {
              font-size: 0.7rem;
            }
            font-size: 1.3vw;
            color: var(--main-bg-color);
          }
        }
      }
      /* icons end */

      /* tag */
      .tag {
        display: flex;
        justify-content: flex-end;
        gap: 5%;
        padding: 2%;
        align-items: center;
        color: #5b5959;
        span {
          font-weight: 800;
        }
      }
      /* tag end */

      /* btc */
      .btc {
        width: 100%;
        height: 10vh;
        border-top: 2px solid #000;
        display: flex;
        .btc-left {
          width: 50%;
          padding: 2%;
          display: flex;
          align-items: center;
          gap: 5%;
          .img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              border-radius: 50%;
            }
          }
          .text-btc {
            h2 {
              @media (max-width: 768px) {
                font-size: 1rem;
              }
              font-size: 1.2vw;
              font-weight: 800;
            }
            p {
              @media (max-width: 768px) {
                font-size: 0.6rem;
              }
              font-size: 1vw;
            }
          }
        }
        .btc-right {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          padding: 2%;
          p {
            @media (max-width: 768px) {
              font-size: 1rem;
            }
            font-size: 1.2vw;
            font-weight: 800;
          }
          span {
            @media (max-width: 768px) {
              font-size: 0.6rem;
            }
            font-size: 1vw;
            color: grey;
          }
        }
      }
      /* btc end */
    }
    /*---------------------------------- left card end ---------------------------------- */

    /*---------------------------------- right card ---------------------------------- */
    .right-card {
      @media (max-width: 768px) {
        width: 100%;
        margin-top: 5%;
        padding: 5% 0%;
      }
      width: 48%;
      height: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 15px;
      background: white;
      padding: 2%;
      /* donation  */
      .donation {
        width: 90%;
        height: 45vh;
        margin: auto;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5%;
        padding: 5%;
        .donations {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5%;
          .donate-icon {
            @media (max-width: 768px) {
              width: 40px;
              height: 38px;
              padding: 2%;
            }
            width: 50px;
            height: 40px;
            border-radius: 50%;
            background: #ff480053;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p {
            @media (max-width: 768px) {
              font-size: 1rem;
            }
            font-size: 1.5vw;
            font-weight: 800;
          }
        }
      }
      /* donation end */

      /* amount */
      .amount {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5%;
        span {
          @media (max-width: 768px) {
            font-size: 1rem;
          }
          color: grey;
          font-size: 1.5vw;
        }
        h2 {
          @media (max-width: 768px) {
            font-size: 1rem;
          }
          font-size: 2vw;
          font-weight: 800;
        }
      }
      /* donation-link */
      .donation-link {
        @media (max-width: 768px) {
          height: 15vh;
        }
        width: 90%;
        height: 25vh;
        margin: auto;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 12px;
        margin-top: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2%;
        .donation-link-text {
          width: 60%;
          h2 {
            @media (max-width: 768px) {
              font-size: 1rem;
            }
            font-size: 1.5vw;
            font-weight: 800;
          }
          p {
            @media (max-width: 768px) {
              font-size: 0.8rem;
            }
            font-size: 1.2vw;
          }
        }
        span {
          @media (max-width: 768px) {
            font-size: 0.6rem;
          }
          width: 30%;
          display: flex;
          justify-content: flex-end;
          gap: 5%;
          color: var(--main-bg-color);
        }
      }
    }
  }
`;
