import {
  cn
} from "@/lib/utils";
import {
  motion
} from "framer-motion";
import {
  LucideIcon
} from "lucide-react"

export default function Button({
  children,
  className,
  onClick,
  outline,
  href,
  Icon,
  type
}: {
  children: React.ReactNode;
  Icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  outline?:boolean,
  href?:string,
  type?:"button" | "submit" | "reset" | undefined
}) {
  return href ?
  (<motion.a
    href={href}
    className={cn(
      "relative py-2 px-8 shadow-xl rounded-2xl flex items-center transition-all duration-300 shadow-background/[0.6] font-medium uppercase flex items-center gap-3 justify-between",
      className,
      outline ? "text-foreground border-primary border bg-transparent": "g3 text-white"
    )}

    whileHover={ { scale: 1.05 }}
    whileTap={ { scale: 0.95 }}
    >

    {children}
  </motion.a>):
  (<motion.button
    onClick={onClick}
    whileHover={ { scale: 1.05 }}
    whileTap={ { scale: 0.95 }}
    type={type}
    className={cn(
      "relative py-2 px-8 shadow-xl rounded-2xl flex items-center transition-all duration-300 shadow-background/[0.6] font-medium uppercase flex items-center gap-3 justify-between",
      className,
      outline ? "text-foreground border-border border bg-transparent": "g3 text-white"
    )}
    >

    {Icon && <Icon />}

    <p>
      {children}
    </p>

  </motion.button>

  );
}