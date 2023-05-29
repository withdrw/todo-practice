import { useState } from "react"
import { db } from "@/firebase"
import { addDoc, collection } from "firebase/firestore"


export default function CreateTodo(){

const [todo , setTodo] = useState({
    title: "",
    description: ""
})


async function handleSubmit(){
    const docRef = await addDoc
    (collection(db, "todos"),todo)
    setTodo({
        title: '',
        detail: '',
    })
}


    return(
        <div>
          <form>
            <label>Title:</label>
            <br />
            <input type="text" onChange={e => setTodo({...todo, title: e.target.value})} value={todo.title} />
            <br />
            <label>Description:</label>
            <br />
            <textarea onChange={e => setTodo({...todo, description: e.target.value})} value={todo.description}></textarea>
          </form>
          <button onClickCapture={handleSubmit} type="">Add Todo</button>
          <p>{JSON.stringify}</p>
        </div>
    )
}