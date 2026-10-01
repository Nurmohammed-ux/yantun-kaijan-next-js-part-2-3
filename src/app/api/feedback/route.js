import { connect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET(request) {
  const feedbacksCollection = connect("feedbacks");
  const result = await feedbacksCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please send a message",
    });
  }

  const newFeedback = { message, date: new Date().toISOString() };

  const feedbacksCollection = connect("feedbacks");
  const result = await feedbacksCollection.insertOne(newFeedback);
  revalidatePath("/feedback")

  return Response.json(result);
}
