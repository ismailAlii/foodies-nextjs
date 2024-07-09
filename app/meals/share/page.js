import Link from 'next/link';

function SharePage() {
  return (
    <main style={{ color: 'white', textAlign: 'center' }}>
      <h1>Meals Share</h1>
      <p>
        <Link href='/meals'>back to meals</Link>
      </p>
    </main>
  );
}

export default SharePage;
