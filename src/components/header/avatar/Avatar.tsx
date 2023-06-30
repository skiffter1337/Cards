import { FC } from 'react'

type AvatarPropsType = {
  src?: string
  name?: string
  width?: string
  height?: string
}
export const Avatar: FC<AvatarPropsType> = ({ name, src, height, width }) => {
  return <img src={src} alt={`${name} avatar`} width={width} height={height} />
}
