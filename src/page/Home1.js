import { useContext } from "react"
import { Card, Container, Row,Col,CardGroup,Button  } from "react-bootstrap"
import ItemCard from "../component/ItemCard"
import PostsContext from "../Utils/PostsContext"

function Home1() {
  const { Items } = useContext(PostsContext)


  return (
    <Container>
      <Row xs={1} sm={2} md={3} className="g-4 mt-4">
        {Items.map(Item => (
          <>
           <CardGroup>
            <Col>
           
            <ItemCard Item={Item} />
           
            </Col>
            </CardGroup>
          
          </>
        ))}
      </Row>
    </Container>
  )
}

export default Home1
