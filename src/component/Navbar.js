import { useContext } from "react"
import { Navbar, Container, Nav,Form,NavDropdown,Button,FloatingLabel} from "react-bootstrap"
import { Link } from "react-router-dom"
import Brand from "../page/Brand"
import postsContext from "../Utils/PostsContext"
import styles from "./Navbar.module.css"

function NavbarItem() {
  const { logout } = useContext(postsContext)
 
  const { navigate } = useContext(postsContext)

  const list = e => {
    const brand = e.target.value
    navigate(`/Phones/${brand}`)
  }
  return (
    // <Navbar className={styles.Nav} bg="dark" variant="dark">
    //    <Container>
    //     <Link className="navbar-brand" to="/">
    //       Page
    //     </Link>

    //     {localStorage.tokenPost ? (
    //       <Nav className="me-auto">
    //         <Link className="nav-link" to="/addItem">
    //           AddItem
    //         </Link>
    //         <Link className="nav-link" to="/home1">
    //           Home
    //         </Link>
    //       </Nav>
    //     ) : null}
    //        <Nav className="ms-auto">
    //        {/* <Link className="nav-link" to=""> */}
    //        <FloatingLabel  controlId="floatingSelect" >
    //          <Form.Select aria-label="Floating label select example" onChange={list}>
    //            <Brand />
    //          </Form.Select>
    //        </FloatingLabel>
    //        {/* </Link> */}
    //        </Nav>
    //     {localStorage.tokenPost ? (
    //       <Nav className="ms-auto">
    //         <Link className="nav-link" to="/profile">
    //           Profile
    //         </Link>
    //         <Link className="nav-link" to="/" onClick={logout}>
    //           Logout
    //         </Link>
    //       </Nav>
    //     ) : (
    //       <Nav className="ms-auto">
    //         <Link className="nav-link" to="/signup">
    //           Sign Up
    //         </Link>
    //         <Link className="nav-link" to="/login">
    //           Login
    //         </Link>
    //       </Nav>
    //     )}
    //  </Container>
    // </Navbar>
    
// {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.Nav}>
//   <Container>
//   <Navbar.Brand href="#home">Electronics</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto">
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//   </Container>
// </Navbar> */}
 <Navbar className={styles.Nav} bg="dark" variant="dark">
       <Container>
        <Link className="navbar-brand" to="/">
         PHONE
        </Link>
        {localStorage.tokenPost ? (
          <Nav className="me-auto">
            <Link className="nav-link" to="/addItem">
              AddPost
            </Link>
            <Link className="nav-link" to="/home1">
              Posts
            </Link>
          </Nav>
        ) : null}
         {/* <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
     </Nav> */}
           <Nav className="ms-auto " className={styles.Nav1}>
           {/* <Link className="nav-link" to=""> */}
           <FloatingLabel  controlId="floatingSelect" >
             <Form.Select aria-label="Floating label select example" onChange={list}>
               <Brand />
             </Form.Select>
           </FloatingLabel>
           {/* </Link> */}
           </Nav>
        {localStorage.tokenPost ? (
          <Nav className="ms-auto">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/" onClick={logout}>
              Logout
            </Link>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
        )}
     </Container>
    </Navbar>
  )
}
export default NavbarItem
