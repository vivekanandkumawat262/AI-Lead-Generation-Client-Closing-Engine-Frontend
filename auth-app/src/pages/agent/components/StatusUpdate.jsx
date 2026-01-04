import { apiFetch } from "../../../api/api";

const statuses = ["NEW", "CONTACTED", "INTERESTED", "CLOSED"];

const StatusUpdate = ({ lead, onUpdate }) => {
  async function updateStatus(status) {
    try {
      const updated = await apiFetch(`/leads/${lead.id}`, {
        method: "PATCH",
        body: { status },
      });
      onUpdate(updated);
    } catch {
      alert("Failed to update status");
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">
      <h3 className="text-lg font-semibold">Update Status</h3>

      <div className="flex gap-3 flex-wrap">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => updateStatus(status)}
            className={`px-4 py-2 rounded border ${
              lead.status === status
                ? "bg-orange-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusUpdate;
