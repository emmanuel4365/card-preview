import Image from "next/image";
import perfumeImage from "@/app/_assets/images/perfume-pic.png";
// import { BsCart3 } from "react-icons/bs";
import cartImage from "@/app/_assets/images/Shape.png";
import { fraunces, montserrat } from "./fonts";


function HomePage() {
  return (
    <div className="w-[600px] max-w-[600px] h-[450px]   card">
      <div className="w-1/2 h-full relative image-container">
        <Image src={perfumeImage} alt="perfume bottle image" fill priority className="perfume-image" />
      </div>
      <div className="w-1/2 h-full bg-white-500 writeup-container">
        <div className="writeup-center">
          <span className={montserrat.className}>PERFUME</span>
          <h1 className={fraunces.className}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className={montserrat.className}>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price-container">
            <span className={fraunces.className} id="discounted-price">$149.99</span>
            <span className={montserrat.className} id="original-price">$169.99</span>
          </div>
          <button type="button" className={montserrat.className}>
            <Image src={cartImage} alt="cart-image" id="cart-image" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomePage;