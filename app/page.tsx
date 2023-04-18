import FeaturedProducts from "~/components/home/FeaturedProducts";
import Hero from "~/components/home/Hero";
import Upcoming from "~/components/home/Upcoming";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <FeaturedProducts />
      <Upcoming />
    </section>
  );
}
