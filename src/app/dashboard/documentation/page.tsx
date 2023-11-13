"use client";
import { useState } from "react";

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "profile"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              type="button"
              onClick={() => handleTabClick("profile")}
            >
              Profile
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "dashboard"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              type="button"
              onClick={() => handleTabClick("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "settings"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              type="button"
              onClick={() => handleTabClick("settings")}
            >
              Settings
            </button>
          </li>
          
         
        </ul>
      </div>

      <div id="default-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "profile" ? "" : "hidden"
          }`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Profile tab.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Profile tab.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Profile tab.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Profile tab.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "dashboard" ? "" : "hidden"
          }`}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Dashboard tab.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "settings" ? "" : "hidden"
          }`}
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Settings tab.
          </p>
        </div>
      </div>
    </>
  );
}
