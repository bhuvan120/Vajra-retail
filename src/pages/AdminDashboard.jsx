import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Vajra Admin</h2>

        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Customers</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Topbar */}
        <header className="topbar">
          <input type="text" placeholder="Search..." />
          <div className="profile">Admin</div>
        </header>

        {/* Stats Cards */}
        <section className="stats">
          <div className="card blue">
            <h4>New Orders</h4>
            <p>35,673</p>
          </div>

          <div className="card green">
            <h4>Total Income</h4>
            <p>₹14,96,600</p>
          </div>

          <div className="card red">
            <h4>Total Expense</h4>
            <p>₹2,65,260</p>
          </div>

          <div className="card yellow">
            <h4>New Users</h4>
            <p>32,566</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="dashboard-content">
          <div className="box">
            <h3>Sales Summary</h3>
            <p>Graph will be added here</p>
          </div>

          <div className="box">
            <h3>Top Selling Products</h3>
            <ul>
              <li>MacBook Pro - ₹89,999</li>
              <li>Apple Watch - ₹39,999</li>
              <li>HomePod - ₹12,999</li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;
