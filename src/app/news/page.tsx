import { Hubot_Sans, Fragment_Mono } from "next/font/google"


const hubotSans = Hubot_Sans({
    variable: "--font-hubot-sans",
    subsets: ["latin"],
})
const fragmentMono = Fragment_Mono({
    weight:"400",
    variable: "--font-fragment-mono",
    subsets: ["latin"],
})

export default function NewsPage(){
    return (
        <div className={`${hubotSans.variable} ${fragmentMono.variable} bg-[#0E0E0E]`}>
            <h1 className="text-white font-mono text-5xl">
                News Page
            </h1>
        </div>
    )
}