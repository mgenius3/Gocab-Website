import { Alert, AlertTitle } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          {/* <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
              Company
            </h2>
            <ul className="space-y-4 text-md">
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Merch
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Brand
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Meetups
                </Link>
              </li>
            </ul>
          </li> */}
          {/* <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
              Newsroom
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </li> */}
          <li className="space-y-5 row-span-2">
            <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
              Services
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="#"
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="#"
                >
                  Transit
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-sm tracking-wide text-gray-900 uppercase font-bold">
              Connect
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                  href="/"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 transition-colors duration-200 font-semibold text-2xl"
                  href="/"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="/"
              className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2023 Gocab Transit & Logistics.
            </Link>
          </ul>
        </div>
      </div>
      <Alert severity="info" className="text-center flex justify-center">
        Built by —
        <Link href="https://instagram.com/mgeniusoftware" target="_blank">
          <strong> @mgeniusoftware</strong>
        </Link>
      </Alert>
    </footer>
  );
}
