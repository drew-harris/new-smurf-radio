import { EditShowForm } from "~/components/member/EditShowForm";
import { api } from "~/trpc/server";

export default async function Page({ params }: { params: { showId: string } }) {
  const show = await api.shows.getShow.query({ showId: params.showId });

  return (
    <div className="px-8 py-4 md:px-[300px]">
      <EditShowForm initialData={show}></EditShowForm>
    </div>
  );
}
