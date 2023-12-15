import { useState} from "react"
import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid"
import Logo from "../../assets/Logo (1).png"

type Props = {}

// ...

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
  
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={Logo} className="h-10" />

                        {/* RIGHT SIDE */}
                        <div className={`${flexBetween} w-full gap-8 text-sm`}>
                            <p>Home</p>
                            <p>About</p>
                            <p>Our Classes</p>
                            <p>Contact</p>
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


