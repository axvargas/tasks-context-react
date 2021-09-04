import { createContext } from 'react';

export const TaskContext = createContext({
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      dueDate: '2020-01-01',
      priority: 'low',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Task 2 description',
      dueDate: '2020-01-01',
      priority: 'low',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Task 3 description',
      dueDate: '2020-01-01',
      priority: 'low',
    }
  ]
});