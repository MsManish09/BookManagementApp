
// const logoAddress = ''
import { booksData } from "../utils/bookData"

function Header({books, setBooks}){

    // to filter from the original list
    const originalBooklist = booksData

    // search functionality logic
    function handleSearch(searchValue){

        const searchBook = searchValue.target.value.toLowerCase()
        console.log(searchBook)

        setBooks(originalBooklist.filter((book)=> book.title.toLowerCase().includes(searchBook)))

    }


    return(
        <div className="bg-[#998fc7] p-2">
            <nav className="flex text-[1.2rem] justify-evenly items-center flex-wrap gap-4 ">
                <img src="src\utils\logo.png" alt="app logo" height={75} width={75} className="hover:scale-95 " />
                <div id="searchDiv" className=" flex gap-4 " >
                    <input onChange={(e)=>{handleSearch(e)}} type="text" placeholder="Enter Book Name" className=" border-2 p-1.5 border-[#F9F5FF] bg-[#D4C2FC] rounded-2xl pl-2  " />
                    <button className=" bg-[#D4C2FC] p-1 rounded-2xl border-2 border-solid border-[#e5e5e5] font-semibold hover:scale-95 " >Search</button>
                </div>
            </nav>
        </div>
    )
}

export default Header