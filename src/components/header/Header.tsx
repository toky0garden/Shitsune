import Link from "next/link";
import { Menu } from "./Menu";
import { MenuRight } from "./MenuRight";
import { ROUTES, seo, STYLES } from "@/constants";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header
      className="border-b border-white/10 px-6 py-4 flex items-center justify-between"
      style={{ fontSize: 16 }}
    >
      <Link
        href={ROUTES.HOME}
        className={`${cn(buttonVariants({ variant: "ghost" }))} ${STYLES.HeaderLink.LINK_MENU}`}
      >
        <Image
          src={"/Subtract.svg"}
          alt={"logo"}
          width={20}
          height={20}
          priority
        />
        <h4 className="text-sm uppercase">{seo.name}</h4>
      </Link>

      <Menu />

      <MenuRight />
    </header>
  );
}
