import { useEffect, useState } from "react"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

// importing book list
import { booksData } from "./utils/bookData"


function App(){

  const [books, setBooks] = useState(booksData)
  
  

  return(
    <div>
      <Header books={books} setBooks={setBooks} />
      <Body books={books} setBooks={setBooks} />
      <Footer />

    </div>
  )
}

export default App