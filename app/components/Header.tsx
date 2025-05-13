import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "./icons/Githubicon"
import Link from "next/link"
import { LinkedinIcon } from "./icons/Linkedinicon"

export default function Header (){

    return (
        <header className="top-0 py-4">
            <div className="flex items-baseline max-w-3xl px-4 m-auto ">
                <h1 className="text-xl font-bold text-primary">
                Portfolio Thibaut Développeur
                </h1>
                <nav className="flex flex-1 justify-end">
                    <ul className="flex items-center gap-2">
                        <li>
                            <Link 
                                href="https://github.com/ThibautTobi"
                                aria-label="GitHub"
                                className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                            >
                            <GithubIcon size={12} className="text-foreground"/> 
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://www.linkedin.com/in/thibaut-denis-2b12b21b1/"
                                aria-label="Linkedin"
                                className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                            >
                            <LinkedinIcon size={12} className="text-foreground"/> 
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}