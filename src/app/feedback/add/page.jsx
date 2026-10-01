import { connect } from "@/lib/dbConnect";
import FeedbackForm from "@/components/form/FeedbackForm";
import { postFeedback } from "@/action/server/feedback";

const AddFeedBack = () => {
  
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gray-50/50">
      {/* Page Header Section */}
      <div className="w-full max-w-xl text-center mb-6">
        <h1 className="text-4xl mb-4 font-extrabold text-gray-900 tracking-tight">
          We Value Your Feedback
        </h1>
        <p className="text-base text-gray-500 mt-2">
          Help us improve our food delivery service and menu options.
        </p>
      </div>

      {/* Feedback Form Component */}
      <FeedbackForm postFeedback={postFeedback} />
    </div>
  );
};

export default AddFeedBack;
