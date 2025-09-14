"use client";


import DoctorAgentList from "./component/DoctorAgentList";
import HistoryList from "./component/HistoryList";

export default function DashboardPage() {
  return (
    <div>
      <div className="my-10 flex justify-center items-center">
        <h2 className='text-bold gap-10 mx-10 '>My Dashboard</h2>
        <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"> + consult with Doctor</button>
      </div>
    <HistoryList />
    <DoctorAgentList />
    </div>
  );
}


