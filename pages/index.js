import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TodoList from '@/components/TodoList'
import CreateTodo from '@/components/CreateTodo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div className='container'>

     <TodoList />
     <CreateTodo />


     </div>
    </>
  )
}
