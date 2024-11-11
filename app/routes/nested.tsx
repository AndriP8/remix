import { Link, Outlet } from '@remix-run/react';

export default function NestedRoot() {
  return (
    <>
      <header style={{ display: 'flex', gap: '1rem' }}>
        <Link to="with-layout">With Layout</Link>
        <Link to="without-layout">Without Layout</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
