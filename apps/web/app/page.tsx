import { prisma } from "@repo/db";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div className={`bg-red-600 text-white`}>
      {user?.name ?? "No user added yet"}
    </div>
  );
}
