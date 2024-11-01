import resume from "../../assets/M_Geofany_Hermawan_CV.pdf";
import social from "../../assets/github.svg";
import link from "../../assets/link.svg";
import reactt from "../../assets/reactt.svg";
import js from "../../assets/js.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import type from "../../assets/type.svg";
import laptop from "../../assets/laptop.jpg";
import me from "../../assets/me2.png";
import { dataMe, projects } from "../../Data/Data";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <section id="home" className="container mx-auto px-2">
        <div className="grid grid-cols-4 text-black min-h-screen">
          <div className="flex items-center col-span-4 lg:col-span-2 order-1 ">
            <div className="text-[40px] font-bold mb-20">
              <h1>{dataMe.hello}</h1>
              <h1 className="">{dataMe.hello2}</h1>
              <p className="text-base font-semibold py-4">{dataMe.tag}</p>
              <div className="flex gap-4 my-3">
                <a href="https://github.com/geofannyher" target="_blank">
                  <img className="w-9" src={social} alt="" />
                </a>
                <a href="https://github.com/geofannyher" target="_blank">
                  <img className="w-9" src={link} alt="" />
                </a>
              </div>
              <div className="flex gap-2 py-2 items-center justify-center lg:justify-start">
                <a
                  href={resume}
                  download="resume"
                  className="p-4 border-black hover:bg-black hover:border-white hover:text-white transition duration-700 w-full text-sm justify-center flex cursor-pointer border md:w-2/5 lg:w-2/5"
                >
                  Download CV
                </a>
              </div>
              <div className="flex gap-4 items-center mt-10">
                <h1 className="text-[17px]">Tech Stack</h1>
                <h1 className="text-[17px]">|</h1>
                <ul className="flex gap-4">
                  <li className="rounded-full hover:scale-110 transition duration-500 shadow-lg p-2">
                    <img className="w-7" src={html} alt="" />
                  </li>
                  <li className="rounded-full hover:scale-110 transition duration-500 shadow-lg p-2">
                    <img className="w-7" src={css} alt="" />
                  </li>
                  <li className="rounded-full hover:scale-110 transition duration-500 shadow-lg p-2">
                    <img className="w-7" src={js} alt="" />
                  </li>
                  <li className="rounded-full hover:scale-110 transition duration-500 shadow-lg p-2">
                    <img className="w-7" src={type} alt="" />
                  </li>
                  <li className="rounded-full hover:scale-110 transition duration-500 shadow-lg p-2">
                    <img className="w-7" src={reactt} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:hidden lg:flex items-center justify-center col-span-2 order-2 hidden">
            <div className="mb-52 ml-40">
              <img
                src={me}
                className="rounded-full border-8 border-gray-800 shadow-lg w-3/5 animate-spin-slow profile-picture"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <section
          id="about"
          className="container mx-auto px-4 pt-20 min-h-screen "
        >
          <div className="flex flex-col my-2 text-center lg:text-start md:text-start">
            <h1 className="font-bold text-[40px] ">About Me</h1>
            <h1 className="font-semibold text-gray-500 text-sm">
              A dedicated Front-end Developer based in Indonesia
            </h1>
          </div>
          <div className="grid grid-cols-6 text-[#767676] text-[18px] ">
            <div className="col-span-3 hidden md:block lg:block">
              <img src={laptop} className="w-72 rounded-lg" alt="" />
            </div>
            <div className="col-span-6 lg:col-span-3 md:col-span-3">
              <div className="flex flex-wrap gap-5 my-4 justify-center items-center">
                <div className="border w-full shadow-sm rounded-md">
                  <div className="flex flex-col items-center p-5">
                    <box-icon name="briefcase-alt"></box-icon>
                    <h1 className=" m-4 text-sm text-black font-semibold">
                      Completed
                    </h1>
                    <h1 className="text-sm text-gray-500 font-semibold">
                      5 + Project
                    </h1>
                  </div>
                </div>
                <div className="border w-full  shadow-sm rounded-md">
                  <div className="flex flex-col items-center p-5">
                    <box-icon name="support"></box-icon>
                    <h1 className=" m-4 text-sm text-black font-semibold">
                      Support
                    </h1>
                    <h1 className="text-sm text-gray-500 font-semibold">
                      Onlinex 24 / 7
                    </h1>
                  </div>
                </div>
                <div className="border w-full  shadow-sm rounded-md">
                  <div className="flex flex-col items-center p-5">
                    <box-icon name="award"></box-icon>
                    <h1 className=" m-4 text-sm text-black font-semibold">
                      Experience
                    </h1>
                    <h1 className="text-sm text-gray-500 font-semibold">
                      2 Years
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[14px] ">
                  As a Junior Front-End Developer, I possess an impressive
                  arsenal of skills in HTML, CSS, JavaScript, React, Tailwind,
                  and SCSS. I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic, engaging interfaces through writing
                  clean and optimized code and utilizing cutting-edge
                  development tools and techniques. I am also a team player who
                  thrives in collaborating with cross-functional teams to
                  produce outstanding web applications.
                </p>
              </div>
              <div className="text-black py-4 font-semibold ">
                <button
                  href={resume}
                  download="resume"
                  className="p-4 w-full hover:bg-black hover:border-white hover:text-white transition duration-700 border-black text-sm justify-center flex cursor-pointer border"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>

      <section
        id="porto"
        className="container mx-auto px-4 py-20 min-h-screen items-center"
      >
        <div className="flex flex-col">
          <h1 className="font-bold  text-[40px]">Portfolio</h1>
          <h1 className="font-semibold text-sm text-gray-600">
            Most recent work
          </h1>
          <hr className="w-20 h-8" />
        </div>
        <div className="flex flex-wrap  gap-10">
          {projects.map((item, index) => {
            return (
              <div key={index} className="rounded-md w-full border p-4">
                <div className="flex flex-col">
                  <img src={dataMe.img} className="w-40" alt="" />
                  <h1 className="py-2 font-bold">{item?.name}</h1>
                  <p className="text-sm font-semibold text-gray-600">
                    {item?.description}
                  </p>
                  <div className="flex gap-4 py-2 flex-wrap">
                    {item?.tools?.name.map((item, index) => (
                      <div
                        key={index}
                        className="border shadow-md p-2 font-semibold text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 py-4">
                    <div className="px-4 py-2 border-black border-2 shadow-md transition duration-700 hover:bg-black hover:text-white cursor-pointer">
                      <Link to={item?.path[0]}>
                        <button>
                          <h1 className="font-semibold text-sm flex items-center">
                            Source Github
                            <box-icon name="right-arrow-alt"></box-icon>
                          </h1>
                        </button>
                      </Link>
                    </div>
                    {item?.path[1] && (
                      <div className="px-4 py-2 border-black border-2 shadow-md transition duration-700 hover:bg-black hover:text-white cursor-pointer">
                        <Link to={item?.path[1]}>
                          <button>
                            <h1 className="font-semibold text-sm flex items-center">
                              Live Demo
                              <box-icon name="right-arrow-alt"></box-icon>
                            </h1>
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Content;
