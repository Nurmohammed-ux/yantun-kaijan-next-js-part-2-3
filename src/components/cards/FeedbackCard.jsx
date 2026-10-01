const FeedbackCard = ({ feedback, onUpdate }) => {
  const formattedDate = new Date(feedback.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Bind the feedback ID directly to the server action
  // const deleteAction = deleteFeedback.bind(null, feedback._id.toString());

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
            Feedback #{feedback._id.toString().slice(-4)}
          </span>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          &quot;{feedback.message}&quot;
        </p>
      </div>

      <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
        {/* Update Form / Trigger */}
        <form action={onUpdate}>
          <input type="hidden" name="id" value={feedback._id.toString()} />
          <button
            type="submit"
            className="px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors cursor-pointer"
          >
            ✏️ Update
          </button>
        </form>

        {/* Delete Form using Server Action */}
        <form>
          <button
            type="submit"
            className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
          >
            🗑️ Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackCard;
