import { useContext, useState } from "react"
import { Card, Button, CardGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import postsContext from "../Utils/PostsContext"
import ModalItem from "./Modal"
import styles from "./ItemCard.module.css"
import CardHeader from "react-bootstrap/esm/CardHeader"

function PostCard(props) {
  const { Item, inProfile} = props
  const [show, setShow] = useState(false)
  const { deletePost } = useContext(postsContext)
  const handleClose = () => {
    setShow(false)
  }
  const handleOpen = () => {
    setShow(true)
  }

  return (
    <>
      <CardGroup className="g-3  mx-3 mb-4">
        <Card>
          <Card.Body>
            <CardHeader>
            <Card.Title>{Item.title}</Card.Title>
            </CardHeader>
            <Card.Text>  </Card.Text>
            <Card.Text>  </Card.Text>
            <Card.Img src={Item.image} />
            <Card.Text>  </Card.Text>
            <Card.Text>  </Card.Text>
            <Card.Text> {Item.description} </Card.Text>
            <Card.Text>  </Card.Text>
            <Card.Text>  </Card.Text>
          </Card.Body>
          {inProfile ? (
            <>
              <Button className={styles.mybtu} onClick={handleOpen}>
                Edit
              </Button>
              <Card.Text>  </Card.Text>
             <Card.Text>  </Card.Text>
              <Button className={styles.mybtu} onClick={() => deletePost(Item._id)}>
                Delete
              </Button>
              <Card.Text>  </Card.Text>
             <Card.Text>  </Card.Text>
            </>
          ) : (
            <>
           
              <Link className={styles.mybtu} to={`/Item/${Item._id}`}>
                View
              </Link>
            
            </>
          )}

          <ModalItem show={show} handleClose={handleClose} Item={Item} />
        </Card>
      </CardGroup>
    </>
  )
}

export default PostCard
