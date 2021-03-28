import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={"/Vacancy/"}><a>Vacancy</a></Link>
      <Link href={"/Specialist/"}><a>Specialist</a></Link>
    </div>
  )
}
