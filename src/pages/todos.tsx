import Head from "next/head"
import Link from "next/link"
import { ChangeEvent, useState } from "react"
import axios from "axios"
import { Button } from "@/components/Button"

// APIから戻ってくるTodoの型
type Todo = {
  id: number
  title: string
  content: string
  isDone: boolean
}

// フロント側でTodoを作成するときの型
type PostTodo = Omit<Todo, "id">

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  const fetchTodos = () => {
    axios.get("/api/hello").then((res) => {
      setTodos(res.data)
    })
  }

  const registerTodo = () => {
    const newTodo: PostTodo = {
      title,
      content,
      isDone: false,
    }
    axios.post("/api/hello", newTodo).then((res) => {
      setTodos(res.data)
    })
  }

  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>
      <h1>Todos</h1>
      <div>
        <p>タイトル：</p>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </div>
      <div>
        <p>コンテンツ：</p>
        <input value={content} onChange={onChangeContent} />
      </div>
      <Button buttonName="Todo登録" onClick={registerTodo} />
      <Button buttonName="Todo取得" onClick={fetchTodos} />
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.id}</span>
            <span> - </span>
            <span>{todo.title}</span>
            <span> - </span>
            <span>{todo.content}</span>
            <span> - </span>
            <span>{todo.isDone ? "済" : "未"}</span>
          </div>
        ))}
      </div>
      <div>
        <Link href="/">Topページへ戻る</Link>
      </div>
    </>
  )
}
