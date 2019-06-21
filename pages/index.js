import Link from 'next/link';
import Header from '../components/header';

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <h3>This will be a facking nice dashboard Youri</h3>
      </section>
    </main>
  );
}

export default Index;
