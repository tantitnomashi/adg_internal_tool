/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { setBankSelected } from "custom-redux/configSlice";
import { useDispatch, useSelector } from "react-redux";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  // 
  const dispatch = useDispatch();
  const name = useSelector(state => state.config.staffName);
  const setBank = (bank) => {
    dispatch(setBankSelected(bank));
  }

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span className='h1 text-light'>ADG • Internal Tools </span>
          </NavbarBrand>

          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  ADG • Internal Tools
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>

          <Nav navbar>

            <NavItem className="p-0">
              <UncontrolledDropdown >
                <DropdownToggle
                  caret
                  onClick={(e) => e.preventDefault()}
                >
                  Hồ sơ TTQT
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons bg-white">
                  <DropdownItem onClick={() => setBank("bidv")}>
                    <i className="tim-icons icon-paper" />
                    Hồ sơ giải ngân (BIDV)
                  </DropdownItem>
                  <DropdownItem onClick={() => setBank("vietin")}>
                    <i className="tim-icons icon-paper" />
                    Hồ sơ VietinBank
                  </DropdownItem>
                  <DropdownItem onClick={() => setBank("mb")}>
                    <i className="tim-icons icon-paper" />
                    Theo dõi đơn DK MB
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </NavItem>
            <NavItem className="p-0">
              <Button
                color="default"
                onClick={scrollToDownload}
              >
                Hồ sơ cầm hàng
              </Button>
            </NavItem>
            {!!name &&
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="/user"
                  rel="noopener noreferrer"
                >
                  <p>Chào {name}!</p>
                </NavLink>
              </NavItem>
            }

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
