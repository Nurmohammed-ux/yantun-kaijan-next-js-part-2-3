export const feedBack = [
  {
    id: 1,
    message: "Foods are Tasty",
  },
  {
    id: 2,
    message: "Waiter have to be more polite",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Yahoo, Api Created",
  });
}
