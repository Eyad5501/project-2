import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"
import styles from "./AddItem.module.css"
function AddItem() {
     const { addItem} = useContext(PostsContext)
    return ( 
        <>
        <div className={styles.addItem} onSubmit={addItem}>
        <h1>AddItem</h1>
        <Form className="mt-5">
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
            Description
            </Form.Label>
            <Col md="6">
              <Form.Control type="textarea" name="description" rows={3} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Image
            </Form.Label>
            <Col md="6">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-5">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">AddItem</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      </>
     );
}
export default AddItem ;