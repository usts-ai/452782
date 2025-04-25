import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DashboardOverview from '../components/dashboard/DashboardOverview';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <DashboardOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
