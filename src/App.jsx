import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readTimes,setReadTime]=useState(0)
  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks,blog])
    console.log('hi')
  }

  const handleReadTime=(time)=>{
    // console.log(blog)
    setReadTime(readTimes+time)
  }
  // console.log(typeof bookmarks)
  return (
    <>
      <div className='container mx-auto mb-20'>

        <Header></Header>
        <hr />
        <div className='flex justify-between gap-5 mt-8'>
          <Blogs handleReadTime={handleReadTime} handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks readTimes={readTimes} bookmarks={bookmarks}></Bookmarks>

        </div>
      </div>

    </>
  )
}

export default App
