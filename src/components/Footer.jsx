/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

const navigation = {
  solutions: [
    { name: "Explore Quests", href: "#" },
    { name: "Comunities", href: "#" },
    { name: "Alpha Hub", href: "#" }
  ],
  support: [
    { name: "Refer & Earn", href: "#" },
    { name: "Leaderboard", href: "#" },
    { name: "Achievements", href: "#" },
  ],
  company: [
    { name: "Product Roadmap", href: "#" },
    { name: "Affiliate Program", href: "#" },
    { name: "Sign up Program", href: "#" },
    { name: "Growth Community", href: "#" },
    { name: "Blogs", href: "#" },
  ],
  legal: [
    { name: "Help Center", href: "#" },
    { name: "Create your quest", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Community Guidelines", href: "#" },
  ],
 
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="border-t text-[#636363] border-gray-800">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-[3fr,2fr,2fr] xl:gap-8">
          <div className="space-y-8">
            <Image
              alt="logo"
              src="/intract_text.png"
              className="h-7"
              width={120}
              height={30}
            />
            <p className="text-sm leading-6 w-[50%] text-[#636363]">
            We are your personal guide for exploring web3 projects & earning 100x rewards
            </p>
           
          </div>
          <div className="mt-16 grid grid-cols-2 gap-2 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 justify-start md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                INTRACT
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-[#636363] transition-all duration-500 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  EARN
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 ttext-[#636363] transition-all duration-500 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  ABOUT
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-[#636363] transition-all duration-500 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  SUPPORT
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 transition-all duration-500 text-[#636363] hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t border-gray-800 pt-8 mt-8">
          <p className="text-md leading-5 text-[#636363]">
          <span className="text-gray-400 font-medium">Disclaimer:</span> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
          </p>
        </div>
        <div className=" border-t border-gray-800 pt-8 mt-8 pb-8">
          <p className="text-md leading-5 text-white">
          CREATED BY <span className="underline"> INTRACT</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
