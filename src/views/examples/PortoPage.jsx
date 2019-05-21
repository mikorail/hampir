import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
  {
    src: require("assets/img/bahasbahasa.jpg"),
    altText: "Slide 1",
    color:'black',
    caption: "BahasBahasa"
  },
  {
    src: require("assets/img/payungapp.jpg"),
    altText: "Slide 2",
    color:'black',
    caption: "PayungApp"
  },
  {
    src: require("assets/img/notember.jpg"),
    altText: "Slide 3",
    color:'black',
    caption: "Notember"
  }
];
const carouselItems3 = [
  {
    src: require("assets/img/gamepad.jpg"),
    altText: "Slide 1",
    caption: "some game with assets flip"
  },
  {
    src: require("assets/img/10578641.jpg"),
    altText: "Slide 2",
    caption: "start sculpting some mesh with zbrush"
  },
  {
    src: require("assets/img/2-770x470.png"),
    altText: "Slide 3",
    caption: "working on pixel art"
  }
];

let ps = null;

class PortoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    document.body.classList.toggle("porto-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("porto-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>

            <Container className="align-items-center">
            <Row className="justify-content-between">
                <Col lg="6" md="5">
                  <h1 className="profile-title text-left"> Projects Done</h1>
                  <h5 className="text-on-back">100%+1</h5>
                  <p className="profile-description text-left">
                  Things that are done for, but can  be revisited again.
                  </p>
                </Col>
                <Col lg="6" md="6">
                    <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
              </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className="justify-content-between">
                <Col lg="6" md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems3} />
                  </Row>
                </Col>
                <Col lg="6" md="5">
                  <h1 className="profile-title text-left"> Projects Upcoming</h1>
                  <h5 className="text-on-back">--.--%</h5>
                  <p className="profile-description text-left">
                    Work in progress.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section section-lg">
          </section>
          <Footer/>
        </div>
      </>
    );
  }
}

export default PortoPage;
