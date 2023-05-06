import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"

const Socials = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5 text-slate-600">
        <BsFacebook className="h-7 w-8 cursor-pointer hover:scale-110 hover:text-primary duration-300" />
        <AiFillTwitterCircle className="h-8 w-8 cursor-pointer hover:scale-110 hover:text-cyan-500 duration-300"/>
        <AiFillInstagram className="h-8 w-8 cursor-pointer hover:scale-110 hover:text-violet-500 duration-300"/>
    </div>
  );
};

export default Socials