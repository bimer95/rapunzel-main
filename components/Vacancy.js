import RandomVacancy from '../components/RandomVacancy'
import VacancySearchField from '../components/VacancySearchField'
import AsideFilter from '../components/AsideFilter'
import ListOfVacancy from '../components/ListOfVacancy'
import CompanyVacansies from '../components/CompanyVacancies'
import Journal from '../components/Journal'
import EmployerOfMonth from '../components/EmployerOfMonth'
export default function Vacancy() {
  return (
    <div className="bg-gray-200">
      <div className=" container mx-auto flex justify-center">
        <div className="max-w-screen-lg">
          <div className="container w-full">
            <RandomVacancy />
          </div>

          <div className="container w-full flex">
            <VacancySearchField />
            <div className="">
              <AsideFilter />
              <EmployerOfMonth />
              <CompanyVacansies />
              <Journal />
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