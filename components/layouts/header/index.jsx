import ButtonNav from "./component/button-nav"
import {  useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

const Header = () => {
    const navigate = useNavigate() ;
  return (
  <header className="px-2 ">
    <h1 className="text-center p-1 text-white bg-black">Miễn phí vận chuyển với đơn hàng trên 500K. Hàng pre-order còn được giảm thêm 5%.</h1>
    <div className="px-2">
      <div className="flex w-full h-20 items-center px-7 sm:w-full ">
        <div className="flex-1 h-12 w-1/5 mb-2">
          <a href="/" className=" flex justify-center  "><img className=" object-cover w-20 h-16"  src="/logo.jpg" alt="logo" /></a>
        </div>
        <div className="flex h-12 w-4/5 justify-around">
          <nav className="flex m-3 ">
              <ul className="flex">
                <ButtonNav text={"Home"} onClick ={() => navigate("/")}/> 
                <ButtonNav text={"Fidget Toys"}/>
                <ButtonNav text={"Lego"}/>
                <ButtonNav text={"Doll"}/>
                <ButtonNav text={"Flash Sale"}/>
                <ButtonNav text={"Accessories"}/>
                <div className="relative group">
                <ButtonNav text={<div className="flex items-center"><span>Sale off</span><FaAngleDown className="ml-1 p-1" /></div>} />
                {/* hover vào thì thả ra 1 menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
                <ul className="py-1">
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 99k</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 119k</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 219k</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 799k</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 1599k</a></li>
                    <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Đồng giá 2499k</a></li>
                </ul>
              </div>
                </div>
              </ul>
          </nav>
          <div className="flex "> 
                <ul className="flex pt-4 ">
                  <ButtonNav  text={<IoIosSearch className="text-lg" />}  />
                  <ButtonNav text={<FaUser className=" text-lg"  />}/>
                  <ButtonNav text={<BsCart3  className=" text-lg"/>}/>
                </ul>
          </div>
          
        </div>
        
      </div>
    </div>
  </header>
  )
}

export default Header
