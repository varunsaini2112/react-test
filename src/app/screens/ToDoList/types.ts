import { ChangeEvent } from 'react';

type TaskStatus = 'ToDo' | 'Completed';

export interface Task {
  value: string;
  status: TaskStatus;
  id: string;
}

export interface RenderTemplateProps {
  list: Task[];
  task: Task;
  disabled: boolean;
  onPressAddButton: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ListItemProps {
  item: Task;
  index?: number | null;
}
