import { FC } from 'react'

type AvatarPropsType = {
  src?: string
  name?: string
  width?: string
  height?: string
  radius?: string
}
export const Avatar: FC<AvatarPropsType> = ({
  name,
  src,
  height = '36px',
  width = '36px',
  radius = '50%',
}) => {
  return (
    <img
      src={src}
      alt={`${name} avatar`}
      width={width}
      height={height}
      style={{ borderRadius: radius }}
    />
  )
}
