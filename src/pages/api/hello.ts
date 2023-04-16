// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
  id: number
  title: string
  content: string
  isDone: boolean
}

const inMemoryTodos: Todo[] = [
  { id: 1, title: "初期投入データタイトル", content: "初期投入データコンテンツ", isDone: false }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[]>
) {
  if (req.method === "GET") {
    res.status(200).json(inMemoryTodos)
    return
  }
  if (req.method === "POST") {
    const newTodo = { ...req.body, id: inMemoryTodos.length + 1 }
    inMemoryTodos.push(newTodo)
    res.status(200).json(inMemoryTodos)
    return
  }
  res.status(200).json(inMemoryTodos)
}
