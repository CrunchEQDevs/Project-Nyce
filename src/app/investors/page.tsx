import { Hubot_Sans, Fragment_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

const hubotSans = Hubot_Sans({
    variable: "--font-hubot-sans",
    subsets: ["latin"],
})

const fragmentMono = Fragment_Mono({
    weight: "400",
    variable: "--font-fragment-mono",
    subsets: ["latin"],
})

export default function InvestorsPage() {
    return (
        <div className={`${hubotSans.variable} ${fragmentMono.variable} bg-[#0E0E0E]`}>
            {/* Header */}
            <div className="flex flex-col rounded-full gap-6 items-center justify-center p-4 sm:p-6 pt-10">
                <h1 className="text-white font-sans text-5xl sm:text-4xl md:text-5xl text-center">
                    Investors
                </h1>
                <Link href="#" className="bg-white text-black hover:bg-gray-700 hover:text-white rounded-full px-5 p-2 text-sm">
                    Learn More
                </Link>
            </div>
            
            {/* Business Description */}
            <div className="flex flex-col gap-6 space-y-2 items-start justify-center p-4 sm:p-6 md:p-10">
                <h1 className="text-yellow-400 font-sans text-2xl sm:text-3xl md:text-4xl">
                    Business Description
                </h1>
                <p className="text-white font-sans text-sm">
                    CXS is a leading technology firm specialising in the global distribution of B2B products and services within the betting and gaming industry and investing in innovative gaming technologies.
                </p>
                <p className="text-white font-sans text-sm">
                    CXS subsidiary company, NYCE International (www.nyceint.com) is a leading product marketplace for gaming operators, showcasing a suite of diverse products and services that covers all the key touch points for gaming operators and their customers. This includes betting platforms, game studios and aggregators, sports data, lotteries, risk management, affiliates, artificial intelligence, licensing, KYC, payments and more. NYCE manages a large global sales and executive network made up of industry veterans and trailblazers that are qualified to health check and compare products, services, and technologies to identify those that add value to operator brands globally.  
                </p>
                <h4 className="text-zinc-400 font-sans font-bold text-md">
                    Information about NYCE
                </h4>
                <p className="text-white font-sans text-sm">
                    Nyce International Limited, a Hong Kong based company, represents a gaming marketplace of intelligent, success-driven technologies and services that deliver measurable revenue growth and operational efficiency to gaming companies. Via their global network, NYCE accelerates the sales and product distribution process for the companies they represent, facilitating conversations at only the highest levels. NYCE exhibits at all the major gaming conferences worldwide to showcase its comprehensive product
                    portfolio that further drive revenue potential and brand trust.
                </p>
                <h5 className="text-zinc-400 font-sans font-bold text-md">
                    Information about Vision RGS and Game Aggregation Platform
                </h5>
                <p className="text-white font-sans text-sm">
                    The purchase of an instance of Reelsoft AB&apos;s Remote Gaming Server (RGS) and Game Aggregation Platform represents a strategic opportunity for CXS to synergetically integrate the portfolio of game content partners of NYCE and Virya in order to better promote and distribute to operators worldwide. 
                </p>
                <h5 className="text-zinc-400 font-sans font-bold text-md">
                    Information about Virya 
                </h5>
                <p className="text-white font-sans text-sm">
                    Virya, a UK based company, is a venture studio and investment firm that houses a multi-discipline advisory partner network with global access to deal flow within the betting and gaming industry. Virya provides executive and directorship services across all the key sub sectors of the industry being; product strategy, technology, AI, regulatory, licensing, compliance, affiliates marketing, payments and trading risk management.
                </p> 
    {/* Directors */}
<h1 className="text-yellow-400 font-sans font-semibold text-2xl sm:text-3xl mt-8 mb-8">
  Directors
</h1>

{/* Farzad */}
<div className="mb-16">
  <div className="flex flex-col md:flex-row gap-8">
    <div className="relative rounded-md  md:w-1/3 h-80 md:h-auto overflow-hidden">
      <Image
        src="/farzad.png"
        alt="Farzad Peyman"
        width={388}
        height={388}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="w-full md:w-2/3">
      <h2 className="text-white font-mono text-2xl md:text-3xl mb-2">
        Farzad Peyman
      </h2>
      <h3 className="text-zinc-400 font-sans mb-6 font-bold text-md uppercase">
        CEO
      </h3>
      <p className="text-white font-mono text-sm leading-relaxed">
        Farzad has 18 years&apos; operational iGaming experience in B2B and B2C across both publicly listed and private companies. He is a leader of significant business change, and regularly advises on product development, marketing, technology, M&A, corporate restructuring, regulation & licensing, compliance and financial control. Ex-CEO and CFO of Matchbook Betting Exchange, Farzad has brought to NYCE a strong community of independent specialist advisors investing in the most promising and sustainable projects across iGaming, Web3, Metaverse, Blockchain and AI technologies.
      </p>
      <div className="mt-6">
        <Link
          href="https://www.linkedin.com/in/farzad-peyman/"
          className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-2 text-sm inline-flex items-center justify-center w-10 h-10"
        >
          <Linkedin />
        </Link>
      </div>
    </div>
  </div>
</div>

{/* Harmen */}
<div className="mb-16">
  <div className="flex flex-col md:flex-row gap-8">
    <div className="relative rounded-md  md:w-1/3 h-80 md:h-auto overflow-hidden">
      <Image
        src="/harmen.png"
        alt="Harmen Brenninkmeijer"
        width={388}
        height={388}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="w-full md:w-2/3">
      <h2 className="text-white font-mono text-2xl md:text-3xl mb-2">
        Harmen Brenninkmeijer
      </h2>
      <h3 className="text-zinc-400 font-sans mb-6 font-bold text-md uppercase">
        Executive Chairman
      </h3>
      <p className="text-white font-mono text-sm leading-relaxed">
        Harmen has 20 years of experience in the betting and gaming industry. He has held senior positions at Betfair, Betsson, and BetConstruct. Harmen has a strong track record of delivering growth and profitability in the gaming industry. He has a deep understanding of the gaming industry and has a proven track record of delivering growth and profitability.
      </p>
      <div className="mt-6">
        <Link
          href="https://www.linkedin.com/in/hbmeijer/"
          className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-2 text-sm inline-flex items-center justify-center w-10 h-10"
        >
          <Linkedin />
        </Link>
      </div>
    </div>
  </div>
</div>
            {/* Seção de Advisers e Registered Office */}
            <div className="w-full py-12">
                <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Coluna de Advisers */}
                    <div>
                        <h2 className="text-yellow-400 font-sans text-3xl mb-8">Advisers</h2>
                        
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-zinc-400 font-sans text-sm">AQSE Corporate Adviser</p>
                                <p className="text-white font-sans">First Sentinel Corporate Finance Ltd</p>
                                <div className="h-px bg-zinc-800 w-full mt-4"></div>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-zinc-400 font-sans text-sm">Legal Adviser</p>
                                <p className="text-white font-sans">Fladgate LLP - 16 Great Queen Street, London WC2B 5DG</p>
                                <div className="h-px bg-zinc-800 w-full mt-4"></div>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-zinc-400 font-sans text-sm">Auditor</p>
                                <p className="text-white font-sans">MAH, Chartered Accountants, 2nd Floor, 154 Bishopsgate, London</p>
                                <div className="h-px bg-zinc-800 w-full mt-4"></div>
                            </div>
                            
                            <div className="space-y-">
                                <p className="text-zinc-400 font-sans text-sm">Registrars</p>
                                <p className="text-white font-sans">Neville Registrars Limited - Neville House, Steelpark Road, Halesowen</p>
                                <div className="h-px bg-zinc-800 w-full mt-4"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Coluna de Registered Office */}
                    <div className="ml-4">
                        <h2 className="text-yellow-400 font-sans text-3xl mb-8">Registered Office</h2>
                        
                        <div className="space-y-2 mb-8">
                            <p className="text-zinc-400 font-sans text-sm">Location</p>
                            <p className="text-white font-sans">16 Great Queen Street, London, WC2B 5DG</p>
                            <div className="h-px bg-zinc-800 w-full mt-4"></div>
                        </div>
                        
                        <h2 className="text-yellow-400 font-sans text-3xl mt-16 mb-8">Company Documents</h2>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <p className="text-zinc-400 font-sans text-sm">Date</p>
                                <p className="text-zinc-400 font-sans text-sm">Document</p>
                            </div>
                            
                            <div className="flex justify-between">
                                <p className="text-white font-sans">06, March, 2025</p>
                                <Link href="#" className="text-white font-sans underline hover:text-yellow-400">
                                    Memorandum and Articles of Association
                                </Link>
                            </div>
                            
                            <div className="flex justify-between">
                                <p className="text-white font-sans">06, March, 2025</p>
                                <Link href="#" className="text-white font-sans underline hover:text-yellow-400">
                                    Certificate of Incorporation
                                </Link>
                            </div>
                            <div className="h-px bg-zinc-800 w-full mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Seção de Corporate Governance e Circulars and Notices */}
            <div className="w-full  py-8">
                <div className="grid grid-cols-2 gap-2 max-w-6xl mx-auto">
                    {/* Coluna de Corporate Governance */}
                    <div>
                        <h2 className="text-yellow-400 font-sans text-3xl mb-8">Corporate Governance</h2>
                        
                        <p className="text-white font-sans text-sm leading-relaxed">
                            An Audit Committee is established and comprises John May and 
                            Stuart Adam. The Committee meets with the auditors, considers the 
                            results and the audit process, and satisfies itself as to the auditor's 
                            independence. The Company has a Remuneration Committee, which 
                            is comprised of John May and Harmen Brenninkmeijer. The Aquis Rule 
                            Compliance Committee comprises Farzad Peyman and Stuart Adam 
                            and coordinates with the Corporate Advisor to monitor Aquis rule 
                            compliance.
                        </p>
                    </div>
                    
                    {/* Coluna de Circulars and Notices */}
                    <div className="ml-4">
                        <h2 className="text-yellow-400 font-sans text-3xl mb-8">Circulars and Notices</h2>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <p className="text-zinc-400 font-sans text-sm">Date</p>
                                <p className="text-zinc-400 font-sans text-sm">Title</p>
                            </div>
                            
                            <div className="flex justify-between">
                                <p className="text-white font-sans">06, March, 2025</p>
                                <Link href="#" className="text-white font-sans underline hover:text-yellow-400">
                                    Notice of General Meeting – 6/8/24
                                </Link>
                            </div>
                            
                            <div className="flex justify-between">
                                <p className="text-white font-sans">06, March, 2025</p>
                                <Link href="#" className="text-white font-sans underline hover:text-yellow-400">
                                    Proxy – General Meeting 22/8/2024
                                </Link>
                            </div>
                            
                            <div className="flex justify-between">
                                <p className="text-white font-sans">06, March, 2025</p>
                                <Link href="#" className="text-white font-sans underline hover:text-yellow-400">
                                    Subscription and Admission to trading
                                </Link>
                            </div>
                            
                            <div className="flex justify-between">
                                <p className="text-white font-sans">06, March, 2025</p>
                                <Link href="#" className="text-white font-sans underline hover:text-yellow-400">
                                    Notice of General Meeting – 6/8/24
                                </Link>
                            </div>
                            <div className="h-px bg-zinc-800 w-full mt-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Seção de Major Shareholders */}
            <div className="w-full px-10 py-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-yellow-400 font-sans text-3xl mb-8">Major Shareholders</h2>
                    
                    <div className="space-y-4">
                        <p className="text-zinc-400 font-sans text-sm">Shares in Issue</p>
                        <p className="text-white font-sans">ChallengerX plc Ordinary shares of 0.10 pence.</p>
                        
                        <p className="text-zinc-400 font-sans text-sm mt-4">Number of shares in issue:</p>
                        <p className="text-white font-sans">1,449,880,556</p>
                        
                        <p className="text-zinc-400 font-sans text-sm mt-4">Number of shares in public hands:</p>
                        <p className="text-white font-sans">43.66%</p>
                        
                        <p className="text-white font-sans mt-4">
                            The Company's shares are traded on the Access segment of the Aquis Stock Exchange Growth Market under the symbol: CXS
                        </p>
                        
                        <p className="text-white font-sans mt-4">
                            There are no restrictions on the free transferability of fully paid Ordinary Shares provided that the transfers are in favor of not more than four transferees, the transfers are in 
                            respect of only one class of share and the provisions in the Articles, if any, relating to registration of transfers have been complied with.
                        </p>
                        
                        <p className="text-white font-sans mt-4">
                            There are 1,546,341 shares in the Treasury.
                        </p>
                        
                        <p className="text-white font-sans mt-4">
                            The Company currently has 366,975,850 warrants in issue representing 25.34% of the enlarged share capital.
                        </p>
                        <div className="h-px bg-zinc-800 w-full mt-8"></div>
                    </div>
                </div>
            </div>

              {/* Significant Shareholders with table */}
              <div className="w-full px-4 sm:px-6 md:px-10 py-6 md:py-8">
                  <div className="max-w-6xl mx-auto">
                      <h2 className="text-yellow-400 font-sans text-2xl sm:text-3xl mb-4 md:mb-6">Significant Shareholders</h2>
                      
                      <p className="text-white font-sans text-sm mb-6 md:mb-8">
                          Based on information provided to the Company as at 6 March 2025, as far as the Directors are aware, the following are Directors or shareholders interested in 5% or more of the 
                          issued share capital of the company.
                      </p>
                      
                      {/* Shareholders table - Horizontal scroll on small screens */}
                      <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                              <thead>
                                  <tr className="bg-zinc-900">
                                      <th className="text-left p-3 md:p-4 text-white font-sans">Name</th>
                                      <th className="text-left p-3 md:p-4 text-white font-sans">No. Ordinary Shares</th>
                                      <th className="text-left p-3 md:p-4 text-white font-sans">% Issued Share Capital</th>
                                      <th className="text-left p-3 md:p-4 text-white font-sans">Notes</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className="border-t bg-zinc-600 border-zinc-800">
                                      <td className="p-3 md:p-4 text-white font-sans">Global Chain Limited</td>
                                      <td className="p-3 md:p-4 text-white font-sans">400,000,000</td>
                                      <td className="p-3 md:p-4 text-white font-sans">27.62%</td>
                                      <td className="p-3 md:p-4 text-white font-sans">1</td>
                                  </tr>
                                  <tr className="border-t  border-zinc-800">
                                      <td className="p-3 md:p-4 text-white font-sans">Hub Affiliations Holdings</td>
                                      <td className="p-3 md:p-4 text-white font-sans">145,000,000</td>
                                      <td className="p-3 md:p-4 text-white font-sans">10.01%</td>
                                      <td className="p-3 md:p-4 text-white font-sans">0</td>
                                  </tr>
                                  <tr className="border-t bg-zinc-600 border-zinc-800">
                                      <td className="p-3 md:p-4 text-white font-sans">Dominique Einhorn</td>
                                      <td className="p-3 md:p-4 text-white font-sans">61,875,000</td>
                                      <td className="p-3 md:p-4 text-white font-sans">4.27%</td>
                                      <td className="p-3 md:p-4 text-white font-sans">3</td>
                                  </tr>
                                  <tr className="border-t border-zinc-800">
                                      <td className="p-3 md:p-4 text-white font-sans">Farzad Peyman</td>
                                      <td className="p-3 md:p-4 text-white font-sans">50,000,000</td>
                                      <td className="p-3 md:p-4 text-white font-sans">3.45%</td>
                                      <td className="p-3 md:p-4 text-white font-sans">2</td>
                                  </tr>
                                  <tr className="border-t bg-zinc-600 border-zinc-800">
                                      <td className="p-3 md:p-4 text-white font-sans">City & Westminster Corporate Finance LLP</td>
                                      <td className="p-3 md:p-4 text-white font-sans">26,866,668</td>
                                      <td className="p-3 md:p-4 text-white font-sans">1.86%</td>
                                      <td className="p-3 md:p-4 text-white font-sans">4</td>
                                  </tr>
                                  <tr className="border-t border-zinc-800">
                                      <td className="p-3 md:p-4 text-white font-sans">John May</td>
                                      <td className="p-3 md:p-4 text-white font-sans">3,150,000</td>
                                      <td className="p-3 md:p-4 text-white font-sans">0.22%</td>
                                      <td className="p-3 md:p-4 text-white font-sans">0</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      
                      {/* Explanatory notes */}
                      <div className="mt-6 space-y-2">
                          <p className="text-white font-sans text-sm">
                              <span className="font-bold">1.</span> Harmen Brenninkmeijer holds 75% of Global Chain Limited. And Harmen directly holds 18,750,000 (1.29%) of the Company. Harmen holds 22.01% in total.
                          </p>
                          <p className="text-white font-sans text-sm">
                              <span className="font-bold">2.</span> Farzad Peyman also indirectly hold 56,700,000 (3.91%) of the Company via Virya Solutions Group Limited. Farzad holds 7.37% in total.
                          </p>
                          <p className="text-white font-sans text-sm">
                              <span className="font-bold">3.</span> Dominique Einhorn holds 77% of M6 Limited, and M6 Limited hold 37,500,000 (2.59%) of the Company. Dominique holds 5.23% in total.
                          </p>
                          <p className="text-white font-sans text-sm">
                              <span className="font-bold">4.</span> City &amp; Westminster Corporate Finance LLP is controlled by Stuart Adam and John May.
                          </p>
                      </div>
                  </div>
              </div>

{/* Regulatory Announcements - Horizontal layout with dates and titles side by side */}
<div className="w-full px-4 sm:px-6 md:px-10 py-6 md:py-8">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-yellow-400 font-sans text-2xl sm:text-3xl mb-6 md:mb-8">Regulatory Announcements</h2>
        
        {/* Headers for columns */}
        <div className="flex flex-row mb-4">
            <div className="w-1/3">
                <p className="text-zinc-400 font-sans text-sm">Date</p>
            </div>
            <div className="w-2/3">
                <p className="text-zinc-400 font-sans text-sm">Title</p>
            </div>
        </div>
        
        {/* Announcement items */}
        <div className="space-y-5">
            {/* Item 1 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">TR1 NOTIFICATION OF MAJOR HOLDINGS Tunch Kashif</Link>
                    </p>
                </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">ChallengerX Plc – Management Accounts for the quarters ended 30 June 2024 and 31 March 2024</Link>
                    </p>
                </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">ChallengerX Signs Exclusive Digital Asset Monetization Agreement with New Zealand Rugby Legend, Liam Messam.</Link>
                    </p>
                </div>
            </div>
            
            {/* Item 4 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">ChallengerX Plc – Management Accounts for the quarters ended 30 June 2024 and 31 March 2024</Link>
                    </p>
                </div>
            </div>
            
            {/* Item 5 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">ChallengerX Signs Exclusive Digital Asset Monetization Agreement with New Zealand Rugby Legend, Liam Messam.</Link>
                    </p>
                </div>
            </div>
            
            {/* Item 6 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">TR1 NOTIFICATION OF MAJOR HOLDINGS Tunch Kashif</Link>
                    </p>
                </div>
            </div>
            
            {/* Item 7 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">ChallengerX Plc – Management Accounts for the quarters ended 30 June 2024 and 31 March 2024</Link>
                    </p>
                </div>
            </div>
            
            {/* Item 8 */}
            <div className="flex flex-row items-center">
                <div className="w-1/3">
                    <p className="text-white font-sans">06, March, 2025 09:37</p>
                </div>
                <div className="w-2/3">
                    <p className="text-white font-sans hover:text-yellow-400">
                        <Link href="#">ChallengerX Signs Exclusive Digital Asset Monetization Agreement with New Zealand Rugby Legend, Liam Messam.</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
          </div>
        </div>
    );
}