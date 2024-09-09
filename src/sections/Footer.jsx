import { footerLogo } from "../../public/assets/images";
import { Help, products, socialImages } from "../constants";
function Footer() {
  return (
    <div className="mt-20 bg-black text-[#ffffffcc] xl:pt-24 xl:px-16 xl:pb-8 pt-12 px-8 pb-4">
      <div className="flex justify-between flex-wrap max-sm:flex-col max-sm:gap-20">
        <div>
          <img src={footerLogo} alt="Nike Footer" width={150} height={46} />
          <p className="max-w-sm mt-6 leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          {socialImages.map((socialmedia, index) => {
            return (
              <div
                className="bg-white rounded-full inline-block mr-4 p-3 mt-6 cursor-pointer"
                key={index}
              >
                <img src={socialmedia.image} alt="social media links" />
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-white text-2xl font-medium">Products</h1>
          <ul>
            {products.map((product, index) => {
              return (
                <li key={index} className="mt-3 cursor-pointer hover:opacity-70 transition-all">
                  {product}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h1 className="text-white text-2xl font-medium">Help</h1>
          <ul>
            {Help.map((section, index) => {
              return (
                <li key={index} className="mt-3 cursor-pointer hover:opacity-70 transition-all">
                  {section}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h1 className="text-white text-2xl font-medium">Get in touch</h1>
          <ul>
            <li className="mt-3 cursor-pointer hover:opacity-70 transition-all">customer@nike.com</li>
            <li className="mt-3 cursor-pointer hover:opacity-70 transition-all">+92554862354</li>
          </ul>
        </div>
      </div>

      <section className="flex flex-col justify-center items-center sm:flex-row sm:justify-between pt-20">
        <h1 className="cursor-pointer">
          <span className="text-lg">&copy; </span>Copyright. All rights
          reserved.
        </h1>
        <h1 className="cursor-pointer">Terms & Conditions</h1>
      </section>
    </div>
  );
}

export default Footer;
