import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks,blog])
    console.log('hi')
  }
  console.log(typeof bookmarks)
  return (
    <>
      <div className='container mx-auto mb-20'>

        <Header></Header>
        <hr />
        <div className='flex justify-between gap-5 mt-8'>
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>

        </div>
      </div>

    </>
  )
}

export default App
