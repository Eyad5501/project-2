import { useContext, } from "react"
import { Form, Col, Row, Button, } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
import styles from "./Login.module.css"
function Login() {
  const { login } = useContext(PostsContext)
  return (
    <div className={styles.formInput}>
    <div className={styles.formText}>
      <h1>Login</h1>
      <Form className="mt-5" onSubmit={login}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>
        <Row>{/* <Col md="8">{errorLogin !== null ? <Alert variant="danger">{errorLogin}</Alert> : null}</Col> */}</Row>
        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit" className="login-btn">
              Login
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
    </div>
  )
}
export default Login