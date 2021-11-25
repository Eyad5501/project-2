import { useContext } from "react"
import { Card, Col, Container, Image, Row} from "react-bootstrap"
import { useParams } from "react-router"
import postsContext from "../Utils/PostsContext"
import styles from "./OneItem.module.css"
function OneItem() {
  const { ItemId } = useParams()
  const { Items ,profile } = useContext(postsContext)
  const Item = Items.find(I => I._id === ItemId)
  if (!Item) {
    return <h1>Loading....</h1>
  }
  return (
    <>
    <div className={styles.user}>
    <Container className="mt-5 md-3">
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={2}>
        <Image className={styles.userImage} src={profile.photo}   height="270px" width="250px" roundedCircle   />
        </Col>
        <Col md={3}>
          <Image src={Item._user.image} style={{ height: 200 }} />
        </Col>
        <Col md={4}>
          <h3 className={styles.uaername}>   Name: {Item._user.firstName} {Item._user.lastName}
          </h3>
        </Col>
      </Row>
    </Container>
    </div>
    <div className={styles.onePost}>
    <Container>
      <Row className=" mt-5 d-flex align-items-center">
        <Col>
          <Image src={Item.image} style={{ height: 400 }} thumbnail />
        </Col>
        <Col md={7}>
          <Card.Header>
            <Card.Title className="text-center">{Item.title}</Card.Title>
          </Card.Header>
          <Card.Body style={{ height: 200 }}>
            <Card.Text className="text-center">{Item.description}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}
export default OneItem