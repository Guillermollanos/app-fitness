import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "../../assets/Logo (1).png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggleds, setIsMenuToggleds] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} className="h-10" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* Move the following outside the above div */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <div className={`${flexBetween} gap-8`}>
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggleds(!isMenuToggleds)}
                >
                  {isMenuToggleds ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 text-white" />
                  )}
                </button>
                {/* You can add a menu or other content here when the button is clicked */}
              </div>
            )}
            {/* Closing parenthesis for isAboveMediumScreens */}
          </div>
          {/* Closing parenthesis for mx-auto w-5/6 */}
        </div>
        {/* Closing parenthesis for flexBetween fixed top-0 z-30 w-full py-6 */}
      </div>
      {/* Closing parenthesis for nav */}
    </nav>
  );
};

export default Navbar;
