import { apiFetch } from "../../../api/api";

const GenerateProposal = ({ leadId, onSuccess }) => {
  const handleGenerate = async () => {
    try {
      const updatedLead = await apiFetch(`/proposals/${leadId}`, {
        method: "POST",
      });
      onSuccess(updatedLead);
    } catch (err) {
      console.error(err);
      alert("Failed to generate proposal");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <button
        onClick={handleGenerate}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Generate Proposal
      </button>
    </div>
  );
};

export default GenerateProposal;
