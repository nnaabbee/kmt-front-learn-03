import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { Label } from "@/components/Label"
import { WithChildLabel } from "@/components/WithChildLabel"
import { Button } from "@/components/Button"

export default function Home() {
  // useRouterでルーティングに便利な関数群を持ったオブジェクトを生成
  const router = useRouter()

  const moveToTodoPage = () => {
    router.push("/todos")
  }

  return (
    <>
      <Head>
        <title>KMT 勉強会</title>
      </Head>
      <h1>Hello, World!!</h1>
      <Label />
      <WithChildLabel>開始タグと終了タグで挟む</WithChildLabel>
      <div>
        <Button buttonName="サンプルボタン" onClick={() => alert("ボタン押した")} />
        <Button buttonName="Todosページへ移動" onClick={moveToTodoPage} />
      </div>
      <div>
        <Link href="/sample">Sample Index Pageへ</Link>
      </div>
      <div>
        <Link href="/sample/other">Sample Other Pageへ</Link>
      </div>
    </>
  )
}
