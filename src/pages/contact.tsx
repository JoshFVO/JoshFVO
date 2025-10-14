import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, Mail } from "lucide-react"

export default function Contact() {

    const [status, setStatus] = useState<string>("idle")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            await fetch("/", {
                method: "POST",
                body: formData,
            });
            setStatus("success");
            form.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };


    return (
        <div>
            <Navbar />
            <div className="max-w-[1200px] mx-auto px-[16px] md:px-[32px] min-h-[90vh] flex items-center py-[64px] md:py-[96px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] w-full" id="contact">
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
                            <form
                                name="contact-section"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="form-name" value="contact-section" />

                                <div>
                                    <Label htmlFor="Name" className="text-[#181D27] text-[14px] font-normal ">Name <span className="text-[#EF7316]">*</span></Label>
                                    <input
                                        placeholder="Enter your full name"
                                        name="full-name"
                                        required
                                        className="w-full mt-[6px] text-[16px] font-light px-[14px] py-[10px] border-[1px] border-[#E9EAEB] shadow-sm rounded-[8px] box-border focus:outline-none focus:ring-0 focus:border-black transition-shadow ease-in-out duration-300" />
                                </div>
                                <div className="mt-[24px]">
                                    <Label htmlFor="Email" className="text-[#181D27] text-[14px] font-normal">Email <span className="text-[#EF7316]">*</span></Label>
                                    <input
                                        placeholder="Enter your email address"
                                        name="email"
                                        type="email"
                                        required
                                        className="mt-[6px] text-[16px] font-light w-full px-[14px] py-[10px] border-[1px] border-[#E9EAEB] shadow-sm rounded-[8px] box-border focus:outline-none focus:ring-0 focus:border-black transition-shadow ease-in-out duration-300" />
                                </div>
                                <div className="mt-[24px]">
                                    <Label htmlFor="Message" className="text-[#181D27] text-[14px] font-normal">Message <span className="text-[#EF7316]">*</span></Label>
                                    <Textarea
                                        placeholder="Leave a message..."
                                        name="message"
                                        required
                                        className="mt-[6px] min-h-[134px] text-[16px] font-light w-full px-[14px] py-[10px] border-[1px] border-[#E9EAEB] shadow-sm rounded-[8px] box-border focus:outline-none focus:ring-0 focus:border-black transition-shadow ease-in-out duration-300" />
                                </div>
                                <div className=" flex flex-row justify-center">
                                    <Button
                                        type="submit"
                                        className="bg-black w-full text-white text-[16px] px-[24px] py-[24px] rounded-full mt-[24px] font-[400] hover:bg-black/80 transition-all duration-300 ease-out hover:cursor-pointer"
                                        variant="default"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </form>

                            {status === "success" && (
                                <div className="mt-[24px] p-[16px] bg-green-100 text-green-800 rounded-[8px]">
                                    Thanks for your message! I'll be in touch shortly.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="mt-[24px] p-[16px] bg-red-100 text-red-800 rounded-[8px]">
                                    Oops! Something went wrong. Please try again later.
                                </div>
                            )}

                        </BlurFade>
                    </div>
                </div>
            </div>
        </div>
    )

}