import React from "react";
import Book from "./Book.jsx"

function Library(props) {
  return(
    <>
    <Book name='파이썬' numOfPage={300}/>
    <Book name='aws' numOfPage={200}/>
    <Book name='리액트' numOfPage={100}/>
    </>
  )
}

export default Library;