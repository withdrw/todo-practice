import { getDoc, doc } from "firebase/firestore"
import { db } from "@/firebase"



export async function getServerSideProps(context){
    const id = context.query.id
    const docSnap = await getDoc(doc(db, "todos", id))
    const data = docSnap?.data()

    return {
        props: {
            todo: {
                // id: data?.id,
                title: data?.title,
                description: data?.description
            }
        }
    }


}

export default function Todo({todo}){

    return(
        <div className="container">
            <h1> Title: {todo.title} </h1>
            <h3> Detail: {todo.description} </h3>
        </div>
    )
}