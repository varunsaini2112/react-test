import React, { ChangeEvent, useMemo, useState } from 'react';
import { generateId } from '../../lib/helper';
import renderTemplate from './template';
import { Task } from './types';

const ToDoList: React.FC = () => {
  const [list, setList] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({ value: '', status: 'ToDo', id: '' });

  const disabled = useMemo(() => !task.value, [task]);

  const onPressAddButton = () => {
    const { value } = task;
    if (!value.trim()) return;

    const newItem = { ...task, id: generateId() };
    setList([...list, newItem]);
    setTask({ value: '', status: 'ToDo', id: '' });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, value: e.target.value });
  };

  return renderTemplate({
    list,
    task,
    disabled,
    onPressAddButton,
    handleInputChange,
  });
};

export default ToDoList;
