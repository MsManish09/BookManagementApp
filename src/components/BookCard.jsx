
function BookCard({books}){

    return(
        books.map( (book)=>{
            return(
                <div className=" bg-[white] border-2 border-solid border-[#F9F5FF] flex flex-col gap-1 w-[275px]  h-[350px] items-center p-1 justify-center shadow-2xl rounded-[10px] hover:scale-95 hover:border-[#D4C2FC] ">
                    <img src={book.imageUrl} className=" rounded-2xl h-[200px] w-[150px] " alt="Book image" />
                    <div id="bookDetails" className=" ml-2 flex-col gap-1.5 mt-2 overflow-hidden ">
                        <h1 className=" text-[1.2rem] font-semibold underline " >{book.title}</h1>
                        <span className="text-[1rem] text-gray-600 " > {book.author} </span>
                        <span className=" font-semibold "> {book.year} </span>
                        <p> {book.shortDescription} </p>
                    </div>
                </div>
            )
        } )
    )
}

export default BookCard