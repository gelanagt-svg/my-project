import React from 'react';

interface DashboardProps {
  active: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ active }) => {
  const metrics = [
    { label: 'Total Risks', value: 5 },
    { label: 'Open Compliance Tasks', value: 3 },
    { label: 'High Severity Risks', value: 2 },
    { label: 'Medium Severity Risks', value: 1 },
  ];

  return (
    <section className={`section dashboard ${active ? 'active' : ''}`}>
      <h2>Dashboard Overview</h2>
      <div className="dashboard-container">
        {metrics.map((metric, index) => (
          <div key={index} className="dashboard-box">
            <h3>{metric.label}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;