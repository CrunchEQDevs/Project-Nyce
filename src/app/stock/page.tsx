import { Hubot_Sans } from "next/font/google"
import Link from "next/link"
import stockInfo from "../../utils/trades_data2025.json"
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
                <TradeDashboard trades={stockInfo} />
            </div>
        </div>
    )
}