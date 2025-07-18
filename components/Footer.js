import Link from 'next/link';
export default function Footer() {

  return (
    <div>
    {/* Footer */}
<section className="bg-gray-100 text-black flex flex-col md:flex-row items-center py-[20px] px-[20px] text-[14px] mb-24">
  <div className="flex flex-wrap items-center gap-[12px] mb-4 md:mb-0">
    <a href="#" className="font-bold">FAQs</a>
    <span className="text-gray-500">about SAMRIT Food</span>
    <span className="text-gray-500">|</span>
    <span className="text-gray-500">Find us here</span>
  </div>

  <div className="flex gap-[16px] text-3xl ml-8">
    <a href="#"><i className="fa-brands fa-facebook"></i></a>
    <a href="#"><i className="fa-brands fa-instagram"></i></a>
    <a href="#"><i className="fa-brands fa-pinterest"></i></a>
  </div>
</section>

    <footer className="bg-black text-white text-sm p-6 space-y-5">

      {/* Heading */}
      <h2 className="text-[1.7em] font-bold leading-[1] mb-4">Explore the SAMRIT</h2>

      {/* Nav Links */}
      <ul className="flex flex-wrap ml-[-19px] mt-8">
          <li className="w-1/3 sm:w-1/3 md:w-1/6  border-r border-[#949494]">
            <a href="" className="hover:underline ml-4">Home</a>
          </li>
          <li className="w-1/3 sm:w-1/3 md:w-1/6 border-r border-[#949494]">
            <a href="#" className="hover:underline ml-4">Indian Regional Cuisine</a>
          </li>
          <li className="w-1/3 sm:w-1/3 md:w-1/6 border-r border-[#949494]">
            <a href="#" className="hover:underline ml-4">Consultency</a>
          </li>
          <li className="w-1/3 sm:w-1/3 md:w-1/6 border-r border-[#949494]">
            <a href="#" className="hover:underline ml-4">Product List</a>
          </li>
          <li className="w-1/3 sm:w-1/3 md:w-1/6 border-r border-[#949494]">
            <a href="#" className="hover:underline ml-4">Services</a>
          </li>
          <li className="w-1/3 sm:w-1/3 md:w-1/6 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Earth</a>
          </li>
          <li className="w-1/3 sm:w-1/3 md:w-1/6 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Video</a>
          </li>
          <li className="w-1/3 sm:w-1/3 md:w-1/6 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Live</a>
          </li>
          
      </ul>

      {/* Divider */}
      <hr className="border-gray-500" />

      {/* Info Links */}
      <div>
        <ul className="flex flex-wrap lg:flex-nowrap">
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">Terms of Use</a>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <Link href="/about" className="hover:underline block md:pl-4">
              About the SAMRIT
            </Link>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">Privacy Policy</a>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">Cookies</a>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">Accessibility Help</a>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">Parental Guidance</a>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">Contact the SAMRIT</a>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">SAMRIT emails for you</a>
          </li>
          <li className="w-1/3 sm:w-auto mb-2">
            <a href="#" className="hover:underline block md:pl-4">Advertise with us</a>
          </li>
        </ul>
      </div>
      {/* Copyright */}
      <p className="text-gray-300">
        <strong>Copyright © 2025 SAMRIT.</strong> The SAMRIT is not responsible for the content of external sites.{' '}
        <a href="#" className="underline hover:text-blue-300">Read about our approach to external linking.</a>
      </p>

    </footer>
    </div>
  );
}