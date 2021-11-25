import { Card,Col,Row } from "react-bootstrap"
import styles from"./phoneItem.module.css"
function PhoneItem(props) {
  const { phone } = props
  if(!phone){
    return null
  }
  return (
    <>
     <Col>
      <Card className={styles.ItemPhone}>
        <Card.Body>
          <Card.Title className={styles.ItemPhoneT}> {phone.brand}</Card.Title>
          <Col className={styles.ItemPhoneText}>
         <h1>Phone_name:</h1> <Card.Text  >{ phone.phone_name}</Card.Text>
         <h1>Release_date</h1> <Card.Text> {phone.release_date} </Card.Text>
         <h1>Dimension</h1> <Card.Text> {phone.dimension} </Card.Text>
         <h1>Os</h1><Card.Text> {phone.os} </Card.Text>
         <h1>Storage</h1><Card.Text> {phone.storage} </Card.Text>
          </Col>
          <h1>Phone_Images</h1>
            {phone.phone_images.map(image => (
            <Card.Img className={styles.ItemPhoneM} variant="top" src={image} />
          ))}
         
        </Card.Body>
        </Card>
        </Col>
    </>
  )
}

export default PhoneItem
