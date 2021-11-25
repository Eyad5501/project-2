
import axios from "axios"
import { useEffect, useState } from "react"
import Articles from "./component/Articles"
import Navbar from "./component/Navbar"


    

        
function App() {
  const [articles, setArticles] = useState([])
  

 

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-10-12&sortBy=publishedAt&apiKey=4cc76c83f8db4ada8397cb527e52c6bf"
      )
      .then(response => {
        setArticles(response.data.articles)
        
      })
  }, [])

  return (
    <>
      <Navbar/>
     <Articles articles={articles} /> 

    </>
  )

 

  
}

export default App