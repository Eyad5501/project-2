import { useContext } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import PostsContext from "../Utils/PostsContext"

function BrandItem(props) {
  const { brand } = props

  return (
    <>
      {/* <Link to={`/Phones/${}`}> */}
      <option value={brand.brand_slug}>{brand.brand_name}</option>
      {/* </Link> */}
    </>
  )
}

export default BrandItem
