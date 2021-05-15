import RandomVacancy from '../components/RandomVacancy'
import VacancySearchField from '../components/VacancySearchField'
import AsideFilter from '../components/AsideFilter'
import EmployerOfMonth from '../components/EmployerOfMonth'
import Header from '../components/Header'
export default function Vacancy() {
  return (
    <div className="bg-gray-200">
      <div className=" container mx-auto w-9/12 flex justify-center">
        <div className="max-w-screen-lg">
          <Header />
          <div className="container mx-auto">
            <RandomVacancy />
         </div>

          <div className="container w-12/12 flex">
            <VacancySearchField />
            <div className="">
              <AsideFilter />
              <EmployerOfMonth />

            </div>

          </div>
        </div>
      </div>
    </div>
    // <div className="min-h-screen min-w-full bg-gray-200 flex items-center flex-col">
    //   <RandomVacancy/>
    // </div>
  )
}
//"flex justify-center w-full  my-2"