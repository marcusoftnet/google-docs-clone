import Head from 'next/head';
import Header from '../components/Header';
import MyDocuments from '../components/MyDocuments';
import NewDocument from '../components/NewDocument';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Doc Clone by Marcusoft.Net</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <NewDocument />

      <MyDocuments />
    </div>
  );
}
