"use client";

import { useRouter } from "next/navigation";

const FeedbackForm = ({ postFeedback }) => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    const data = await postFeedback(message)

    // const res = await fetch(`${process.env.NEXT_LIVE_SERVER}/api/feedback`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ message }),
    // });
    // const data = await res.json();

    if(data.insertedId) {
        alert("Success")
        router.push("/feedback");
    }
  };
  return (
    <div className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Leave Your Feedback
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2"
          >
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Tell us about your experience with our menu..."
            required
            className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl shadow-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
