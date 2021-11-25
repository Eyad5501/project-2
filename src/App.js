import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Phone from "./page/Phone"
import Phones from "./page/Phones"
import Home from "./page/Home"
import Brand from "./page/Brand"
import PostsContext from "./Utils/PostsContext"
import Navbar from "./component/Navbar"
import AddItem from "./page/AddItem"
import Login from "./page/Login"
import SignUp from "./page/SignUp"
import Home1 from "./page/Home1"
import Profile from "./page/Profile"
import OneItem from "./page/OneItem"

function App() {
  const [brands, setdatas] = useState([])
  const [Items, setItem] = useState([])
  const [profile, setProfile] = useState(null)

  const navigate = useNavigate()

  const getdatas = () => {
    axios.get("https://api-mobilespecs.azharimm.site/v2/brands").then(response => {
      const BatasData = response.data.data
      setdatas(BatasData)
    })
  }
  useEffect(() => {
    getdatas()
    getItem()
    if (localStorage.tokenPost) {
      getProfile()
    }
  }, [])
  const getItem = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/electronic-094/items", {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      setItem(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const addItem = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const ItemBodey = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/electronic-094/items", ItemBodey, {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      getItem()
      navigate("/Home1")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBodey = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBodey)
      console.log("sign up succes")
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBodey = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBodey)
      const tokenPost = response.data
      localStorage.tokenPost = tokenPost
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenPost")
    navigate("/")
  }
  const deletePost = async ItemId => {
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/electronic-094/items/${ItemId}`, {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      getItem()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const confirmItem = async (e, ItemId) => {
    e.preventDefault()
    try {
      const form = e.target
      const ItemBodey = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }
      await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/electronic-094/items/${ItemId}`, ItemBodey, {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      getItem()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const store = {
    brands: brands,
    addItem: addItem,
    Items: Items,
    signup: signup,
    login: login,
    logout: logout,
    navigate: navigate,
    profile: profile,
    deletePost: deletePost,
    confirmItem: confirmItem,
  }

  return (
    <>
      <PostsContext.Provider value={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/Phones/:phoneId" element={<Phones />} />
          <Route path="/Phone/:phoneId" element={<Phone />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/Item/:ItemId" element={<OneItem />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </PostsContext.Provider>
    </>
  )
}
export default App
