// pages/api/headerLink.ts - Child server component for HeaderLink
interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <a className="text-xl block mx-10 border-b-2 border-white" href={href}>{children}</a>
  );
}
