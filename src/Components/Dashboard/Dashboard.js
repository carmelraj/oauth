import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h4>{user && <span>Hi {user.email}, you are now loged in.</span>}</h4>
      {JSON.stringify(user)}
    </div>
  );
};
export default Dashboard;
