import { v4 as uuidV4 } from 'uuid'
import { PlusCircle, Trash, Circle, CheckCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import TodoLogo from '../../assets/todo-logo.svg'
import { TodoForm } from '../../containers/TodoForm'

import styles from './styles.module.css'
import TodoList from '../../containers/TodoList'

export type Todo = {
  key: string
  title: string
  complete: boolean
}

export const HomePage = () => {
  const [completedTasks, setCompleteTasks] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleInputChange = (inputEvent: ChangeEvent<HTMLInputElement>) => {
    setInputValue(inputEvent.target.value)
  }

  const handleSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault()

    if (inputValue === '') return

    const newTodoItem: Todo = {
      key: uuidV4(),
      title: inputValue,
      complete: false
    }

    setTodoList([...todoList, newTodoItem])
    setInputValue('')
  }

  const handleDelete = (todoKey: string) => {
    setTodoList(todoList.filter(todo => todo.key !== todoKey))
  }

  const handleComplete = (todoKey: string) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.key === todoKey) {
          return { ...todo, complete: !todo.complete }
        } else {
          return { ...todo }
        }
      })
    )
  }

  useEffect(() => {
    const numberOfCompletedTaks =
      todoList.length &&
      todoList.reduce((accumulator, todo) => {
        if (todo.complete) {
          accumulator += 1
        }
        return accumulator
      }, 0)

    setCompleteTasks(numberOfCompletedTaks)
  }, [todoList])

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <img src={TodoLogo} alt='Logo Todo' />
      </header>
      <main className={styles.main}>
        <TodoForm
          value={inputValue}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        <TodoList
          completeTasks={completedTasks}
          list={todoList}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}
