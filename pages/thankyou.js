import Head from 'next/head';
import Link from 'next/link';
import styles from './ThankYou.module.css';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You - RayCharge</title>
        <meta name="description" content="Thank you for your purchase!" />
      </Head>

      <main className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Thank You! 🎉</h1>
          <p className={styles.message}>
            Your order has been received. We appreciate your support and hope you enjoy using RayCharge — the future of sustainable power!
          </p>
          <Link href="/">
            <button className={styles.button}>Go Back Home</button>
          </Link>
        </div>
      </main>
    </>
  );
}
