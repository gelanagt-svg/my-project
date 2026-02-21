import React from 'react';

interface ComplianceProps {
  active: boolean;
}

interface Task {
  title: string;
  dueDate: string;
}

const tasks: Task[] = [
  { title: 'Verify client KYC', dueDate: '2026-03-01' },
  { title: 'Daily transaction review', dueDate: '2026-02-21' },
  { title: 'Prepare monthly compliance report', dueDate: '2026-02-28' },
];

const ComplianceTasks: React.FC<ComplianceProps> = ({ active }) => {
  return (
    <section className={`section compliance ${active ? 'active' : ''}`}>
      <h2>Compliance Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title} <span style={{ float: 'right' }}>Due: {task.dueDate}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ComplianceTasks;