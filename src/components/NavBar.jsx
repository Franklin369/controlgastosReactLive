import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
//#region DATA
const Data = [
  {
    title: "Home",
    path: "/",
    cName: "link-item",
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "link-item",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "link-item",
  },
];
//#endregion

export function NavBar() {
  const inputElement = useRef();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Container
      className={sidebar ? "container active" : "container"}
      onMouseEnter={showSidebar}
      onMouseLeave={showSidebar}
    >
      <IconContext.Provider value={{ color: "#fff" }}>
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.519"
            height="30.7"
            viewBox="0 0 32.519 30.7"
            fill="#363b46"
          >
            <g id="Logo" transform="translate(-90.74 -84.875)">
              <path
                id="B"
                d="M14.378-30.915c-5.124,0-9.292,3.767-9.292,10.228S9.254-10.46,14.378-10.46h1.471c5.124,0,9.292-3.767,9.292-10.228s-4.168-10.228-9.292-10.228H14.378M11.7-33.456h6.819A12.768,12.768,0,0,1,31.29-20.687,12.768,12.768,0,0,1,18.522-7.919H11.7A12.768,12.768,0,0,1-1.065-20.687C-2.4-51.282,4.652-33.456,11.7-33.456Z"
                transform="translate(91.969 123.494)"
              />
            </g>
          </svg>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="link-items">
            {/* <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}

            {Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} class="link">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Container>
  );
}
//#region STYLED COMPONENTS
const Container = styled.div`
z-index:1000;
  width: 85px;
  height: 100vh;
 
  padding: 20px;
  overflow: hidden;
  background-color: ${(props) => props.theme.whiteBg};
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  &.active {
    width: 250px;
    .link-item {
      a {
        color: var(--light-text-clr);
        background-color: var(--primary-clr);
        span {
          transition-delay: calc(0.02s * var(--i));
          transform: translateX(0px);
        }
        .num-noti {
          color: var(--primary-clr);
          background-color: var(--white-bg);
        }
      }
    }
  }
  .logo {
    width: 100%;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .link-item:last-child {
      margin-top: 100px;
    }
    .link-item {
      a {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        text-decoration: none;
        font-size: 16px;
        white-space: nowrap;
        text-transform: capitalize;
        color: var(--dark-text-clr);
        span {
          transition: transform 0.5s;
          transform: translateX(100px);
          h4 {
            line-height: 1;
          }
          p {
            font-size: 12px;
          }
        }
        &:hover {
          background-color: var(--hover-clr);
        }
        .num-noti {
          margin-left: 40px;
          font-size: 12px;
          color: var(--light-text-clr);
          background-color: var(--primary-clr);
          min-width: 15px;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
      }
      svg {
        min-width: 20px;
        min-height: 20px;
        margin-right: 20px;
        position: relative;
        &.noti-icon::before {
          content: "";
          display: block;
          position: absolute;
          top: 3px;
          right: 2px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--primary-clr);
          border: 1px solid var(--white-bg);
        }
      }
      img {
        width: 30px;
        height: 30px;
        margin-right: 20px;
        border-radius: 50%;
      }
    }
  }
`;

//#endregion
