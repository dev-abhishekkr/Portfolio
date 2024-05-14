import { ArrowBigLeft, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="m-10 pt-10 flex justify-around flex-col md:flex-row gap-4 items-center border-t border-teal-900">
        <div className="flex gap-7 text-yellow-500">
          <Link href="https://github.com/dev-abhishekkr">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/abhishek-kumar-0b6b1a211/">
            <Linkedin />
          </Link>
          <Link href="">
            <Mail />
          </Link>
          <Link href="https://twitter.com/firstofmirage">
            <Twitter />
          </Link>
        </div>
        <div className="">
          Made with <span className="text-emerald-400">❤</span> by{" "}
          <span>Abhishek.</span>
        </div>
      </div>
    </>
  );
}
