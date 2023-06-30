import { HomeComponent } from '@/modules/Home'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Hello 🖖</title>
      </Head>
      <HomeComponent/>
    </div>
  )
}
