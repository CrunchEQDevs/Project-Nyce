import { Hubot_Sans } from "next/font/google"
import Link from "next/link"
import TradeDashboard from "@/components/StockBoard"

const hubotSans = Hubot_Sans({
    variable: "--font-hubot-sans",
    subsets: ["latin"],
})

export default function Stock() {
    return(
        <div className={`${hubotSans.variable} bg-[#0E0E0E]`}>
            <div className="bg-[#0E0E0E] flex flex-col gap-6 items-center justify-center">
                <h1 className="text-white font-sans text-4xl">Stock</h1>
                <Link href="#" className="text-black bg-white hover:bg-zinc-700 mt-6 hover:text-white rounded-full px-4 py-2 text-sm text-center">More Details</Link>
                <TradeDashboard />
            </div>
        </div>
    )
}