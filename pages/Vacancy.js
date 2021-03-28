import RandomVacancy from '../components/RandomVacancy'
import VacancySearchField from '../components/SpecialistSearchField'
import AsideFilter from '../components/AsideFilter'
import Specialists from '../components/Specialists'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Vacancy() {
  return (

      <div className="max-w-screen-lg">
        <Header/>

        <div className="container w-full flex">
        <div className="w-full">
          <VacancySearchField/>
          
          <Specialists/>
        </div>
          <AsideFilter/>
          
        </div>
      <div>
        <Footer/>
      </div>
      </div>
  
    // <div className="min-h-screen min-w-full bg-gray-200 flex items-center flex-col">
    //   <RandomVacancy/>
    // </div>
  )
}
//"flex justify-center w-full  my-2"