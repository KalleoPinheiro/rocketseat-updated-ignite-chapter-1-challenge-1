import { InputHTMLAttributes } from 'react'

import styles from './styles.module.css'

type TextFieldProps = {
  value: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ value, ...props }: TextFieldProps) => (
  <input value={value} className={styles.inputText} {...props} />
)
