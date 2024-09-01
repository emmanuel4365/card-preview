import Image from "next/image";
import perfumeImage from "@/app/_assets/images/perfume-pic.png";
import { BsCart3 } from "react-icons/bs";


function HomePage() {
  return (
    <div className="w-[600px] max-w-[600px] h-[450px]   card">
      <div className="w-1/2 h-full relative image-container">
        <Image src={perfumeImage} alt="perfume bottle image" fill priority />
      </div>
      <div className="w-1/2 h-full bg-white-500 writeup-container">
        <div className="writeup-center">
          <span>PERFUME</span>
          <h1>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price-container">
            <span className="discounted-price">$149.99</span>
            <span className="original-price">$169.99</span>
          </div>
          <button type="button" className="add-button hover:bg-[#1A4032]">
            <BsCart3 size={16} className="cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomePage;