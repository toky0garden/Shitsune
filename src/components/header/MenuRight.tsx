import { ROUTES, STYLES } from "@/constants";
import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function MenuRight() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href={ROUTES.LOGIN}
        prefetch
        className={`${cn(buttonVariants({ variant: "ghost" }))} ${STYLES.HeaderLink.LINK_MENU}`}
      >
        <UserIcon className="size-4" />
      </Link>
    </div>
  );
}
