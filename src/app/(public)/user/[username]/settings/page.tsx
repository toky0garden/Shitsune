import { Metadata } from "next";
import { UserSettings } from "./UserSettings";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const username = (await params).username;

  return {
    title: `settings ${username}`,
    alternates: {
      canonical: `/user/${username}/settings`,
    },
  };
}

export default function Page() {
  return <UserSettings />;
}
