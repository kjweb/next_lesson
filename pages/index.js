import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  const photoEx = "写真展"
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
      <Image src={`/img/photo_ex.JPG`} width={600} height={400} alt={photoEx} />
      <Image src="/img/photo_ex.JPG" width={600} height={400} alt="photoEx" placeholder="blur" />
    </div>

    </>
  )
}

export default Home
