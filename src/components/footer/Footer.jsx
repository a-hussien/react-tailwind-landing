import NewsLetter from './NewsLetter'
import Logo from '../../assets/logo.png'
import Socials from './Socials'

const Footer = () => {

  const Links = [
    { title: "Location", links: ["America", "Africa", "Asia", "Eurpoe"] },
    { title: "Contact", links: ["About Us", "Teams", "Profile", "FAQ"] },
    { title: "Legals", links: ["Company", "Privacy", "Terms and Conditions"] },
  ];

  return (
    <footer className="pt-20 md:px-24 px-4 bg-lightprimary">
      <NewsLetter />
      <div className="flex md:flex-row flex-col gap-20">
        <div className="flex-1">
          <img src={Logo} alt="logo" className="h-28 -translate-x-8 w-auto" />
          <p className="md:w-1/2 leading-relaxed text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tenetur hic iusto esse.
          </p>
          <Socials />
        </div>
        <div className="flex-1 flex flex-wrap gap-20">
          {Links.map((link, i) => (
            <ul key={i}>
              <h1 className="font-semibold pb-3">{link.title}</h1>
              {link.links.map((item, index) => (
                <li key={index} className="py-2.5 text-sm text-slate-600">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="text-center py-10 mt-6 text-sm text-slate-600">
        Copyright © 2023. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer