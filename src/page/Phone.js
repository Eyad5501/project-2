import axios from "axios"
import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { useParams } from "react-router"
import PhoneItem from "../component/phoneItem"

function Phone() {
  const { phoneId} = useParams()
  const [onephone, setPhone] = useState(null)
  const getPhone = () => {
    axios.get(`https://api-mobilespecs.azharimm.site/v2/${phoneId}`)
    .then(response => {
      const PhoneData = response.data.data
      setPhone(PhoneData)
    })
  }
  useEffect(() => {
    getPhone()
  },[])
  console.log(onephone)
  return (
    <>
    <Row xs={1} sm={1} md={1} className=" mt-3 mx-2 ms-3">
      <PhoneItem phone={onephone} />
      </Row>
    </>
  )
}
export default Phone;
