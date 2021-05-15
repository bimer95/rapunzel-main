export default function Footer() {
    return (
        <div className="container w-full bg-white">
            <div className="flex space-x-12 flex space y-8 max-w-full p-5 border left 145px ">
                <div className="space-y-4 ">
                    <h1 className="text-xl font-bold  ">Habr Career</h1>
                    <p>Services and prices</p>
                    <p>Magazine</p>
                    <p>Job Direcory</p>
                    <p>Contacts</p>
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl font-bold ">Help</h1>
                    <p>For the applicant</p>
                    <p>For the employer</p>
                    <p>Service API</p>
                    <p>Support service</p>
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl font-bold ">Documents</h1>
                    <p>User Agreement</p>
                    <p>Service rules</p>
                    <p>Our partners</p>
                </div>
                <div className="flexbox pl-40 ">
                    <p className="text-xl font-bold ">Follow us on social networks</p>
                    <figure>
                        <div className="flex space-x-4 w-8 h-8 mx-0 ">{/* Соцсети */}
                            <img src="face.png " alt="Соцсети" />
                            <img src="gith.png" alt="Соцсети" />
                            <img src="inst.png" alt="Соцсети" />
                            <img src="telegram.png" alt="Соцсети" />
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}