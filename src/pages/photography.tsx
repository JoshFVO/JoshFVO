import { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
    motion,
    AnimatePresence,
    useTransform,
    useScroll
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import ExpandIcon from "@/components/icons/expand";
import { X } from "lucide-react";
import Navbar from "@/components/navbar";

const slideVariants = {
    initialLeft: { x: -200, opacity: 0 },
    initialRight: { x: 200, opacity: 0 },
    animateCenter: { x: 0, opacity: 1 },
    exitLeft: { x: -200, opacity: 0 },
    exitRight: { x: 200, opacity: 0 },
};

const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export default function Photography() {
    const [expandedSrc, setExpandedSrc] = useState<string | null>(null);
    const [singapore, setSingapore] = useState(false);
    const [malaysia, setMalaysia] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);




    // new: ref & state to measure section height
    const introRef = useRef<HTMLDivElement>(null);
    const [sectionHeight, setSectionHeight] = useState(0);

    // measure full-screen intro once
    useLayoutEffect(() => {
        if (introRef.current) {
            setSectionHeight(introRef.current.clientHeight);
        }
    }, []);



    const sgRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sgRef,
        offset: ["start end", "end start"],
    });
    const bg = useTransform(scrollYProgress, [0.25, 0.50, 0.75], ["#FFFFFF", "#2F5233", "#732636"]);

    useEffect(() => {
        if (!singapore && !malaysia) {
            scrollYProgress.set(0);
        }
    }, [singapore, malaysia]);

    const { scrollY } = useScroll();
    // fade out by halfway down the intro
    const hintOpacity = useTransform(scrollY, [0, sectionHeight * 0.5], [1, 0]);


    return (
        <div className="overflow-x-auto">
            <BlurFade>
                <motion.div style={{ backgroundColor: bg }}>
                    <section
                        ref={sgRef}
                        className="flex justify-center items-center overflow-x-auto"
                    >
                        <div className="w-full">
                            {/* Slide in/out between main */}
                            <AnimatePresence initial={false} mode="wait">
                                {!singapore && !malaysia ? (
                                    <motion.div
                                        key="main"
                                        variants={slideVariants}
                                        initial="initialLeft"
                                        animate="animateCenter"
                                        exit="exitLeft"
                                        className="max-w-[1400px] mx-auto relative w-screen h-full overflow-visible inset-0 flex flex-col justify-center items-center"
                                    >
                                        {/* … your main content … */}
                                        <div ref={introRef} className="h-screen relative w-screen">
                                            <BlurFade>
                                                <Navbar />
                                                <div className="px-[16px] md:px-[32px] lg:px-[64px] xl:px-[96px] grid grid-cols-1 md:grid-cols-2 gap-[64px] min-h-[80vh] items-center justify-center">
                                                    <div className="hidden md:flex justify-center items-center">

                                                        <img src="/photogs.JPG" alt="Joshua Mahabir" className=" w-[400px] h-[400px] object-cover" />

                                                    </div>
                                                    <div className="max-w-[600px]">

                                                        <h1 className="text-[64px] font-[600]">Hi, I'm Josh</h1>
                                                        <h2 className="text-[32px] font-[400]">Amateur Photographer</h2>
                                                        <p className="text-[16px] font-[400]">
                                                            I recently picked up a Fujifilm X100VI and found I really enjoy taking photos of the things I see day to day. I’m not a professional—just someone who likes capturing moments and places that catch my eye.
                                                        </p>
                                                       
                                                    </div>
                                                </div>
                                                {/* <motion.div
                                                    style={{ opacity: hintOpacity }}
                                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[16px] text-gray-900 whitespace-nowrap"
                                                >
                                                    Scroll below to see my work
                                                </motion.div> */}
                                            </BlurFade>
                                        </div>
                                        <div className="max-w-[1400px] mx-auto h-screen w-screen grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-[16px] lg:px-[32px]  gap-[0px] md:gap-[64px] lg:gap-[96px]">
                                            <div>
                                                <h2 className="text-[#B1D8B7] text-[36px] md:text-[48px] lg:text-[64px] font-[600]">
                                                    SINGAPORE
                                                </h2>
                                                <p className="text-[#fef6de] text-[16px] lg:text-[24px] font-[400]">
                                                    July 2024
                                                </p>
                                                <p className="text-[16px] lg:text-[24px] font-[400] text-white ">
                                                    A city of gleaming skyscrapers and hidden alleyway shophouses, Singapore crackles with efficiency and color. In the shadow of Marina Bay’s futuristic skyline, hawker centers sizzle with chili-crab and laksa, while lantern-lit streets of Chinatown hum against the neon glow of Orchard Road. Between the fragrant spice shops of Little India and the green corridors of the Botanic Gardens, you’ll find a world where precision meets exuberance—and every corner feels like tomorrow’s postcard.
                                                </p>
                                               
                                            </div>
                                            <div className="relative flex justify-center items-center  group">
                                                <img
                                                    src="/singapore/singapore1.JPG"
                                                    alt="Singapore"
                                                    className="w-full object-cover border-[16px] md:border-[20px] lg:border-[24px] border-white transition-transform transition-shadow duration-700 ease-in-out group-hover:shadow-2xl group-hover:shadow-green-950 group-hover:scale-101 group-hover:rotate-1 mx-auto"
                                                />
                                                <Button
                                                    onClick={() => setSingapore(true)}
                                                    className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-10 lg:bottom-12 bg-white text-black rounded-full p-[16px] md:p-[24px] lg:p-[30px] text-[12px] md:text-[14px] lg:text-[16px] font-[600] transition-colors transition-transform duration-700 ease-in-out group-hover:bg-[#fef6de] group-hover:rotate-1 group-hover:scale-101 hover:text-black"
                                                >
                                                    View Singapore
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="max-w-[1400px] mx-auto h-screen w-screen grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-[16px] lg:px-[32px] gap-[0px] md:gap-[64px] lg:gap-[96px]">
                                             <div className="block lg:hidden">
                                                <h2 className="text-[#decbad]  text-[36px] md:text-[48px] lg:text-[64px]  font-[600]">
                                                    MALAYSIA
                                                </h2>
                                                <p className="text-[#fef6de] text-[16px] lg:text-[24px] font-[400]">
                                                    July 2024
                                                </p>
                                                <p className="text-[16px] lg:text-[24px] font-[400] text-white ">
                                                    A land where ancient rainforests brush against gleaming towers, Malaysia dazzles at every turn. In Kuala Lumpur, the Petronas Twin Towers rise above night markets brimming with satay and frothy teh tarik, while George Town’s colonial shophouses and street art whisper centuries of spice-trade history. From the misty tea gardens of the Cameron Highlands to Borneo’s orang-utan jungles and Langkawi’s hidden coves, each corner promises a new discovery.
                                                </p>
                                            </div>
                                            <div className="relative flex justify-center items-center  group">
                                                <img
                                                    src="/malaysia/mal6.JPG"
                                                    alt="Malaysia"
                                                    className="w-full object-cover border-[16px] md:border-[20px] lg:border-[24px] border-white transition-transform transition-shadow duration-700 ease-in-out group-hover:shadow-2xl group-hover:shadow-red-950 group-hover:scale-101 group-hover:rotate-1 mx-auto"
                                                />
                                                <Button
                                                    onClick={() => setMalaysia(true)}
                                                    className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-10 lg:bottom-12 bg-white text-black rounded-full p-[16px] md:p-[24px] lg:p-[30px] text-[12px] md:text-[14px] lg:text-[16px] font-[600] transition-colors transition-transform duration-700 ease-in-out group-hover:bg-[#fef6de] group-hover:rotate-1 group-hover:scale-101 hover:text-black"
                                                >
                                                    View Malaysia
                                                </Button>
                                            </div>
                                            <div className="hidden lg:block">
                                                <h2 className="text-[#decbad] text-[64px] font-[600]">
                                                    MALAYSIA
                                                </h2>
                                                <p className="text-[#fef6de] text-[24px] font-[400]">
                                                    July 2024
                                                </p>
                                                <p className="text-[16px] lg:text-[24px] font-[400] text-white max-w-[600px]">
                                                    A land where ancient rainforests brush against gleaming towers, Malaysia dazzles at every turn. In Kuala Lumpur, the Petronas Twin Towers rise above night markets brimming with satay and frothy teh tarik, while George Town’s colonial shophouses and street art whisper centuries of spice-trade history. From the misty tea gardens of the Cameron Highlands to Borneo’s orang-utan jungles and Langkawi’s hidden coves, each corner promises a new discovery.
                                                </p>
                                            </div>
                                        </div>


                                    </motion.div>
                                ) : singapore && !malaysia ? (
                                    <motion.div
                                        key="singapore"
                                        variants={slideVariants}
                                        initial="initialRight"
                                        animate="animateCenter"
                                        exit="exitRight"
                                        className="h-screen bg-[#2F5233]  flex-col justify-center px-4 overflow-x-auto"
                                    >
                                        <Button
                                            onClick={() => setSingapore(false)}
                                            className="z-30 rounded-full text-[18px] font-[500] absolute top-16 left-16 bg-[#B1D8B7] text-[#2F5233] px-[24px] py-[30px] transition-colors duration-300 hover:bg-[#fef6de] hover:cursor-pointer"
                                        >
                                            <img src="/back.svg" alt="Back" className="w-6 h-6" />
                                            Back
                                        </Button>

                                        <div className="flex flex-row space-x-[24px]">

                                            {/* Singapore image */}

                                            <div className="flex-shrink-0 flex flex-col justify-center ml-[144px]">
                                                <img
                                                    src="/singapore/singapore1.JPG"
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
                                                        layoutId="/singapore/sing3.JPG"
                                                        src="/singapore/sing3.JPG"
                                                        alt="Singapore"
                                                        className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing3.JPG")
                                                        }
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing3.JPG")
                                                        }
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                                <div className="h-2/3 relative group ">
                                                    {/* just give it layoutId—animation is automatic now */}
                                                    <motion.img
                                                        layoutId="/singapore/sing8.JPG"
                                                        src="/singapore/sing8.JPG"
                                                        alt="Singapore"
                                                        className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing8.JPG")
                                                        }
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing8.JPG")
                                                        }
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Column 2 */}
                                            <div className="flex-shrink-0 w-[360px] flex flex-col justify-center h-screen space-y-[16px] py-[16px]">
                                                <div className="h-4/5 relative group ">
                                                    <motion.img
                                                        layoutId="/singapore/sing2.JPG"
                                                        src="/singapore/sing2.JPG"
                                                        alt="Singapore"
                                                        className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing2.JPG")
                                                        }
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing2.JPG")
                                                        }
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                            {/* Column 3 */}
                                            <div className="flex-shrink-0 w-[720px] flex flex-col justify-center h-screen space-y-[16px] pl-[96px]">
                                                <div className="h-screen relative group ">
                                                    <motion.img
                                                        layoutId="/singapore/sing7.JPG"
                                                        src="/singapore/sing7.JPG"
                                                        alt="Singapore"
                                                        className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing7.JPG")
                                                        }
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing7.JPG")
                                                        }
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                            {/* Column 4 */}
                                            <div className="flex-shrink-0 w-[675px] flex flex-col justify-center h-screen space-y-[16px]">
                                                <div className="h-3/5 relative group ">
                                                    <motion.img
                                                        layoutId="/singapore/sing5.JPG"
                                                        src="/singapore/sing5.JPG"
                                                        alt="Singapore"
                                                        className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing5.JPG")
                                                        }
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing5.JPG")
                                                        }
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                            {/* Column 5 */}
                                            <div className="flex-shrink-0 w-[450px] flex flex-col justify-center h-screen space-y-[16px]  ml-[96px]">
                                                <div className="h-4/5 relative group ">
                                                    <motion.img
                                                        layoutId="/singapore/sing4.JPG"
                                                        src="/singapore/sing4.JPG"
                                                        alt="Singapore"
                                                        className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing4.JPG")
                                                        }
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing4.JPG")
                                                        }
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                            {/* Column 6 */}
                                            <div className="flex-shrink-0 w-[1080px] flex flex-col justify-center h-screen space-y-[16px]">
                                                <div className="h-screen relative group ">
                                                    <motion.img
                                                        layoutId="/singapore/sing9.JPG"
                                                        src="/singapore/sing9.JPG"
                                                        alt="Singapore"
                                                        className="h-full object-cover relative border-0 group-hover:border-[16px] border-[#B1D8B7] transition-all duration-700 ease-in-out hover:cursor-zoom-in"
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing9.JPG")
                                                        }
                                                    />
                                                    <Button
                                                        onClick={() =>
                                                            setExpandedSrc("/singapore/sing9.JPG")
                                                        }
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F5233] text-[#B1D8B7] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#B1D8B7] group-hover:text-[#2F5233] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : malaysia && !singapore ? (
                                    <motion.div
                                        key="singapore"
                                        variants={slideVariants}
                                        initial="initialRight"
                                        animate="animateCenter"
                                        exit="exitRight"
                                        className="h-screen bg-[#732636]  flex-col justify-center px-4 overflow-x-auto"
                                    >
                                        <Button
                                            onClick={() => setMalaysia(false)}
                                            className="z-30 rounded-full text-[18px] font-[500] absolute top-16 left-16 bg-[#decbad] text-[#732636] px-[24px] py-[30px] transition-colors duration-300 hover:bg-[#fef6de] hover:cursor-pointer"
                                        >
                                            <img src="/back.svg" alt="Back" className="w-6 h-6" />
                                            Back
                                        </Button>

                                        <div className="flex flex-row space-x-[24px]">

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
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
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
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
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
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
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
                                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#732636] text-[#decbad] text-[16px] font-[500] transition-colors transition-transform duration-700 group-hover:bg-[#decbad] group-hover:text-[#732636] absolute bottom-4 right-4 p-0 group-hover:translate-y-[-16px] group-hover:translate-x-[-16px] hover:cursor-zoom-in"
                                                    >
                                                        <ExpandIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div>

                                    </div>
                                )

                                }
                            </AnimatePresence>

                            {/* Lightbox overlay & shared image */}
                            <AnimatePresence>
                                {expandedSrc && (
                                    <motion.div
                                        key="lightbox-overlay"
                                        variants={overlayVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.5, when: "afterChildren" }}
                                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                                        onClick={() => setExpandedSrc(null)}
                                    >
                                        <motion.img
                                            layoutId={expandedSrc}
                                            src={expandedSrc}
                                            alt="Expanded"
                                            onLoad={e => {
                                                const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
                                                setIsPortrait(h > w);
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            className={isPortrait ? "max-h-full" : "max-w-full"}
                                        />
                                        <Button
                                            onClick={() => setExpandedSrc(null)}
                                            className=" absolute top-16 right-16 rounded-full w-14 h-14 text-12 bg-[#2F5233] text-[#B1D8B7] transition-colors duration-400 ease-in-out hover:bg-[#28452b]"
                                        >
                                            <X /> {/* Use the 'size' prop for Lucide icons */}
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </section>
                </motion.div>
            </BlurFade>
        </div>
    );
}