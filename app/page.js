// app/page.js

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function HomePage() {
  return (
    <div>
      <Map />
    </div>
  );
}
