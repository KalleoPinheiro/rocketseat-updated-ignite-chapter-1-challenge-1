import cs from 'classnames'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

import { Card } from '../../components/Card'
import { Todo } from '../../pages'
import EmptyList from '../../assets/paper.svg'

import styles from './styles.module.css'

type TodoListProps = {
  list: Todo[]
  completeTasks: number
  handleComplete: (todoKey: string) => void
  handleDelete: (todoKey: string) => void
}

const TodoList = ({
  list,
  completeTasks,
  handleComplete,
  handleDelete
}: TodoListProps) => (
  <section className={styles.list}>
    <div className={styles.listHeader}>
      <p>
        Tarefas criadas <span className={styles.counter}>{list.length}</span>
      </p>
      <p>
        Concluídas{' '}
        <span className={styles.counter}>
          {completeTasks === 0
            ? completeTasks
            : `${completeTasks} de ${list.length}`}
        </span>
      </p>
    </div>
    <div className={styles.listContent}>
      {!list.length && (
        <div className={styles.emptyList}>
          <img src={EmptyList} alt='empty list' />
          <p>
            Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
            itens a fazer
          </p>
        </div>
      )}
      {list.map(todo => (
        <Card key={todo.key}>
          <>
            {todo.complete ? (
              <CheckCircle
                size={24}
                color='#5E60CE'
                weight='fill'
                alt={`mark todo ${todo.title} as complete`}
                role='button'
                onClick={() => handleComplete(todo.key)}
              />
            ) : (
              <Circle
                size={24}
                color='#1E6F9F'
                alt={`mark todo ${todo.title} as pending`}
                role='button'
                onClick={() => handleComplete(todo.key)}
              />
            )}
            <p
              className={cs(
                styles.todoTitle,
                todo.complete && styles.todoChecked
              )}
            >
              {todo.title}
            </p>
            <Trash
              size={24}
              role='button'
              onClick={() => handleDelete(todo.key)}
              alt={`delete todo ${todo.title}`}
            />
          </>
        </Card>
      ))}
    </div>
  </section>
)

export default TodoList
