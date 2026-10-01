import { getFeedback } from "@/action/server/feedback";
import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const metadata = {
  title: {
    default: "Feedback Page",
  },
};

// const getFeedback = async () => {
//   const res = await fetch(`${process.env.NEXT_LIVE_SERVER}/api/feedback`, {
//     // cache: "force-cache",
//     next: { revalidate: 60 }
//   });
//   return await res.json();
// };

const FeedbackPage = async () => {
  const feedback = await getFeedback();
  
  return (
    <div className="px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          User Feedbacks ({feedback?.length || 0})
        </h1>
        <Link href={"/feedback/add"} className="btn">
          Add Feedback
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedback?.map((item) => (
          <FeedbackCard key={item._id.toString()} feedback={item} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
