import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { navdata } from "./navbarData";
import { TfiAngleDown } from "react-icons/tfi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimesCircle } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import "./navbar.css";

const Navs = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [signInShow, setSignInShow] = useState(false);

  const handleDropdown = (index) => setShow(index);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    let scrollWidt = (e) => {
      window.innerWidth <= 992 ? setSignInShow(false) : setSignInShow(true);
    };
    scrollWidt();
    window.addEventListener("resize", scrollWidt);
  }, []);

  return (
    <Navbar
      className="bg-white dark:!bg-blackBg shadow-lg  dark:!text-white"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://i.postimg.cc/SN5XpHXn/MINDCH-45-01-1.png"
            className={!signInShow ? "w-[150px] h-auto" : "w-[190px] h-auto "}
          />
        </Navbar.Brand>
        {!signInShow && (
          <Nav.Link
            as={Link}
            to={"/signin"}
            // key={index}
          >
            <div className="group !text-black flex items-center gap-x-2 dark:!text-white ">
              <BiLogInCircle className="text-[18px] group-hover:text-primary " />
              <span className="group-hover:text-primary">Sign In</span>
            </div>
          </Nav.Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-0">
          <HiOutlineMenuAlt3
            className={`text-primary ${
              click ? "hidden text-[25px]" : "block text-[25px]"
            }`}
            onClick={handleClick}
          />
          <FaTimesCircle
            className={`text-primaryColor text-[25px] ${
              click ? "block" : "hidden"
            }`}
            onClick={handleClick}
          />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${click ? "show" : ""}`}
        >
          <Nav className="ms-auto gap-x-3">
            {navdata.map((item, index) =>
              item.name === "Home" ? (
                <Nav.Link
                  as={Link}
                  to={item.link}
                  key={index}
                  className="group dark:!text-white text-black"
                >
                  <span className="group-hover:!text-primaryColor">Home</span>
                </Nav.Link>
              ) : (
                <NavDropdown
                  title={
                    <div className="group-hover:!text-primaryColor !text-black flex items-center gap-x-2 dark:!text-white">
                      {item.name}
                      <TfiAngleDown
                        className="text-[10px]"
                        style={{
                          transform:
                            show === index ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease-in-out",
                        }}
                      />
                    </div>
                  }
                  id={`nav-dropdown-${index}`}
                  key={index}
                  show={show === index}
                  onMouseEnter={() => handleDropdown(index)}
                  onMouseLeave={() => handleDropdown(false)}
                  onClick={() => setShow(show === index ? false : index)}
                  className="group dark:!bg-blackBg !border-none"
                >
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <NavDropdown.Item
                      as={Link}
                      to={dropdownItem.link}
                      key={dropdownIndex}
                      className="hover:!text-primaryColor dark:hover:!bg-primaryHover hover:!bg-primaryHover dark:bg-blackBg dark:text-white"
                    >
                      {dropdownItem.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )
            )}
            {/* signup button start */}
            {signInShow && (
              <Nav.Link
                as={Link}
                to={"/signin"}
                // key={index}
              >
                <div className="group !text-black flex items-center gap-x-2 dark:!text-white border-l pl-5">
                  <BiLogInCircle className="text-[18px] group-hover:text-primaryColor " />
                  <span className="group-hover:text-primaryColor">Sign In</span>
                </div>
              </Nav.Link>
            )}
          </Nav>
          {/* signup button end */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
