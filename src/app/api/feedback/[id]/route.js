import { connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbacksCollection = connect("feedbacks");

export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Please give valid id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbacksCollection.findOne(query);

  return Response.json(result);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Please give valid id",
    });
  }

  const query = { _id: new ObjectId(id) };
  const result = await feedbacksCollection.deleteOne(query);

  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();

  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "Please give valid id",
    });
  }

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please send a message",
    });
  }

  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      message,
    },
  };
  const result = await feedbacksCollection.updateOne(query, updateDoc);

  return Response.json(result);
}
