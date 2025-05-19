import Navbar from "@/components/navbar"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"
import { DATA } from "@/lib/data"
import { GithubIcon } from "lucide-react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

const BLUR_FADE_DELAY = 0.04;


export default function Home() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", { name, email, message });
    };


    return (
        <div>
            <Navbar />
            <div className=" max-w-[1200px] mx-auto px-[16px] md:px-[32px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] pt-[64px] md:pt-[96px] lg:pt-[144px]">
                    <div>
                        <BlurFade>
                            <h1 className="text-[64px] font-[600]">Hi, I'm Josh</h1>
                            <h2 className="text-[32px] font-[400]">Software Engineer</h2>
                            <p className="text-[16px] font-[400]">I am a software engineer with a passion for building full-stack applications. I have experience in React, Node.js, Python, and C/C++.</p>
                            <Button
                                className="bg-black text-white text-[16px] px-[24px] py-[24px] w-full md:w-fit rounded-full mt-[16px] font-[400] hover:bg-black/80 transition-all duration-300 ease-out hover:cursor-pointer"
                                variant="default"
                                onClick={() => {
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                Get In Touch
                            </Button>
                        </BlurFade>
                    </div>

                    <div className="justify-center items-center hidden md:flex">
                        <BlurFade>
                            <img src="/profilephoto.jpeg" alt="Joshua Mahabir" className="rounded-full w-[300px] h-[300px] object-cover" />
                        </BlurFade>
                    </div>
                </div>


                <div className="pt-[96px]">
                    <BlurFade>
                        <div className="text-[24px] font-[600]">About</div>
                        <div className="text-gray-500">I'm Joshua Mahabir, a NYC-born software engineer with a passion for full-stack development. I graduated from Northwestern University in July 2024 and currently lead engineering at Referred.fyi, a startup I helped launch from the ground up. I love building scalable web apps with React, TypeScript, and AWS. Outside of coding, I’m into RPGs, home-cooking, lifting, and all things Soulsborne.</div>
                    </BlurFade>
                </div>

                <div className="pt-[96px] text-center max-w-[672px] mx-auto">
                    <BlurFade>
                        <div className="text-[24px] font-[600]">Skills</div>
                        <div>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">TypeScript</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">Python</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">C++</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">React</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">Node.js</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">Next.js</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">AWS</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">PostgreSQL</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">Git</Badge>
                            <Badge className="mr-[8px] mt-[8px] bg-black text-white">Docker</Badge>

                        </div>
                    </BlurFade>
                </div>

                <div className="pt-[96px] grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
                    <BlurFade>
                        <div className="text-[24px] font-[600]">Work Experience</div>
                        <div className="flex flex-row justify-between items-center py-[16px]">
                            <div className="flex flex-row">
                                <div>
                                    <img src="/referred_fyi_logo.jpeg" alt="Referred.fyi" className="w-[48px] h-[48px] object-cover rounded-full mr-[16px]" />
                                </div>
                                <div>
                                    <div className="font-[500]">Referred.fyi</div>
                                    <div className="text-[14px] font-[300]">Founding Engineer</div>
                                </div>
                            </div>
                            <div className="text-gray-600 font-[300]">
                                October 2024 - Present
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center py-[16px]">
                            <div className="flex flex-row">
                                <div className="mr-[16px] h-[48px] w-[48px] border text-gray-600 rounded-full flex justify-center items-center shrink-0">
                                    RHC
                                </div>
                                <div>
                                    <div className="font-[500]">Romona's Home Care</div>
                                    <div className="text-[14px] font-[300]">Full-Stack Engineer</div>
                                </div>
                            </div>
                            <div className="text-gray-600 font-[300]">
                                July 2024 - October 2024
                            </div>
                        </div>
                    </BlurFade>
                    <BlurFade>
                        <div className="text-[24px] font-[600]">Education</div>
                        <div className="flex flex-row justify-between items-center py-[16px]">
                            <div className="flex flex-row">
                                <div className="w-[48px] h-[48px] object-cover rounded-full mr-[16px] border p-2 shrink-0">
                                    <img src="/northwestern-logo.png" alt="Referred.fyi" className="" />
                                </div>
                                <div>
                                    <div className="font-[500]">Northwestern University</div>
                                    <div className="text-[14px] font-[300]">Bachelor's Degree of Computer Science</div>
                                </div>
                            </div>
                            <div className="text-gray-600 font-[300]">
                                2020 - 2024
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center py-[16px]">
                            <div className="flex flex-row">
                                <div>
                                    <img src="/shs-logo.png" alt="Referred.fyi" className="w-[48px] h-[48px] object-cover rounded-full mr-[16px]" />
                                </div>
                                <div>
                                    <div className="font-[500]">Schenectady High School</div>
                                    <div className="text-[14px] font-[300]">IB Diploma</div>
                                </div>
                            </div>
                            <div className="text-gray-600 font-[300]">
                                2016 - 2020
                            </div>
                        </div>
                    </BlurFade>
                </div>



                <div className="pt-[96px] max-w-[672px] mx-auto">
                    <BlurFade className="text-center">
                        <Badge className="text-[14px] font-[300] bg-black text-white">Projects</Badge>
                        <h1 className="text-[48px] font-[600]">Check out my work</h1>
                        <p className="text-[18px] text-gray-500 font-[300]">
                            I've built a range of projects, from web apps to machine learning and other software. Here are a few of my favorites.
                        </p>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mx-auto mt-[32px]">
                        {DATA.projects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            >
                                <ProjectCard
                                    href={project.href}
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    dates={project.dates}
                                    tags={project.technologies}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>

                <div className="py-[64px] md:py-[96px] grid grid-cols-1 lg:grid-cols-2 gap-[64px]" id="contact">
                    <div>
                        <BlurFade className="">
                            <Badge className="text-[14px] font-[300] bg-black text-white">Contact</Badge>
                            <h1 className="text-[48px] font-[600]">Get In Touch</h1>
                            <p className="text-[18px] text-gray-500 font-[300]">Want to chat? Just shoot me a message here or connect on Linkedin and I will respond as soon as I can.</p>
                            <div className="flex flex-row gap-[16px] mt-[18px]">
                                <a href="https://www.linkedin.com/in/joshua-mahabir-901378217/" target="_blank" rel="noopener noreferrer">
                                    <img src="/linkedin.svg" alt="LinkedIn" className="w-[24px] h-[24px]" />
                                </a>
                                <a href="https://github.com/JoshFVO" target="_blank" rel="noopener noreferrer">
                                    <GithubIcon className="w-[24px] h-[24px]" />
                                </a>
                                <a href="mailto:joshmahabir2142@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Mail className="w-[24px] h-[24px]" />
                                </a>
                            </div>
                        </BlurFade>
                    </div>

                    <div>
                        <BlurFade className="">
                            <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="Name" className="text-[#181D27] text-[14px] font-normal ">Name <span className="text-[#EF7316]">*</span></Label>
                                <input
                                    placeholder="Enter your full name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full mt-[6px] text-[16px] font-light px-[14px] py-[10px] border-[1px] border-[#E9EAEB] shadow-sm rounded-[8px] box-border focus:outline-none focus:ring-0 focus:border-black transition-shadow ease-in-out duration-300" />
                            </div>
                            <div className="mt-[24px]">
                                <Label htmlFor="Email" className="text-[#181D27] text-[14px] font-normal">Email <span className="text-[#EF7316]">*</span></Label>
                                <input
                                    placeholder="Enter your email address"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-[6px] text-[16px] font-light w-full px-[14px] py-[10px] border-[1px] border-[#E9EAEB] shadow-sm rounded-[8px] box-border focus:outline-none focus:ring-0 focus:border-black transition-shadow ease-in-out duration-300" />
                            </div>
                            <div className="mt-[24px]">
                                <Label htmlFor="Message" className="text-[#181D27] text-[14px] font-normal">Message <span className="text-[#EF7316]">*</span></Label>
                                <Textarea
                                    placeholder="Leave a message..."
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="mt-[6px] min-h-[134px] text-[16px] font-light w-full px-[14px] py-[10px] border-[1px] border-[#E9EAEB] shadow-sm rounded-[8px] box-border focus:outline-none focus:ring-0 focus:border-black transition-shadow ease-in-out duration-300" />
                            </div>
                            <div className=" flex flex-row justify-center">
                            <Button
                                className="bg-black w-full text-white text-[16px] px-[24px] py-[24px] rounded-full mt-[24px] font-[400] hover:bg-black/80 transition-all duration-300 ease-out hover:cursor-pointer"
                                variant="default"
                                onClick={() => {
                                    
                                }}
                            >
                                Send Message
                            </Button>
                            </div>
                            </form>

                        </BlurFade>
                    </div>
                </div>





            </div>
        </div>
    )
}