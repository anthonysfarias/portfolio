import { SafeLink } from "./SafeLink";
import { socials } from "@/data/socials";
import { getIcon } from "@/lib/icons";

type SocialIconListProps = {
  className: string;
  /** The hero and the footer share this list and differ only in link styling. */
  linkClassName: string;
};

export function SocialIconList({ className, linkClassName }: SocialIconListProps) {
  return (
    <ul className={className}>
      {socials.map((social) => {
        const Icon = getIcon(social.icon);
        return (
          <li key={social.id}>
            <SafeLink href={social.url} aria-label={social.name} className={linkClassName}>
              <Icon aria-hidden className="size-4" />
            </SafeLink>
          </li>
        );
      })}
    </ul>
  );
}
