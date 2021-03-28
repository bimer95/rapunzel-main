export default function AsideFilter(){
    return(
        <div className="flex container w-3/12 max-w-full p-3 border">
            <div className="w-full">
                <div className="fieldOfActivity">
                    <div className="fieldOfActivity__header">
                        <h1 className="font-bold text-gray-800">Field of activity</h1>
                    </div>
                    <div className="fieldOfActivity__checkboxes mt-3">
                        <div className="">
                            <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                            <label>Frontend</label>
                        </div>
                        <div>
                            <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                            <label>Backend</label>    
                        </div>        

                        <div>
                            <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                            <label>Applications</label>    
                        </div> 

                        <div>
                            <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                            <label>Software development</label>    
                        </div> 
                        <div>
                            <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                            <label>Testing</label>    
                        </div> 

                        <div className="">
                            <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                            <label className="">Administration</label>    
                        </div> 

                       
                        <div>
                            <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                            <label>More</label>    
                        </div> 

                        
                    </div>
                    <div className="btnMore mt-2">
                        <button className="p-1 border font-semibold text-sm w-20 rounded border-gray-400 bg-gray-100">Ещё 12</button>
                    </div>
                </div>
                <div className="qualification mt-5">
                    <div className="qualification__header ">
                        <h1 className="font-bold text-gray-800">Qualification
</h1>
                    </div>
                    <div className="qualification__select w-full">
                        <select className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                            <option>Any</option>
                            <option>Intern</option>
                            <option>Junior</option>
                            <option>Middle</option>
                            <option>Senior</option>
                            <option>Lead</option>
                        </select>
                    </div>
                </div>
                <div className="professionalSkills mt-5">
                    <div className="professionalSkills__header">
                        <h1 className="font-bold text-gray-800">Professional skills</h1>
                    </div>
                    <div className="professionalSkills__drop">
                        <input className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="For example, JavaScript"/>
                    </div>
                </div>
              
                <div className="salary mt-5">
                    <div className="salary__header">
                        <h1 className="font-bold text-gray-800">Reward</h1>
                    </div>
                    <div className="salary__amount w-full mt-3 flex gap-2">
                        <input className="w-3/4 p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="From"/>
                        <select className="w-1/4 p-2  bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500">
                            <option>₽</option>
                            <option>€</option>
                            <option>$</option>
                            <option>₴</option>
                            <option>₸</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <input type="checkbox" className="transform scale-125 m-1"/>&nbsp;
                        <label>Before</label>
                    </div>
                </div>
                <div className="location mt-5">
                    <div className="location__header">
                        <h1 className="font-bold text-gray-800">Location</h1>
                    </div>
                    <div className="location__city w-full">
                        <input className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="City"/>
                    </div>
                </div>
                <div className="employmentType mt-5">
                    
                   
                    
                </div>
                <div className="company mt-5">
                    <div className="company__header">
                        <h1 className="font-bold text-gray-800">Company</h1>
                    </div>
                    <div className="location__city w-full">
                        <input className="w-full p-2 mt-3 bg-gray-200 rounded focus:bg-white border outline-none focus:border-gray-500" placeholder="For example, Habr"/>
                    </div>
                </div>
            </div>
        </div>
    )
}