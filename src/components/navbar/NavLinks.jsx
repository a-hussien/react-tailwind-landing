import { Link } from 'react-router-dom'

const NavLinks = () => {
  const navigations = [
    {
      name: "Link1",
      link: "/",
    },
    {
      name: "Link2",
      link: "/",
    },
    {
      name: "Link3",
      link: "/",
    },
    {
      name: "Link4",
      link: "/",
    },
  ];

  return (
    <>
      {navigations.map((navigation, i) => (
        <li key={i} className="font-semibold text-slate-700 hover:text-cyan-500">
          <Link to={navigation.link}>{navigation.name}</Link>
        </li>
      ))}
    </>
  )
}

export default NavLinks