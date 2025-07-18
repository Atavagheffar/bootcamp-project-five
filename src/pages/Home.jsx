import CategorySection from "../components/CategorySection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewProductSection from "../components/NewProductSection";
import ProductOnSaleSection from "../components/ProductsOnSaleSection";
import TopProductSection from "../components/TopProductSection";

export default function Home() {
  return (
    <div className="m-auto p-0 w-full h-[100dvh] ">
      {/* <h2>ata2</h2> */}
      <Header />
      <Hero />
      <CategorySection />
      <ProductOnSaleSection />
      <NewProductSection />
      <TopProductSection />
    </div>
  );
}
