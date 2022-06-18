import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react'
import { Button } from '../../components/Button'
import { Form } from '../../components/Form'
import { TextField } from '../../components/TextField'

type TodoFormProps = {
  handleInputChange: (inputEvent: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (formEvent: FormEvent<HTMLFormElement>) => void
  value: string
}

export const TodoForm = ({
  handleSubmit,
  handleInputChange,
  value
}: TodoFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        placeholder='adicione uma nova tarefa'
        value={value}
        onChange={handleInputChange}
      />
      <Button disabled={!value}>
        Criar
        <PlusCircle size={16} />
      </Button>
    </Form>
  )
}
