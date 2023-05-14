import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { InputForm } from './components/InputForm';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  // memo: 'todo-memo',
  // priority: 'high',
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1, // ユニークなID
      title: '猫にご飯をあげる',
      completed: true,
    },
    {
      id: 2, // ユニークなID
      title: '宿題をやる',
      completed: false,
    },
  ]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title,
        completed: false,
      },
    ]);
  };

  return (
    <div>
      <InputForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input type='checkbox' checked={todo.completed} />
            <span>{todo.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
