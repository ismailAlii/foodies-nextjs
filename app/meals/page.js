import Link from 'next/link';

function MealsPage() {
  return (
    <main style={{ color: 'white', textAlign: 'center' }}>
      <h1>Meals Page</h1>
      <p>
        <Link href='/meals/meal1'>Meal 1</Link>
      </p>
      <p>
        <Link href='/meals/meal2'>Meal 2</Link>
      </p>
      <p>
        <Link href='/meals/meal3'>Meal 3</Link>
      </p>

      <hr />
      <p>
        <Link href='/meals/share'>Share</Link>
      </p>
      <p>
        <Link href='/'>back</Link>
      </p>
    </main>
  );
}

export default MealsPage;
