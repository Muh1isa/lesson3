import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Header from './components/Header'
import Main from './components/Main'
import Signin from './components/Signin'

const url = 'https://fakestoreapi.com/products'

function App() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const [psw, setPsw] = useState('')

  const fetchData = async () => {
    setLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setList(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  if(loading) return <Loading />

  return (
    <>
      <Header modal={modal} setModal={setModal} />
      <Main list={list} />
    </>
  )
}

export default App
