import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/Header/Header'

function App() {

  return (
    <>
      <div className='container mx-auto mb-20'>

        <Header></Header>
        <hr />
        <div className='flex justify-between gap-5 mt-8'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>

        </div>
      </div>

    </>
  )
}

export default App
