import { Children, createContext, useContext, useState } from "react";

const MyListContext = createContext();

//Provider:
function MyListProvider ({ children }){
     const [ myList, setMyList] = useState ([]);
     
     
     //function isAlreadyInList(movieId)
     //function addToMyList(movieId)
     //function removeFromMyList(movieId)
   
}