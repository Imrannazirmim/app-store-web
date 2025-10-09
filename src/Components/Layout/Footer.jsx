import {
  FaFacebook,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-900">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-amber-400">
            <img src={logoImg} alt="logo" className="w-[3rem]" />
            <span className="text-xl font-semibold">GetAppStore</span>
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              <FaFacebook size={25} />
            </li>

            <li className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              <FaSquareInstagram size={25} />
            </li>

            <li className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              <FaTwitter size={25} />
            </li>

            <li className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              <FaYoutube size={25} />
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800">
          <div>
            <p className="font-medium text-white">Advertising</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Monetization solutions for Publishers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Upload and Manage your Software
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Software Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Advertising Opportunities
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">About Us</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  GetStoreApp Info
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Help & Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Add Your software / app
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Accessibility
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Returns Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  Hiring-3 Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-400 hover:text-gray-300">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
