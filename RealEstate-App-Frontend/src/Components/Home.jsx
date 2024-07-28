import PropertyList from "./PropertyList";
import PropertySearch from "./PropertySearch";

function Home() {
  return (
    <section>
      <div className="" id="home">
        <PropertySearch />
      </div>
      <div>
        <PropertyList />
      </div>
    </section>
  );
}

export default Home;
