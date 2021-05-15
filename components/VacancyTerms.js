export default function VacancyTerms() {
  return (
    <div className="w-full flex p-5  bg-white rounded">
      <div className="vacancy__info w-9/12 ml-3">
        <div className="vacancy__info__name">
          <h1 className="font-bold text-xl text-gray-800 hover:underline my-1">
            <a href="#">Frontend-developer (Reaсt)</a>
          </h1>
        </div>
        <div className="vacancy__info__employmentType text-base"> {/* компенсация */}
          <p className="text-gray-400">Compensation</p>
          <span className="text-gray-700">From 200 000 ₽</span>
        </div>
        <div className="vacancy__info__filter">
          <p className="text-gray-400">Skills</p> {/* навыки */}
          <span className="text-gray-700 hover:underline"><a href="#">Frontend</a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#"> Java </a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#">PHP</a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#">Vue.js</a></span>
        </div>
        <div className="vacancy__info__filter">
          <p className="text-gray-400">Level</p>
          <span className="text-gray-700 hover:underline"><a href="#">Senior</a></span>
        </div>
        <div className="vacancy__info__filter">
          <p className="text-gray-400">Location and type of employment</p>
          <span className="text-gray-700 hover:underline"><a href="#">Full time work</a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#"> You can remotely</a></span>
        </div>
      </div>
      <div className="vacancy__date ml-6">
        <p className="text-gray-400">31 March</p>
      </div>
    </div>
  )
}