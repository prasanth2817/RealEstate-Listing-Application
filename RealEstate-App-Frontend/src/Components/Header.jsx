
const Navbar = () => {

  return (
    <header
      className={`fixed top-0 h-16 sm:h-20 md:h-24 lg-xl:h-20 w-full`}
    >
      <div className="container mx-auto h-16 lg-xl:h-20 md:mx-4 md:w-full flex sm:mx-0 2xl:mx-4 md:h-24 items-center justify-between md:justify-evenly lg-xl:mx-auto lg:gap-8 lg-xl:gap-16 lg-xl:px-4 2xl:justify-between">
        {/* Logo and Mobile Menu Toggle */}
        <div
          className={`order-1  hover:text-gray-400 flex justify-start items-center text-2xl lg-xl:text-xl font-bold`}
        >
          <span className="hidden lg-xl:block xl:block ml-2">Prasanth.Dev</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
