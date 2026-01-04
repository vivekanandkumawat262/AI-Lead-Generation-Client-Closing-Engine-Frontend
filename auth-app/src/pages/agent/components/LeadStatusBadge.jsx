const LeadStatusBadge = ({ status }) => {
  const colors = {
    New: "bg-slate-200",
    Interested: "bg-green-200",
    Closed: "bg-orange-200",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}>
      {status}
    </span>
  );
};

export default LeadStatusBadge;
