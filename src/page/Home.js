import { useContext } from "react"
import { Form, FloatingLabel, Carousel, Card, Container, Col, Image, Row, Button, Link,CardGroup } from "react-bootstrap"
import Brand from "./Brand"
import styles from "./Home.module.css"
import video from "../images/ppp.mp4"
import PostsContext from "../Utils/PostsContext"
import NavbarItem from "../component/Navbar"
function Home() {
  const { navigate } = useContext(PostsContext)

  // const list = e => {
  //   const brand = e.target.value
  //   console.log("Eyad")
  //   navigate(`/Phones/${brand}`)
  // }
  return (
    <>
      <Container>
        <video className={styles.video} src={video} autoPlay muted loop />
        <Col>
          <h1 className={styles.titel}> WelcomeTo Our Site </h1>
          <a className={styles.tite2} href="http://localhost:3000/home1">
            Go To Site{" "}
          </a>
        </Col>
        <h2> </h2>
      </Container>
      <CardGroup className="g-3  mx-2 mb-5">
      {/* <Row xs={1} sm={1} md={3} className="g-3  mx-2 mb-5">
    
        <Col> */}
          <Card>
            <Card.Header>
              <Card.Title> Smart Phone </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Img
                style={{ width: "31rem", height: "aute" }}
                src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                thumbnail
              />
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text>
                {" "}
                <h5>
                  Hardware Information is a hardware information app for Android with detailed information about your
                  smartphone including device, system, memory, camera, temperature, battery and sensor details. You can
                  also export full report of your Smartphone. Hardware Information is a hardware specification app for
                  Android with detailed information about your smartphone including:
                </h5>
              </Card.Text>
              <Card.Text>
                {" "}
                <h6>System</h6>
              </Card.Text>
              <Card.Text>
                <h6>Display </h6>
              </Card.Text>
              <Card.Text>
                <h6> Processor</h6>
              </Card.Text>
            </Card.Body>

            <Button
              className={styles.Mybtn}
              href="https://apkpure.com/ar/hardware-information-all-about-your-smart-phone/net.azteam.infosystem"
              variant=" onClick-dark"
            >
              display
            </Button>
          </Card>
        {/* </Col>
        <Col> */}
          <Card>
            <Card.Header>
              <Card.Title> Electronics </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Img
                style={{ width: "31rem", height: "aute" }}
                src="https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                thumbnail
              />
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text>
                {" "}
                <h5>
                  {" "}
                  electronics, branch of physics and electrical engineering that deals with the emission, behaviour, and
                  effects of electrons and with electronic devices ,Electronics encompasses an exceptionally broad range
                  of technology. The term originally was applied to the study of electron behaviour and movement,
                  particularly as observed in the first electron tubes. It came to be used in its broader sense with
                  advances in knowledge about the fundamental nature of electrons and about the way in which the motion
                  of these particles could be utilized. Today many scientific and technical disciplines deal with
                  different aspects of electronics
                </h5>{" "}
              </Card.Text>
              <Card.Text>
                {" "}
                <h5>cell phone</h5>
              </Card.Text>
              <Card.Text>
                <h5>computer</h5>
              </Card.Text>
              <Card.Text>
                <h5> smart watches</h5>
              </Card.Text>
            </Card.Body>
            <Button
                className={styles.Mybtn}
                href="https://www.youtube.com/watch?v=ZRpi5ysnV_Y"
                target="_blank"
                variant=" onClick-dark"
              >
                display
              </Button>
          </Card>
        {/* </Col>
        <Col> */}
          <Card>
            <Card.Header>
              <Card.Title> Electronics Supplier Companies </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Img
                style={{ width: "31rem", height: "aute" }}
                src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                thumbnail
              />
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text> </Card.Text>
              <Card.Text>
                {" "}
                <h5>
                  {" "}
                  This is a comprehensive list of the top electronics companies and electronic component suppliers in
                  the USA and globally. Electronics is a very broad category covering everything from consumer level
                  goods, to industrial and laboratory devices, to military equipment, to the individual components used
                  to produce each of those devices.
                </h5>{" "}
              </Card.Text>
              <Card.Text>
                <h5>APH</h5>{" "}
              </Card.Text>
              <Card.Text>
                <h5>DLB</h5>{" "}
              </Card.Text>
              <Card.Text>
                {" "}
                <h5>HUBB</h5>
              </Card.Text>
             
            </Card.Body>
            <Button
                className={`${styles.Mybtn} ${styles.Mybtn1}`}
                href="https://www.4starelectronics.com/?cmpid=13924613038&gclid=CjwKCAiA4veMBhAMEiwAU4XRr844QoxKsyZ0zOc7vge_4gQ44dZTPr4grKYwmS37ED9P5t1eofK5SRoCiM4QAvD_BwE"
                target="_blank"
                variant=" onClick-dark"
              >
                display
              </Button>
          </Card>
        {/* </Col>
      
      </Row> */}
      </CardGroup>
    </>
  )
}
export default Home
