export default function SpecialistSearchField(){
    return(
        <div className=" flex container w-full mt-5">
  <div className="w-full mr-3 p-5 ">
    <div className="flex justify-between mb-3">
      <div>
        <h1 className="text-3xl font-bold">Specialists</h1>
      </div>
      <div className="flex">
        
      </div>
    </div>
    <hr/>
    <div className="mt-3 flex ">
      <div className="flex flex-row w-8/12 mr-4 relative ">
        <input type="text" placeholder="Search" className="p-2 rounded w-full bg-gray-300 placeholder-gray-700 focus:bg-white border outline-none focus:border-gray-500 "/>
        <button className="absolute top-2 right-2 w-6 text-gray-500 focus:outline-none hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>       
      </div>
      <div className="flex flex-row w-4/12 ">
        <select className="p-2 bg-gray-300 w-full rounded focus:bg-white border outline-none focus:border-gray-500">
          <option>By matching</option>
          <option>By date of visit</option>
          <option>Descending salary</option>
          <option>Ascending salary</option>
        </select>
      </div>
    </div>
    <br/>
    <div className="flex flex-row w-4/12 ">
        <select className="p-2 bg-white w-full rounded focus:bg-white border outline-none focus:border-gray-500">
          <option type="checkbox">Search everywhere</option>
          <option>in the name</option>
          <option>in specialization</option>
          <option>in posts</option>
          <option>in profile skills</option>
          <option>in community skills</option>
        </select>
      </div>
    <div className="mt-4">
      <p className="text-lg">Found 203 447 specialists</p>
    </div>
  </div>
</div>
)
}