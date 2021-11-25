import { useContext } from "react";
import BrandItem from "../component/brandItem";
import PostsContext from"../Utils/PostsContext"


function Brand() {
    const { brands } =useContext(PostsContext)
    console.log(brands)
    return ( 
        <>
      
        { brands.map( brand=> (
          <BrandItem  brand={ brand} />

         ))}
          
        

        </>
       
      )
 }

export default Brand;