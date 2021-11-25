import { useContext } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import PostsContext from "../Utils/PostsContext"

function ModalItem(props) {
  const { show, handleClose, Item } = props
  const { confirmItem } = useContext(PostsContext)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Form onSubmit={e => confirmItem(e, Item._id)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" defaultValue={Item.title} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
              description
            </Form.Label>
            <Form.Control as="textarea" name="description" defaultValue={Item.description} rows={3} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
              Image
            </Form.Label>
            <Form.Control type="url" name="image" defaultValue={Item.image} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="Submit" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ModalItem
