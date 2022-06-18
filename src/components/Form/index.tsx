import { FormHTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

type FormProps = {
  children: ReactNode
} & FormHTMLAttributes<HTMLFormElement>

export const Form = ({ children, ...props }: FormProps) => (
  <form {...props} className={styles.form}>
    {children}
  </form>
)
