
function Header() {
  return (
    <header
      className={`fixed bg-slate-900 bg-opacity-70 top-0 h-16 sm:h-20 md:h-24 lg-xl:h-20 w-full`}
    >
     <h1 className="relative ml-8 text-2xl font-mono top-4">Property</h1>
     {/* <button className="w-1/12 p-2 text-center hover:divide-teal-500 bg-blue-500 text-white rounded">
      Create
     </button> */}
    </header>
  )
}

export default Header
