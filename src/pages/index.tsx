import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import ProfilePicture from "../assets/round-profile-picture.png";
import LetHimCook from "../assets/let-him-cook-meme-.jpg";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-[#8cc2ff] font-mono">
      <header className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a] border-b border-[#2b2b2b]">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <div className="w-8 h-8 bg-[#8cc2ff] rounded-md flex items-center justify-center text-[#0f0f0f] font-bold text-xl">
            KZ
          </div>
          <span className="text-xl font-bold">Kuentinozaure</span>
        </Link>
      </header>
      <main>
        <section className="px-6 py-12 md:py-24 bg-[#1a1a1a] border-b border-[#2b2b2b]">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-start gap-4">
              <div className="bg-[#8cc2ff] rounded-md px-3 py-1 text-[#0f0f0f] font-bold text-sm">
                Software And Dinosaure Developer
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="glitch" data-text="Quentin">
                  Quentin
                </span>
              </h1>
              <p className="text-lg">
                I m a software developer who loves to code, play video games,
                and collect too much clothes in the thrift store. My skills
                include Frontend framework (Vue, React, Angular), Mobile (React
                native, Swift, Java / Kotlin), Javascript and his child (👀
                Typescript), Java and all the language.
              </p>
              <div className="flex gap-4">
                <Button>Hire Me</Button>
                <Button variant="outline">Want a dinosaure pics ?</Button>
              </div>
            </div>
            <div className="relative w-full h-[100px] md:h-[200px]">
              <Image
                src={ProfilePicture}
                alt="Profile Picture"
                className="object-contain"
                fill={true}
              />
            </div>
          </div>
        </section>
        <section className="px-6 py-12 md:py-24 bg-[#1a1a1a] border-b border-[#2b2b2b]">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-8">
              <div className="bg-[#8cc2ff] rounded-md px-3 py-1 text-[#0f0f0f] font-bold text-sm">
                Projects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span
                  className="glitch"
                  data-text="Blockchain IoT Microservices for Cats"
                >
                  Some of my Roarsome Projects 🦖
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[#8cc2ff]">
                {/* Meme boomer tracker */}
                <Card className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-md overflow-hidden">
                  <Image
                    src={LetHimCook}
                    alt="Project 1"
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-2xl font-bold">
                      <span className="" data-text="Meme boomer tracker">
                        Meme boomer tracker
                      </span>
                    </h3>
                    <p className="text-lg ">
                      A cutting-edge app that identifies when an internet meme
                      has gained popularity among older generations or has been
                      adopted by marketers on platforms like LinkedIn.
                    </p>
                  </CardContent>
                </Card>
                {/* Github lib ratio */}
                <Card className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-md overflow-hidden">
                  <Image
                    src={LetHimCook}
                    alt="Project 2"
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-2xl font-bold">
                      <span className="glitch" data-text="Github lib ratio">
                        Github lib ratio
                      </span>
                    </h3>
                    <p className="text-lg">
                      A cool tool that checks how reliable a library is by
                      analyzing open and closed issues. It generates fun,
                      easy-to-read reports and can integrate with your CI/CD
                      pipeline, helping you dodge those unreliable, unmaintained
                      libraries.
                    </p>
                  </CardContent>
                </Card>
                {/* Walkie talkie */}
                <Card className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-md overflow-hidden">
                  <Image
                    src={LetHimCook}
                    alt="Project 3"
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-2xl font-bold">
                      <span className="glitch" data-text="Walkie talkie">
                        Walkie talkie
                      </span>
                    </h3>
                    <p className="text-lg">
                      A real-time chat platform that lets users create instant
                      chat rooms and communicate anonymously. Inspired by the
                      concept of walkie-talkies, it offers quick, secure, and
                      identity-free communication. With one-click chat room
                      creation, no account needed, and a simple interface,
                      Walkie Talkie ensures you never miss a message.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-6 py-8 bg-[#1a1a1a] border-t border-[#2b2b2b]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 w-1/2">
            {/* Github icon */}
            <Link
              href="https://github.com/kuentinozaure"
              className="hover:underline"
              prefetch={false}
            >
              <GithubIcon className="w-6 h-6" />
            </Link>
            {/* Linkedin icon */}
            <Link
              href="https://www.linkedin.com/in/aubry-quentin/"
              className="hover:underline"
              prefetch={false}
            >
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-sm w-1/2 flex justify-end">
            &copy; 2024 Kuentinozaure. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
