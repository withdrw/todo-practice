import { onSnapshot,collection } from "firebase/firestore"
import { useAmp } from "next/amp"
import { useEffect, useState } from "react"
import { db } from "@/firebase"
import Link from "next/link"

export default function TodoList(){


    const [todos,setTodos] = useState([])


    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
            setTodos(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title : doc.data().title, 
                    description: doc.data().description
                }
            }))
        })
        return unsubscribe
    })

    return(
        <div>
            <h1> Todos </h1>
            <ul className="todoList">
            {todos?.map ((todo) => {
                

                return (

                    <Link key={todo.id}  href={`/${todo.id}`}>
                <li key={todo?.id} className="listItem">{todo.title}</li> 
    
                </Link>
    )
            })}
              
            </ul>
        </div>
    )
}