import axios from "axios"
import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { useParams } from "react-router"
import PhonesItem from "../component/phonesitem"

function Phones() {
  const { phoneId } = useParams()
  const [phones, setPhones] = useState([])

  const getPhones = () => {
    axios
      .get(`https://api-mobilespecs.azharimm.site/v2/brands/${phoneId}`)

      .then(response => {
        const PhonesData = response.data.data.phones
        setPhones(PhonesData)
      })
  }
  useEffect(() => {
    getPhones()
  }, [phoneId])

  return (
    <>
      <Row xs={2} sm={2} md={3} className="g-3 mt-3 mx-2">
        {phones.map(phone => (
          <PhonesItem phone={phone} />
        ))}
      </Row>
    </>
  )
}
export default Phones
