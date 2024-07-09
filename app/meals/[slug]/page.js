import Link from 'next/link';

function MealDetailPage({ params }) {
  const { slug } = params;
  return (
    <main style={{ color: 'white', textAlign: 'center' }}>
      <h1>Meal {slug}</h1>
      <Link href='/meals'>Back to Meals</Link>
    </main>
  );
}

export default MealDetailPage;
