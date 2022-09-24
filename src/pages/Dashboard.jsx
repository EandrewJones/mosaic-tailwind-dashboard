import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../partials/actions/FilterButton";
import Datepicker from "../partials/actions/Datepicker";
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

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className='sm:flex sm:justify-between sm:items-center mb-8'>
              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className='btn bg-indigo-500 hover:bg-indigo-600 text-white'>
                  <svg
                    className='w-4 h-4 fill-current opacity-50 shrink-0'
                    viewBox='0 0 16 16'
                  >
                    <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                  </svg>
                  <span className='hidden xs:block ml-2'>Add view</span>
                </button>
              </div>
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
