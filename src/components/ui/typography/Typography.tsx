import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type PropsType<T extends ElementType = 'p'> = {
  variant:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
  children: ReactNode
  className?: string
  as?: T
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: PropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof PropsType<T>>
) => {
  const { variant = 'body1', className, as: Component = 'p', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
