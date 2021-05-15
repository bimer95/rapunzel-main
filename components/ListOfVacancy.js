export default function ListOfVacancy() {
  return (
    <div className="w-full flex p-5 mt-3 bg-white rounded">
      <div className="vacancy__logo w-1/12">
        <a href="#"><img src="1.png"></img></a>
      </div>
      <div className="vacancy__info w-9/12 ml-3">
        <div className="vacancy__info__company">
          <p className="hover:underline"><a href="#">Hicaliber</a></p>
        </div>
        <div className="vacancy__info__name">
          <h1 className="font-bold text-xl text-gray-800 hover:underline my-1">
            <a href="#">Senior Full Stack Developer (Laravel + Vue.js) (Remote)</a>
          </h1>
        </div>
        <div className="vacancy__info__employmentType text-base">
          <span className="text-gray-700">Полный рабочий день</span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700">Можно удалённо</span>
        </div>
        <div className="vacancy__info__salary mb-3">
          <p className="text-green-500 font-bold">от 227 600 до 273 900 ₽</p>
        </div>
        <div className="vacancy__info__filter">
          <span className="text-gray-700 hover:underline"><a href="#">Разработка ПО</a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#">Старший(Senior)</a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#">Laravel</a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#">PHP</a></span>
          <span className="mx-1 ">&#8226;</span>
          <span className="text-gray-700 hover:underline"><a href="#">Vue.js</a></span>
        </div>
      </div>
      <div className="vacancy__date ml-6">
        <p className="text-gray-400">18 марта</p>
      </div>
    </div>
  )
}