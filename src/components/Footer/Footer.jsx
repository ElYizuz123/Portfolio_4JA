import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { League_Spartan } from "next/font/google";

const league = League_Spartan({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],
});

const Footer = () => {
    return (
        <footer className="bg-black text-white z-50">
            <div className={league.className}>
                <div className="max-w-7xl mx-auto px-4 py-10">
                    <div class="flex items-center justify-center space-x-4 py-4">

                        <div class="flex-grow h-px bg-[#00afff]"></div>
                        <div class="flex space-x-5 text-gray-400">
                            <a
                                href="https://www.facebook.com/profile.php?id=61557055851178"
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                <FaFacebookF className="h-8 w-8" />
                            </a>
                            <a
                                href="https://wa.me/4431386613"
                                className="text-gray-400 hover:text-green-600 transition-colors"
                            >
                                <FaWhatsapp className="h-8 w-8" />
                            </a>
                            <a
                                href="https://www.instagram.com/official_4ja?igsh=MWQxcjlsNjcwbGtpMw%3D%3D&utm_source=qr"
                                className="text-gray-400 hover:text-pink-600 transition-colors"
                            >
                                <FaInstagram className="h-8 w-8" />
                            </a>
                            <a
                                href="https://www.git.com"
                                className="text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                <FaGithub className="h-8 w-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                className="text-gray-400 hover:text-[#0e76a8] transition-colors"
                            >
                                <FaLinkedin className="h-8 w-8" />
                            </a>
                        </div>
                        <div class="flex-grow h-px bg-[#00afff]"></div>
                    </div>

                    <div className="text-center text-gray-500 text-xs  font-bold">
                        <div className='flex items-center justify-center'>
                            <Image src={'/media/Logo.jpeg'} width={150} height={150} alt='Logo 4JA'></Image>
                        </div>
                        <div className="-mt-4">DESARROLLADO POR 4JA®</div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-6 items-center mb-4 sm:mb-0">

                        <Link className="text-center mx-5 subrayado-azul text-xl font-bold" href={"/"}>
                            ABOUT
                        </Link>
                        <Link className="text-center mx-5 subrayado-azul text-xl font-bold " href={"/work"}>
                            WORK
                        </Link>
                        <Link className="text-center mx-5 subrayado-azul text-xl font-bold " href={"/content"}>
                            CONTENT
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
