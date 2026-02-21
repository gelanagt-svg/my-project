import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ComplianceTasks from './components/ComplianceTasks';
import RiskRegister from './components/RiskRegister';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div>
      <Header />
      <Navbar onSelect={setActiveSection} />
      <main>
        <Dashboard active={activeSection === 'dashboard'} />
        <ComplianceTasks active={activeSection === 'compliance'} />
        <RiskRegister active={activeSection === 'risk'} />
      </main>
    </div>
  );
};

export default App;