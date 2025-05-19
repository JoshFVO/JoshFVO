import { Button } from "@/components/ui/button";
import ExpandIcon from "@/components/icons/expand";
import {
    motion,
} from "framer-motion";


interface SingaporeProps {
 setArea: React.Dispatch<React.SetStateAction<string>>;
setExpandedSrc: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Malaysia({
    setArea,
    setExpandedSrc,
}: SingaporeProps) 
{

    return (
   <div className="">
            <Button
              onClick={() => setArea("main")}
              className="z-30 rounded-full text-[18px] font-[500] absolute top-16 left-16 bg-[#decbad] text-[#732636] px-[24px] py-[30px] transition-colors duration-300 hover:bg-[#fef6de] hover:cursor-pointer"
            >
              <img src="/back.svg" alt="Back" className="w-6 h-6" />
              Back
            </Button>

            <div className="flex flex-row space-x-[24px]">

                <div className="absolute left-0 h-screen w-[200px] bg-gradient-to-l from-zinc-950/0 to-zinc-950 flex-shrink-0" />

              {/* Singapore image */}

              <div className="flex-shrink-0 flex flex-col justify-center ml-[144px]">
                <img
                  src="/malaysia/mal6.JPG"
                  alt="Malaysia"
                  className="w-[720px] h-[480px] object-cover border-[16px] border-white"
                  style={{ transform: "rotate(-3deg)" }}
                />
              </div>


              <div className="flex-shrink-0 flex flex-col justify-center h-screen space-y-2 ml-[64px]">
                <h2 className="text-[#decbad] text-[64px] font-[600]">
                  MALAYSIA
                </h2>
                <p className="text-[#fef6de] text-[24px] font-[400]">
                  July 2024
                </p>
                <p className="text-[24px] font-[400] text-white max-w-[600px]">
                  A land where ancient rainforests brush against gleaming towers, Malaysia dazzles at every turn. In Kuala Lumpur, the Petronas Twin Towers rise above night markets brimming with satay and frothy teh tarik, while George Town’s colonial shophouses and street art whisper centuries of spice-trade history. From the misty tea gardens of the Cameron Highlands to Borneo’s orang-utan jungles and Langkawi’s hidden coves, each corner promises a new discovery.
                </p>
              </div>

              {/* Column 1 */}

              <div className="flex-shrink-0 w-[720px] flex flex-col justify-center h-screen space-y-[24px] py-[16px] ml-[96px]">
                <div className="h-1/3 relative w-1/2 group self-end">
                  {/* just give it layoutId—animation is automatic now */}
                  <motion.img
                    layoutId="/malaysia/mal1.JPG"
                    src="/malaysia/mal1.JPG"
                    alt="Singapore"
                    className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#decbad] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal1.JPG")
                    }
                  />
                  <Button
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal1.JPG")
                    }
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                  >
                    <ExpandIcon />
                  </Button>
                </div>
                <div className="h-2/3 relative group ">
                  {/* just give it layoutId—animation is automatic now */}
                  <motion.img
                    layoutId="/malaysia/mal3.JPG"
                    src="/malaysia/mal3.JPG"
                    alt="Singapore"
                    className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#decbad] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal3.JPG")
                    }
                  />
                  <Button
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal3.JPG")
                    }
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                  >
                    <ExpandIcon />
                  </Button>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex-shrink-0 w-[360px] flex flex-col justify-center h-screen space-y-[16px] py-[16px]">
                <div className="h-4/5 relative group ">
                  <motion.img
                    layoutId="/malaysia/mal4.JPG"
                    src="/malaysia/mal4.JPG"
                    alt="Singapore"
                    className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#decbad] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal4.JPG")
                    }
                  />
                  <Button
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal4.JPG")
                    }
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                  >
                    <ExpandIcon />
                  </Button>
                </div>
              </div>


              {/* Column 6 */}
              <div className="flex-shrink-0 w-[1080px] flex flex-col justify-center h-screen space-y-[16px] ml-[96px]">
                <div className="h-screen relative group ">
                  <motion.img
                    layoutId="/malaysia/mal2.JPG"
                    src="/malaysia/mal2.JPG"
                    alt="Singapore"
                    className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#decbad] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal2.JPG")
                    }
                  />
                  <Button
                    onClick={() =>
                      setExpandedSrc("/malaysia/mal2.JPG")
                    }
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                  >
                    <ExpandIcon />
                  </Button>
                </div>
              </div>
            </div>
        </div>
    )
}