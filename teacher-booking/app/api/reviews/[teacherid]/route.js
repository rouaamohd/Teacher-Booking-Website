import teachersRepo from "@/app/repo/teachersRepo";

export async function GET(request, { params }) {
    const teacherid = params.id
    const teacher = await teachersRepo.getTeacherReview(teacherid)
    return Response.json(teacher, { status: 200 })
}
