'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <div>
      <label htmlFor="search">
        Search
      </label>
      <input
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon />
    </div>
  );
}
