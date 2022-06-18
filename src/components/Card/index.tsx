import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

type CardProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const Card = ({ children, ...props }: CardProps) => (
  <article className={styles.card} {...props}>
    {children}
  </article>
)
