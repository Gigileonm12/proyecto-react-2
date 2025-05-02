import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';
import { motion } from 'framer-motion';

function TodoItem({ tarea }) {
  const dispatch = useDispatch();

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      layout
      className={tarea.completada ? 'completada' : ''}
    >
      {tarea.contenido}
      <span className="acciones">
        {!tarea.completada && (
          <button onClick={() => dispatch(toggleTodo(tarea.id))}>✅</button>
        )}
        <button onClick={() => dispatch(deleteTodo(tarea.id))}>🗑️</button>
      </span>
    </motion.li>
  );
}

export default TodoItem;