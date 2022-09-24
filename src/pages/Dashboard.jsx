import React, { useState, useEffect } from "react";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import AreaChart01 from "../partials/dashboard/AreaChart01";
import AreaChart02 from "../partials/dashboard/AreaChart02";
import AreaChart03 from "../partials/dashboard/AreaChart03";
import SideBySideBarChart from "../partials/dashboard/SideBySideBarChart";
import RealTimeAreaChart from "../partials/dashboard/RealTimeAreaChart";
import PieChart from "../partials/dashboard/PieChart";
import DataTable01 from "../partials/dashboard/DataTable01";
import MultiseriesLineChart from "../partials/dashboard/MultiseriesLineChart";
import OverUnderBarChart from "../partials/dashboard/OverUnderBarChart";
import DataTable02 from "../partials/dashboard/DataTable02";
import HorizontalPieChart from "../partials/dashboard/HorizontalPieChart";
import ActivityFeed from "../partials/dashboard/ActivityFeed";
import IncomeExpenseFeed from "../partials/dashboard/IncomeExpenseFeed";
import DashboardControls from "../partials/dashboard/DashboardControls";
import PageLayout from "../partials/PageLayout";

function Dashboard() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      {/* Welcome banner */}
      {showBanner && <WelcomeBanner />}

      {/* Dashboard actions */}
      <div className='sm:flex sm:justify-between sm:items-center mb-8'>
        {/* Left: Avatars */}
        <DashboardAvatars />

        {/* Right: Actions */}
        <DashboardControls />
      </div>

      {/* Cards */}
      <div className='grid grid-cols-12 gap-6'>
        {/* Line chart (Acme Plus) */}
        <AreaChart01 />
        {/* Line chart (Acme Advanced) */}
        <AreaChart02 />
        {/* Line chart (Acme Professional) */}
        <AreaChart03 />
        {/* Bar chart (Direct vs Indirect) */}
        <SideBySideBarChart />
        {/* Line chart (Real Time Value) */}
        <RealTimeAreaChart />
        {/* Doughnut chart (Top Countries) */}
        <PieChart />
        {/* Table (Top Channels) */}
        <DataTable01 />
        {/* Line chart (Sales Over Time) */}
        <MultiseriesLineChart />
        {/* Stacked bar chart (Sales VS Refunds) */}
        <OverUnderBarChart />
        {/* Card (Customers) */}
        <DataTable02 />
        {/* Card (Reasons for Refunds) */}
        <HorizontalPieChart />
        {/* Card (Recent Activity) */}
        <ActivityFeed />
        {/* Card (Income/Expenses) */}
        <IncomeExpenseFeed />
      </div>
    </PageLayout>
  );
}

export default Dashboard;
