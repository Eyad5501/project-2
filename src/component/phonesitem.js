import { Card,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from"./phonesItem.module.css"

function PhonesItem(props) {
  const { phone } = props
  console.log(phone)
  return (
    <>
    <Col>
      <Card className={styles.ItemPhones}>
        <Card.Body>
        <Card.Title className={styles.ItemPhonestitle} >
        {phone.brand}
          </Card.Title>
          <Card.Text> 
          <Link to={`/Phone/${phone.slug}`} className={styles.ItemPhoneslink}>{phone.phone_name}</Link>
          </Card.Text>
          <Card.Img style={{ width: "10rem", height: "auto" }} variant="top" src={phone.image} />
         
        </Card.Body>
      </Card>
      </Col>
    </>
  )
}

export default PhonesItem
