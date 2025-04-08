import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>RayCharge - Solar-Powered Phone Case</title>
        <meta name="description" content="Stay charged anywhere with RayCharge" />
      </Head>

      <main className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>RayCharge ⚡</h1>
          <p className={styles.description}>
            A smart, solar-powered phone case that charges your device using clean, renewable energy.
            Stay powered on-the-go — sustainably and stylishly.
          </p>

          <img
            src="/solar-case.jpg"
            alt="Solar Phone Case"
            className={styles.image}
          />

          <ul className={styles.features}>
            <li>🔋 Fast solar charging technology</li>
            <li>🌞 Works even in low sunlight</li>
            <li>🌱 Eco-friendly and energy-efficient</li>
            <li>📱 Compatible with all major smartphones</li>
            <li>🛡️ Sleek, durable, and protective design</li>
          </ul>

          <Link href="/thankyou">
            <button className={styles.button}>Buy Now @ ₹1000</button>
          </Link>

          <div className={styles.contact}>
            <h3>📞 Contact Us</h3>
            <p>Email: support@raycharge.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </main>
    </>
  );
}
