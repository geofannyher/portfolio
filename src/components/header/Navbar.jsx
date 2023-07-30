const dataNav = {
    home: "Home",
    about: "About",
    skill: "Skill",
    porto: "Portofolio",
    contact: "Contact"
}
const Navbar = () => {
    return (
        <div className=''>
            <div className="py-4 container mx-auto flex justify-between">
                <div className='font-bold text-[18px]'>
                    Geofanyher
                    <span className=''>
                        .dev
                    </span>
                </div>
                <div className="hidden lg:block">
                    <ul className="flex justify-center gap-16">
                        <li className="font-semibold hover:text-main text-sm">
                            <a href="#home"> {dataNav.home} </a>
                        </li>
                        <li className="font-semibold hover:text-main text-sm">
                            <a href="#about"> {dataNav.about} </a>
                        </li>
                        <li className="font-semibold hover:text-main text-sm">
                            <a href="#porto"> {dataNav.porto}</a>
                        </li>
                        <li className="font-semibold hover:text-main text-sm">
                            <a href="#contact"> {dataNav.contact}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar