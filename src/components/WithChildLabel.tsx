import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const WithChildLabel: FC<Props> = (props: Props) => {
  const { children } = props
  return <p>{children}</p>
}
