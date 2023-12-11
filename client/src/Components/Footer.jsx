import { LiaFacebookSquare } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { RiTiktokFill } from "react-icons/ri";

const Footer = () => {
  return (
  <footer className="bg-gray-800 text-white py-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="mb-4 md:mb-0">
      <h3 className="text-lg font-bold">Contact Us</h3>
      <p>Email: contact@vetguardian.com</p>
      <p>Phone: 01010011 01001111 01010011</p>
    </div>
    <nav className="flex flex-wrap gap-4">
      <a href="/" className="hover:text-gray-300">Home</a>
      <a href="/services" className="hover:text-gray-300">Services</a>
      <a href="/about" className="hover:text-gray-300">About Us</a>
      <a href="/contact" className="hover:text-gray-300">Contact</a>
      <a href="/terms" className="hover:text-gray-300">Terms</a>
    </nav>
    <div className="mt-4 md:mt-0 text-center">
      <h3 className="text-lg font-bold mb-2">Follow Us</h3>
      <div className="flex items-center text-white hover:text-gray-300">
        <LiaFacebookSquare className="mr-4" size={40}/>
        <BsTwitterX className="mr-4" size={30}/>
        <RiTiktokFill className="mr-4" size={30}/>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer