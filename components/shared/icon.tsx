import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Facebook,
  FileCheck2,
  FileText,
  FolderCheck,
  Globe,
  Handshake,
  IndianRupee,
  Instagram,
  Landmark,
  LifeBuoy,
  LineChart,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessagesSquare,
  Percent,
  Phone,
  PhoneCall,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Twitter,
  UtensilsCrossed,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Central icon registry. Referencing icons by name (a string) keeps our data
 * files (lib/services.ts, lib/content.ts) free of React imports and makes the
 * icon set explicit and tree-shakeable.
 *
 * To use a new icon: import it from lucide-react above and add it here.
 */
export const iconMap = {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Facebook,
  FileCheck2,
  FileText,
  FolderCheck,
  Globe,
  Handshake,
  IndianRupee,
  Instagram,
  Landmark,
  LifeBuoy,
  LineChart,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessagesSquare,
  Percent,
  Phone,
  PhoneCall,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Twitter,
  UtensilsCrossed,
  Users,
  X,
  Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  "aria-label"?: string;
};

/**
 * Render a registered icon by name. Decorative by default (aria-hidden);
 * pass an aria-label to expose it to assistive tech.
 */
export function Icon({
  name,
  className,
  strokeWidth = 1.75,
  "aria-label": ariaLabel,
}: IconProps) {
  const Cmp = iconMap[name];
  return (
    <Cmp
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    />
  );
}
