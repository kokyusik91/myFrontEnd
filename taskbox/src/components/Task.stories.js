// src/components/Task.stories.js
import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = (args) => <Task {...args} />;
// 스토리add
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};
// 바인드?
// 바인드?
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};
// 종류
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
