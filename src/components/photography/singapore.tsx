import { Button } from "@/components/ui/button";
import ExpandIcon from "@/components/icons/expand";
import {
    motion,
} from "framer-motion";


interface SingaporeProps {
    setArea: React.Dispatch<React.SetStateAction<string>>;
    setExpandedSrc: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Singapore({
    setArea,
    setExpandedSrc,
}: SingaporeProps) {

    return (
        <div>
            <Button
                onClick={() => setArea("main")}
                className="z-30 rounded-full text-[18px] font-[500] absolute top-16 left-16 bg-[#B1D8B7] text-[#2F5233] px-[24px] py-[30px] transition-colors duration-300 hover:bg-[#fef6de] hover:cursor-pointer"
            >
                <img src="/back.svg" alt="Back" className="w-6 h-6" />
                Back
            </Button>

            <div className="flex flex-row space-x-[24px]">

                {/* Singapore image */}
                <div className="absolute left-0 h-screen w-[200px] bg-gradient-to-l from-zinc-950/0 to-zinc-950 flex-shrink-0" />


                <div className="flex-shrink-0 flex flex-col justify-center ml-[144px]">
                    <img
                        src="/singapore/singapore1.avif"
                        alt="Singapore"
                        className="w-[720px] h-[480px] object-cover border-[16px] border-white"
                        style={{ transform: "rotate(-3deg)" }}
                    />
                </div>


                <div className="flex-shrink-0 flex flex-col justify-center h-screen space-y-2 ml-[64px]">
                    <h2 className="text-[#B1D8B7] text-[64px] font-[600]">
                        SINGAPORE
                    </h2>
                    <p className="text-[#fef6de] text-[24px] font-[400]">
                        July 2024
                    </p>
                    <p className="text-[24px] font-[400] text-white max-w-[600px]">
                        A city of gleaming skyscrapers and hidden alleyway shophouses, Singapore crackles with efficiency and color. In the shadow of Marina Bay’s futuristic skyline, hawker centers sizzle with chili-crab and laksa, while lantern-lit streets of Chinatown hum against the neon glow of Orchard Road. Between the fragrant spice shops of Little India and the green corridors of the Botanic Gardens, you’ll find a world where precision meets exuberance—and every corner feels like tomorrow’s postcard.
                    </p>
                </div>

                {/* Column 1 */}

                <div className="flex-shrink-0 w-[720px] flex flex-col justify-center h-screen space-y-[24px] py-[16px] ml-[96px]">
                    <div className="h-1/3 relative w-1/2 group self-end">
                        {/* just give it layoutId—animation is automatic now */}
                        <motion.img
                            layoutId="/singapore/sing3.avif"
                            src="/singapore/sing3.avif"
                            alt="Singapore"
                            className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                            onClick={() =>
                                setExpandedSrc("/singapore/sing3.avif")
                            }
                        />
                        <Button
                            onClick={() =>
                                setExpandedSrc("/singapore/sing3.avif")
                            }
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                        >
                            <ExpandIcon />
                        </Button>
                    </div>
                    <div className="h-2/3 relative group ">
                        {/* just give it layoutId—animation is automatic now */}
                        <motion.img
                            layoutId="/singapore/sing8.avif"
                            src="/singapore/sing8.avif"
                            alt="Singapore"
                            className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                            onClick={() =>
                                setExpandedSrc("/singapore/sing8.avif")
                            }
                        />
                        <Button
                            onClick={() =>
                                setExpandedSrc("/singapore/sing8.avif")
                            }
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                        >
                            <ExpandIcon />
                        </Button>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex-shrink-0 w-[360px] flex flex-col justify-center h-screen space-y-[16px] py-[16px]">
                    <div className="h-4/5 relative group ">
                        <motion.img
                            layoutId="/singapore/sing2.avif"
                            src="/singapore/sing2.avif"
                            alt="Singapore"
                            className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                            onClick={() =>
                                setExpandedSrc("/singapore/sing2.avif")
                            }
                        />
                        <Button
                            onClick={() =>
                                setExpandedSrc("/singapore/sing2.avif")
                            }
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                        >
                            <ExpandIcon />
                        </Button>
                    </div>
                </div>
                {/* Column 3 */}
                <div className="flex-shrink-0 w-[720px] flex flex-col justify-center h-screen space-y-[16px] pl-[96px]">
                    <div className="h-screen relative group ">
                        <motion.img
                            layoutId="/singapore/sing7.avif"
                            src="/singapore/sing7.avif"
                            alt="Singapore"
                            className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                            onClick={() =>
                                setExpandedSrc("/singapore/sing7.avif")
                            }
                        />
                        <Button
                            onClick={() =>
                                setExpandedSrc("/singapore/sing7.avif")
                            }
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                        >
                            <ExpandIcon />
                        </Button>
                    </div>
                </div>
                {/* Column 4 */}
                <div className="flex-shrink-0 w-[675px] flex flex-col justify-center h-screen space-y-[16px]">
                    <div className="h-3/5 relative group ">
                        <motion.img
                            layoutId="/singapore/sing5.avif"
                            src="/singapore/sing5.avif"
                            alt="Singapore"
                            className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                            onClick={() =>
                                setExpandedSrc("/singapore/sing5.avif")
                            }
                        />
                        <Button
                            onClick={() =>
                                setExpandedSrc("/singapore/sing5.avif")
                            }
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                        >
                            <ExpandIcon />
                        </Button>
                    </div>
                </div>
                {/* Column 5 */}
                <div className="flex-shrink-0 w-[450px] flex flex-col justify-center h-screen space-y-[16px]  ml-[96px]">
                    <div className="h-4/5 relative group ">
                        <motion.img
                            layoutId="/singapore/sing4.avif"
                            src="/singapore/sing4.avif"
                            alt="Singapore"
                            className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                            onClick={() =>
                                setExpandedSrc("/singapore/sing4.avif")
                            }
                        />
                        <Button
                            onClick={() =>
                                setExpandedSrc("/singapore/sing4.avif")
                            }
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                        >
                            <ExpandIcon />
                        </Button>
                    </div>
                </div>
                {/* Column 6 */}
                <div className="flex-shrink-0 w-[1080px] flex flex-col justify-center h-screen space-y-[16px]">
                    <div className="h-screen relative group ">
                        <motion.img
                            layoutId="/singapore/sing9.avif"
                            src="/singapore/sing9.avif"
                            alt="Singapore"
                            className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                            onClick={() =>
                                setExpandedSrc("/singapore/sing9.avif")
                            }
                        />
                        <Button
                            onClick={() =>
                                setExpandedSrc("/singapore/sing9.avif")
                            }
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                        >
                            <ExpandIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}