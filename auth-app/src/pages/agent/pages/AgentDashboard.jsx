import StatCard from "../components/StatCard";

const AgentDashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Leads" value="120" />
        <StatCard title="Contacted" value="78" />
        <StatCard title="Interested" value="32" />
        <StatCard title="Closed" value="12" />
      </div>
    </>
  );
};

export default AgentDashboard;
