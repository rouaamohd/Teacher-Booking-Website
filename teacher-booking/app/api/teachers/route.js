import teachersRepo from "@/app/repo/teachersRepo";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Checking if there are any search parameters
  let query = searchParams.get("query");
  let subject = searchParams.get("subject");
  let response;

  if (query) {
    // If a query parameter is present, perform search
    response = await teachersRepo.getSearchedTeachers(query);
  } else if (subject) {
    // If a search parameter is present, perform filter
    if (subject == "All") {
      response = await teachersRepo.getTeachers();
    } else {
      response = await teachersRepo.getTeachersBySubject(subject);
    }
  } else {
    // If no parameter is present, retrieve all teachers
    response = await teachersRepo.getTeachers();
  }
  // Check for errors in the response
  if (response.error) {
    return new Response(JSON.stringify({ error: response.error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
