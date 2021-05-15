import RandomVacancy from '../components/RandomVacancy'
import VacancySearchField from '../components/SpecialistSearchField'
import AsideFilter from '../components/AsideFilterSpecialist'
import Footer from '../components/Footer'
export default function Vacancy() {
  return (

    <div className="bg-gray-200">
    <div className=" container mx-auto flex justify-center">
      <div className="max-w-screen-lg">
        <div className="container w-full">
          <RandomVacancy />
        </div>

        <div className="container w-full flex">
          <div className="w-full">
           <VacancySearchField />
            </div>
            <AsideFilter />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
