import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  const [posts,setPosts] = useState([])
  const getposts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response)
  } 
  return (
    <div className={styles.container}>
      Hello world
      <button onClick={getposts}>Click Me</button>
    </div>
  )
}
