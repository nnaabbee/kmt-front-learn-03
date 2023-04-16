import { FC } from "react"

type Props = {
  buttonName: string
  onClick: () => void
}

// オブジェクトの分割代入を使うやり方
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
export const Button: FC<Props> = ({ buttonName, onClick }) => {
  return <button onClick={onClick}>{buttonName}</button>
}
