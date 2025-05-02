import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const pendientes = todos.filter((t) => !t.completada);
  const completadas = todos.filter((t) => t.completada);

  return (
    <div className="contenedor-tabla">
      {pendientes.length > 0 && (
        <div className="columna">
          <h2>Pendientes</h2>
          <ul>
            {pendientes.map((tarea, index) => (
              <TodoItem key={index} tarea={tarea} index={index} />
            ))}
          </ul>
        </div>
      )}
      {completadas.length > 0 && (
        <div className="columna">
          <h2>Completadas</h2>
          <ul>
            {completadas.map((tarea, index) => (
              <TodoItem key={index} tarea={tarea} index={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;