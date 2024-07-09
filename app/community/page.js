import Link from 'next/link';

function CommunityPage() {
  return (
    <main style={{ color: 'white', textAlign: 'center' }}>
      <h1>Community Page</h1>
      <p>
        <Link href='/'>Back</Link>
      </p>
    </main>
  );
}

export default CommunityPage;
