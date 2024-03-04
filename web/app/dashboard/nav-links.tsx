'use client';
import { HomeIcon, DocumentDuplicateIcon, UserGroupIcon, PowerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box } from '@chakra-ui/react';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Profile', href: '/dashboard/profile', icon: DocumentDuplicateIcon },
  { name: 'Participation', href: '/dashboard/participation', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size='md'>Wisdom</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="1em">
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  passHref
                >
                  <div
                    className={clsx(
                      'flex items-center gap-2 p-2 rounded-md transition-colors duration-200',
                      {
                        'bg-gray-200': pathname === link.href,
                        'hover:bg-gray-200': pathname !== link.href,
                      },
                    )}
                    style={{ margin: '0 0 1em 0' }} // Add margin-bottom of 2em to separate the links
                  >
                    <LinkIcon style={{ width: '1.5rem', height: '1.5rem' }} /> {/* Adjust the width and height as needed */}
                    <p className="hidden md:block text-sm">{link.name}</p>
                  </div>
                </Link>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
