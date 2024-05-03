export default function DashboardSection() {
  
    return (
      <div className="flex w-full space-x-8 h-fit  space_y-5">
        <div className="text-justify flex-1 space-y-5">
          <div className="bg-white rounded-lg p-5">
            <p className="underline font-bold">Playing the waiting Game </p>
            <p className="text-gray-500/100">Its a big week for US results with almost 180 companies on the S&P500 due to report. We ask Kingsley Jones, Chief Investment Officer at Jevons Global as to how important is this earnings seasons and what does the economic data tell us about Fed Fund rate cuts. We also ask him if Australia will be the lucky country again with investors as the returns have been rather anemic for 2024 so far</p>
          </div>
          <div className="bg-white rounded-lg p-5">
            <p className="underline font-bold">US earnings Matter </p>
            <p className="text-gray-500/100">As we head into the thick of US reporting season, we ask Joe Quinlan, Chief Market Strategist at US Trust-BOA Private Wealth Management which matters more; earnings or Fed Fund rates. We also ask if it's too early to write off Japan and Korea which has seen heavy selling of late as investors lock in gains.</p>
          </div>
          <div className="bg-white rounded-lg p-5">
            <p className="underline font-bold">The Fed Still Cutting Rates</p>
            <p className="text-gray-500/100">There is increasingly speculation that the federal reserve might be raising rates with the US economy showing no signs of a slowdown. We ask Carlos Casanova, Senior Economist at UBP if that theory is a possibility. We also ask what impact a strong dollar has on emerging markets and will it force the hand of central banks to raise rates too?</p>
          </div>
        </div>
        <div className="text-justify flex-1 space-y-5">
          <div className="bg-white rounded-lg p-5">
            <p className="underline font-bold">US Corporate Results Driving Market Sentiment</p>
            <p className="text-gray-500/100">Meta, Boeing and Ford were some of the major US companies reporting earnings results overnight. Tony Nash, CEO of Complete Intelligence joins us to analyse how investors responded along with how commodities like gold and crude oil performed onvernight, along with how the Japanese yen has plumbed multi-decades lows against the US dollar.</p>
          </div>
          <div className="bg-white rounded-lg p-5">
          <p className="underline font-bold">The Magnificent Are Now The Fantastic Four</p>
          <p className="text-gray-500/100">Four out of the Magnificent 7 tech stocks have reported quarterly earnings. Mish Schneider, Chief Strategist, Market-Gauge.com tells us how much of a divergence are we seeing in terms of performance and why these results still matter in spite of the Fed keeping pat on rates.</p>
          </div>
        </div>
      </div>
    );
  }