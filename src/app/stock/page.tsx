import { Hubot_Sans, Fragment_Mono } from "next/font/google"
import Link from "next/link"
import TradeDashboard from "@/components/StockBoard"

const hubotSans = Hubot_Sans({
    variable: "--font-hubot-sans",
    subsets: ["latin"],
})
const fragmentMono = Fragment_Mono({
    weight:"400",
    variable: "--font-fragment-mono",
    subsets: ["latin"],
})

export default function Stock() {
    return(
        <div className={`${hubotSans.variable} bg-[#0E0E0E]`}>
            <div className="bg-[#0E0E0E] flex flex-col rounded-full gap-6 items-center justify-center">
                <h1 className="text-white font-mono text-5xl">Stock Market</h1>
                <Link href="/investors" className="text-black bg-white hover:bg-zinc-700 mt-6 hover:text-white rounded-full px-4 py-2 text-sm text-center">More Details</Link>
                <TradeDashboard />
            </div>
        </div>
    )
}