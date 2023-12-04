const dataNav = {
    home: "Home",
    about: "About",
    skill: "Skill",
    porto: "Portofolio",
    contact: "Contact"
}

const Navbar = () => {
    return (
        <div className="py-4 container px-4 mx-auto flex items-center justify-between">
            <div className='font-bold text-[18px] p-2'>
                Geofanyher{" "}
                <span className='text-white bg-black tracking-widest'>
                    .dev
                </span>
            </div>
            <div className="hidden lg:block ">
                <ul className="flex justify-center gap-16">
                    <li className="font-semibold hover:text-white hover:duration-700 transition hover:bg-black p-2 text-sm">
                        <a href="#home"> {dataNav.home} </a>
                    </li>
                    <li className="font-semibold hover:text-white hover:duration-700 transition hover:bg-black p-2 text-sm">
                        <a href="#about"> {dataNav.about} </a>
                    </li>
                    <li className="font-semibold hover:text-white hover:duration-700 transition hover:bg-black p-2 text-sm">
                        <a href="#porto"> {dataNav.porto}</a>
                    </li>
                    <li className="font-semibold hover:text-white hover:duration-700 transition hover:bg-black p-2 text-sm">
                        <a href="#contact"> {dataNav.contact}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar