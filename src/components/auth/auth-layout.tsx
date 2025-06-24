import { ROUTES, seo } from "@/constants";
import Link from "next/link";

export function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <div
          className="absolute inset-0 h-full w-full object-cover dark:grayscale border-r border-stone-800"
          style={{ background: "#0f0f11" }}
        >
          <div className="flex justify-center gap-2 md:justify-start">
            <Link
              href={ROUTES.HOME}
              className="font-semibold uppercase m-7"
              style={{ fontSize: 14 }}
            >
              {seo.name}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">{children}</div>
    </div>
  );
}
