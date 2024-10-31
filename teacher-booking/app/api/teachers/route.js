import teachersRepo from "@/app/repo/teachersRepo";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  let filterType = [...searchParams.keys()][0];
  let value = searchParams.get(filterType);
  console.log(`The filter is ${filterType} and the value is ${value}`);

  let response;
  // this switch case will filter the books based on the filter type
  switch (filterType) {
    case "name":
      response = await teachersRepo.getTeachersByName(value);
      break;
    case "subject":
      response = await teachersRepo.getTeachersBySubject(value);
    default:
      response = await teachersRepo.getTeachers();
  }
  return Response.json(response, { status: 200 });
}
