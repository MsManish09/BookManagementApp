import BookCard from "./BookCard"


function Body({books, setBooks}){
    return(
        <div className =' flex flex-col gap-8 p-8 items-center mt-4 ' >
            <h1 className=" text-3xl font-bold underline ">Book List</h1>
            <div className="  flex gap-6 justify-center flex-wrap  ">
                <BookCard books={books} />
            </div>
        </div>
    )
}

export default Body