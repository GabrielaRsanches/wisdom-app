import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div>
      <Link
        href="/"
      >
      </Link>
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
