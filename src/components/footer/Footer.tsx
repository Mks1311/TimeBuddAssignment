import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Testimonials", key: "item-1-5" },
    ],
    [
      { label: "Services", key: "header-2" },
      { label: "Charge & Pay", key: "item-2-2" },
      { label: "Partner with us", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
    ],
  ];

  return (
    <div className="flex items-end justify-center">
      <div className="pb-16 pt-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-transparent text-white w-full p-4 relative">
        <div className="text-left pl-2">
          <div className="footer-img ">
            <span className="text-3xl font-bold  text-white">
              Socket
            </span>
          </div>
          <div className="infos text-gray-400">
            <span>Copyright © 2020 Socket ltd.</span>
          </div>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-14 h-14 p-2 rounded-full bg-transparent hover:bg-white hover:text-black cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-gray-400 cursor-pointer ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                      }`}
                    >
                      {link.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border rounded-lg py-3 px-6 bg-black text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;