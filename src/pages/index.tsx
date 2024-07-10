import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-[#8cc2ff] font-mono">
      <header className="flex items-center justify-between px-6 py-4 bg-[#1a1a1a] border-b border-[#2b2b2b]">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <div className="w-8 h-8 bg-[#8cc2ff] rounded-md flex items-center justify-center text-[#0f0f0f] font-bold text-xl">
            8B
          </div>
          <span className="text-xl font-bold">Hack the Planet</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Hack the Planet
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Slay Dragons
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Collect Rare Pepes
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
      <main>
        <section className="px-6 py-12 md:py-24 bg-[#1a1a1a] border-b border-[#2b2b2b]">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-start gap-4">
              <div className="bg-[#8cc2ff] rounded-md px-3 py-1 text-[#0f0f0f] font-bold text-sm">
                Software Wizard
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="glitch" data-text="Hack the Planet">
                  Hack the Planet
                </span>
              </h1>
              <p className="text-lg">
                I m a software developer who loves to code, play retro video
                games, and collect rare Pepes. My skills include C++,
                JavaScript, and Brainfuck. I also have a black belt in
                recursion.
              </p>
              <div className="flex gap-4">
                <Button>Hire Me</Button>
                <Button variant="outline">View Portfolio</Button>
              </div>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px]">
              <img
                src="/placeholder.svg"
                alt="Avatar"
                className="object-contain"
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
                  Blockchain IoT Microservices for Cats
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Project 1"
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-2xl font-bold">
                      <span
                        className="glitch"
                        data-text="Recursion Simulator 3000"
                      >
                        Recursion Simulator 3000
                      </span>
                    </h3>
                    <p className="text-lg">
                      A cutting-edge application that simulates the process of
                      recursion, complete with 8-bit graphics and chiptune
                      soundtrack.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Project 2"
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-2xl font-bold">
                      <span
                        className="glitch"
                        data-text="Quantum Entanglement Visualizer"
                      >
                        Quantum Entanglement Visualizer
                      </span>
                    </h3>
                    <p className="text-lg">
                      Explore the mind-bending world of quantum mechanics with
                      this interactive visualization tool, complete with glitchy
                      16-bit aesthetics.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Project 3"
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-2xl font-bold">
                      <span className="glitch" data-text="Meme Compiler 2.0">
                        Meme Compiler 2.0
                      </span>
                    </h3>
                    <p className="text-lg">
                      The ultimate tool for creating and sharing the dankest
                      memes on the internet, now with support for rare Pepes.
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
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              <GithubIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              <LinkedinIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              <InstagramIcon className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-sm">
            &copy; 2024 Hack the Planet. All rights reserved.
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

function InstagramIcon(
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
