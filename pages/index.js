import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={"/Vacancy/"}><a>Vacancy</a></Link>
      <p></p>
      <Link href={"/EmployerPage/"}><a>EmployerPage</a></Link>
      <p></p>
      <Link href={"/VacancyExample/"}><a>VacancyExample</a></Link>
    </div>
  )
}
