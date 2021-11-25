import {useContext} from "react"
import {Col,Container,Image, Row} from "react-bootstrap"
import ItemCard from "../component/ItemCard"
import PostsContext from "../Utils/PostsContext"
import styles from "./Profile.module.css"
function Profile() {
    const { profile,Items } = useContext(PostsContext)
   
  
    if (!profile) {
      return <h1>Loading</h1>
    }
    const myItems =Items.filter(Item =>Item._user._id === profile._id)
    return (
      <>
      <div className={styles.profilcase} >
      <div className={styles.profile}>
      <Container>
        <Row className="d-flex align-items-center md-5">
          <Col xs={6} md={4}>
      <Image className={styles.image} src={profile.photo} height="270px" width="250px" roundedCircle />
    </Col>
    
          <Col>
          <h2 className={styles.name}>
            Name: {profile.firstName} {profile.lastName}
            </h2>
            <p className={styles.email}>Email: {profile.email} </p>
            
          </Col>
        </Row>
      </Container>
      </div>
            <Container>
            <Row md={4} sm={2} xs={1}>
        {myItems.map(Item=>(
        <ItemCard Item={Item} inProfile={true}/>))}
      <Col>
      </Col>
      </Row>
      </Container>
      </div>
      </>
    )
  }
  export default Profile