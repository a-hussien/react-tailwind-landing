import { HiOutlineMail } from "react-icons/hi"

const NewsLetter = () => {
  return (
    <div className="text-center pb-9">
      <h1 className="text-2xl font-semibold md:w-1/2 md:mx-auto leading-normal">
        Subscribe to Our NewsLetter For Weekly Update.
      </h1>
      <p className="md:w-1/2 md:mx-auto pt-5 text-sm text-gray-600 leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tenetur hic iusto esse, est culpa cumque. Necessitatibus molestiae esse facere nobis vero! Corporis aliquid dolore hic.
      </p>
      <div className="flex flex-wrap justify-center md:w-2/4 md:mx-auto my-6 gap-2 items-center">
        <div className="flex-1 flex rounded-full items-center gap-2 px-5 md:w-2/5 md:mx-auto justify-center border border-primary my-4">
            <HiOutlineMail className="h-5 text-primary" />
            <input
                type="email"
                placeholder="Enter Your e-mail address"
                className="bg-transparent flex-1 outline-none text-sm py-3 placeholder-primary"
            />
        </div>
        <div>
            <button
            className="bg-primary text-white rounded-full shadow-sm
            shadow-primary font-semibold md:text-sm text-xs tracking-wide md:px-9 px-7 py-3"
            >
            Subscribe
            </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter