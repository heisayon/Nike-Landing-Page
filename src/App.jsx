import Navbar from "./components/Navbar";
import ShoeShowcase from "./components/ShoeShowcase";
import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
  Subscribe,
} from "./sections";

function App() {
  return (
    <div className="font-Montserrat relative max-w-[1660px] m-auto">
      <nav className="px-40 py-3 max-2xl:px-8 m-auto z-50">
        <Navbar />
      </nav>
      <main>
        <div className="2xl:flex 2xl:justify-between 2xl:items-center max-2xl:block 2xl:pr-16 min-h-[100vh]">
          <section>
            <Hero />
          </section>
          <section className="2xl:absolute 2xl:top-0 2xl:left-[49%] 2xl:right-0 -z-10">
            <ShoeShowcase />
          </section>
        </div>
        <section className="px-40 py-3 max-2xl:px-8 m-auto">
          <PopularProducts />
          <SuperQuality />
          <Services />
          <SpecialOffer />
        </section>
        <section>
          <CustomerReview />
          <Subscribe />
          <footer>
            <Footer />
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
