// pages/api/header.ts - Parent server component for Header
import HeaderLink from './HeaderLink';

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="py-0 px-12">
      <nav className="flex justify-center items-center max-w-sm mx-auto  py-10">
        {children}
      </nav>
    </header>
  );
}

Header.Link = HeaderLink; // Export HeaderLink as a property of Header
