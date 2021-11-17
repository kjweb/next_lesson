import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <>
    <Head>
     <title>テストページです</title>
    </Head>
    <div>
      <h1>テスト</h1>
      <p>テストテストテストテストテストテストテストテストテスト</p>
      <h2>テスト</h2>
      <p>テストテストテストテストテストテストテストテストテストテスト</p>
      <Image src={`/img/photo_ex.JPG`} width={600} height={400} alt={`写真展`} />
    </div>

    </>
  )
}

export default Home
