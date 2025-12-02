import type { Level, Option } from './types';

export const GAME_WIDTH = 1400;
export const GAME_HEIGHT = 768;

export const PLAYER_SPEED = 5;
export const GRAVITY = 0.8;
export const JUMP_STRENGTH = 16;

export const INITIAL_BOARD_TRUST = 50; // percentage

const PLATFORM_HEIGHT = GAME_HEIGHT - 80;

const SHARED_PLATFORMS = [
    // Main ground
    { id: 1, x: 0, y: PLATFORM_HEIGHT, width: GAME_WIDTH, height: 80 }, 
];

export const KEY_TAKEAWAYS = [
    { title: "Mission & Vision", text: "A clear Mission and Vision provides the necessary long-term direction to unify diverse SBUs." },
    { title: "Three Horizons", text: "Allocate resources across core business (H1), emerging growth (H2), and future options (H3) to ensure longevity." },
    { title: "Strategic Foresight", text: "Treat Megatrends not as threats, but as opportunities to shape the market before an Inflexion Point." },
    { title: "Resources vs. Capabilities", text: "Physical assets are just resources; unique routines and expertise are the Capabilities that create competitive advantage." },
    { title: "Industry Structure", text: "You can actively shape industry structure by increasing barriers to entry and switching costs." },
    { title: "Portfolio Strategy", text: "Exit industries with structurally low returns (low ROIC) regardless of short-term growth." },
    { title: "Growth Vectors", text: "Market Development (existing product, new market) is often safer than Unrelated Diversification." },
    { title: "Capital Allocation", "text": "Protect Cash Cows to fund future growth; don't starve the engines of your cash flow." },
    { title: "M&A Integration", text: "Prioritize Organizational Fit and culture over immediate 'synergies' to preserve value." },
    { title: "Competitive Advantage", text: "Avoid being 'Stuck in the Middle.' Commit to a clear strategy—either Cost Leadership or Differentiation." }
];

export const LEVELS: { [key: number]: Level } = {
    1: {
        id: 1,
        platforms: SHARED_PLATFORMS,
        doors: [
            { id: 1, x: 300, y: PLATFORM_HEIGHT - 120, scenarioId: 1 },
            { id: 2, x: 600, y: PLATFORM_HEIGHT - 120, scenarioId: 2 },
            { id: 3, x: 900, y: PLATFORM_HEIGHT - 120, scenarioId: 3 },
        ],
        collectibles: [
            { id: 101, x: 150, y: PLATFORM_HEIGHT - 150, collected: false },
            { id: 102, x: 450, y: PLATFORM_HEIGHT - 180, collected: false },
            { id: 103, x: 750, y: PLATFORM_HEIGHT - 150, collected: false },
            { id: 104, x: 1050, y: PLATFORM_HEIGHT - 180, collected: false },
        ],
        scenarios: [
            {
                id: 1,
                title: "The Identity Crisis",
                prompt: "Aalto Industries has grown so complex, its various SBUs often contradict each other. The Core Manufacturing SBU focuses on legacy products, while the Tech & Software SBU pursues aggressive, high-risk growth. The Board demands a new strategic charter to unify the firm.",
                options: [
                    { 
                        text: "A. The Reactive Plan: Write a two-year Business Plan focusing only on next quarter’s profits.", 
                        trustChange: -10,
                        outcome: "Focusing only on short-term profits is financially expedient, but strategically weak. The Board finds this proposal short-sighted and inconsistent with our long-term survival."
                    },
                    { 
                        text: "B. The Foundational Reset: Reaffirm the Mission (Purpose), define clear Core Values, and establish a 10-year Vision.", 
                        trustChange: 20,
                        outcome: "This is the essential starting point. Establishing a clear Mission and Vision provides the necessary long-term direction and a common language to align our diverse SBUs. The Board sees the wisdom in creating a shared organizational purpose."
                    },
                    { 
                        text: "C. The SBU Dictate: Force all SBUs to adopt the strategy of the highest-performing SBU (Tech & Software).", 
                        trustChange: -15,
                        outcome: "Imposing one SBU's strategy on the entire conglomerate ignores the unique competitive contexts of our other businesses. This is a one-size-fits-all mistake that risks alienating half the company."
                    },
                ],
            },
            {
                id: 2,
                title: "The Future Investment",
                prompt: "The Tech SBU generates massive cash flow but has no clear pipeline beyond next year. We need to allocate $500M to future projects, but the R&D team presents 15 small, incremental updates (Horizon 1) and one massive, high-risk project 7 years away (Horizon 3).",
                options: [
                    { 
                        text: "A. The Big Bet: Put all $500M into the single high-risk Horizon 3 project for maximum potential return.", 
                        trustChange: -10,
                        outcome: "Placing all our capital on a distant Horizon 3 project is exciting but dangerously exposed to risk and uncertain market evolution. We must develop the medium-term path first."
                    },
                    { 
                        text: "B. The Status Quo: Allocate the entire $500M to the incremental Horizon 1 updates, guaranteeing short-term stability.", 
                        trustChange: -5,
                        outcome: "Over-investing in incremental Horizon 1 updates guarantees obsolescence. Without allocating capital to Horizon 2 (Emerging Growth), we lack a viable pipeline to ensure long-term direction."
                    },
                    { 
                        text: "C. The Balanced View: Allocate the budget to maintain the core (H1), invest in emerging growth areas (H2), and seed the high-risk project (H3).", 
                        trustChange: 20,
                        outcome: "Perfect. By allocating resources across all Three Horizons, we protect our current cash flow (H1), invest in emerging businesses (H2), and seed future options (H3). This demonstrates strategic foresight and ensures long-term continuity."
                    },
                ],
            },
            {
                id: 3,
                title: "The Market Forecast",
                prompt: "Your PESTEL team has detected a global shift: new carbon tax regulations are sweeping across key markets (Environmental/Legal). Most competitors see this as a high-impact tax (Threat) but manageable. Your Chief Strategist believes it's a Megatrend indicating a fundamental industry shift.",
                options: [
                    { 
                        text: "A. The Crisis Mode: Immediately lobby governments to reverse the tax, assuming the change is temporary (P).", 
                        trustChange: -10,
                        outcome: "Lobbying only addresses the symptom (the tax), not the fundamental driver of change. This approach misreads the Megatrend and leaves us unprepared for the inevitable Inflexion Point."
                    },
                    { 
                        text: "B. The Transformative Investment: Reframe the challenge. Launch a new SBU focused on carbon-neutral technology as an Opportunity built on the Megatrend.", 
                        trustChange: 20,
                        outcome: "Excellent read on the external environment! We must treat this not as a tax, but as a strategic Opportunity born from a Megatrend. This pro-active approach, anticipating the Inflexion Point, positions us as a market shaper, not just a survivor."
                    },
                    { 
                        text: "C. The Scenario Blindness: Ignore the shift, assuming the tax won't affect us because we are a multinational firm.", 
                        trustChange: -15,
                        outcome: "Ignoring a factor flagged by PESTEL simply because it's a 'Weak Signal' is reckless. Strategic blindness leads to crisis when the market accelerates."
                    },
                ],
            },
        ],
        // Level 1 Visuals (Morning - previously Level 3 assets)
        backgroundColor: '#D1D5DB',
        windowFrameColor: '#9CA3AF',
        skyColors: { stop1: '#3B82F6', stop2: '#BFDBFE' },
        floorStyle: 'checkerboard',
        floorColors: { tile1: '#BFDBFE', tile2: '#FFFFFF' },
    },
    2: {
        id: 2,
        platforms: SHARED_PLATFORMS,
        doors: [
            { id: 4, x: 300, y: PLATFORM_HEIGHT - 120, scenarioId: 4 },
            { id: 5, x: 600, y: PLATFORM_HEIGHT - 120, scenarioId: 5 },
            { id: 6, x: 900, y: PLATFORM_HEIGHT - 120, scenarioId: 6 },
        ],
        collectibles: [
            { id: 201, x: 100, y: PLATFORM_HEIGHT - 200, collected: false },
            { id: 202, x: 500, y: PLATFORM_HEIGHT - 250, collected: false },
            { id: 203, x: 800, y: PLATFORM_HEIGHT - 200, collected: false },
            { id: 204, x: 1100, y: PLATFORM_HEIGHT - 220, collected: false },
        ],
        scenarios: [
            {
                id: 4,
                title: "The Internal Engine",
                prompt: "The Manufacturing SBU reports aging machinery (Resource weakness). They request corporate investment, arguing their unique routine for rapidly scaling new product lines (Capability strength) justifies the upgrade. The CEO must approve capital only if the capability is truly unique.",
                options: [
                    { 
                        text: "A. The Buying Spree: Approve funding immediately for the machinery (Physical Resource) alone, expecting immediate strategic parity.", 
                        trustChange: -5,
                        outcome: "Acquiring generic Resources (machinery) only offers short-term parity. Competitors can easily buy the same asset. This move does not build a truly Distinctive Capability."
                    },
                    { 
                        text: "B. The Capability Crush: Reject the funding and mandate the sale of all aging machinery and long-tenured production management staff.", 
                        trustChange: -25,
                        outcome: "This is a strategic mistake! The unique value lies in the human expertise and routine—the Capability—which we just destroyed for a short-term cut. Resources are assets; Capabilities are what make them valuable."
                    },
                    { 
                        text: "C. The Leveraging Plan: Approve funding, mandating that the SBU successfully integrates the new machinery with their unique scaling routine (Capability) to create a proprietary advantage.", 
                        trustChange: 20,
                        outcome: "The goal is to acquire the modern Resource and successfully integrate it with our existing, non-imitable Capability (the unique scaling routine). This turns a generic asset into a proprietary Distinctive Capability."
                    },
                ],
            },
            {
                id: 5,
                title: "The Market Structure Challenge",
                prompt: "Your Tech SBU is entering the highly fragmented 'smart home security' market. It's crowded, but buyers are currently disorganized. However, a major tech platform (a large Complementor) is threatening to integrate vertically and supply the entire market itself.",
                options: [
                    { 
                        text: "A. The Price War: Immediately slash prices to beat rivals and gain market share quickly.", 
                        trustChange: -10,
                        outcome: "A price war will only trigger an aggressive response from rivals, destroying industry profits for everyone. It fails to address the underlying structural force of rising Buyer Power/Complementor threat."
                    },
                    { 
                        text: "B. The Regulatory Blitz: Lobby the government to break up the large tech platform.", 
                        trustChange: 0,
                        outcome: "Relying on slow, uncertain Politics & Law to fix our strategic problems is not a sustainable market position. We must find a way to thrive within the current industry structure."
                    },
                    { 
                        text: "C. The Defensible Niche: Create high switching costs for buyers and negotiate exclusive supplier deals, thereby reducing the Bargaining Power of Buyers and building barriers to entry.", 
                        trustChange: 20,
                        outcome: "This actively shapes the industry. By creating high switching costs, we reduce the Bargaining Power of Buyers, increase barriers to entry, and improve the long-term structural attractiveness of our market."
                    },
                ],
            },
            {
                id: 6,
                title: "The Global Scope",
                prompt: "Aalto Industries needs to shed 10% of its capital. The choice is between divesting SBU X (low-growth, average profitability) or SBU Y (high-growth, but an industry with a terrible long-term average Return on Invested Capital, or ROIC).",
                options: [
                    { 
                        text: "A. The Profit Maximizer: Divest SBU X because its current profitability is merely average.", 
                        trustChange: -5,
                        outcome: "Focusing only on SBU X's current profit ignores the gravity of industry structure. We must exit the industry (SBU Y) that is structurally doomed to low returns, regardless of its short-term performance."
                    },
                    { 
                        text: "B. The Structural Exit: Divest SBU Y, despite high growth, because the industry's underlying structural economics suggest chronically low returns.", 
                        trustChange: 20,
                        outcome: "An excellent strategic choice. The low Average ROIC for SBU Y's industry indicates a structurally unattractive market (due to weak Five Forces). We exit the structurally poor industry (divestiture) to reinvest where competitive forces allow for higher returns."
                    },
                    { 
                        text: "C. The Product Overhaul: Launch a radically new product into the existing core market (Product Development).", 
                        trustChange: -5,
                        outcome: "While good, focusing on product development doesn't solve the portfolio management issue. The decision must be about which industry is fundamentally worth competing in."
                    },
                ]
            }
        ],
        // Level 2 Visuals (Afternoon - previously Level 1 assets)
        backgroundColor: '#4A5568',
        windowFrameColor: '#2D3748',
        skyColors: { stop1: '#87CEEB', stop2: '#E0F6FF' },
        floorStyle: 'grid',
        floorColors: { tile1: '#CED4DA', tile2: '#BCC6D1' },
    },
    3: {
        id: 3,
        platforms: SHARED_PLATFORMS,
        doors: [
            { id: 7, x: 300, y: PLATFORM_HEIGHT - 120, scenarioId: 7 },
            { id: 8, x: 600, y: PLATFORM_HEIGHT - 120, scenarioId: 8 },
            { id: 9, x: 900, y: PLATFORM_HEIGHT - 120, scenarioId: 9 },
        ],
        collectibles: [
            { id: 301, x: 200, y: PLATFORM_HEIGHT - 200, collected: false },
            { id: 302, x: 400, y: PLATFORM_HEIGHT - 300, collected: false }, // Requires jump
            { id: 303, x: 800, y: PLATFORM_HEIGHT - 250, collected: false },
            { id: 304, x: 1200, y: PLATFORM_HEIGHT - 200, collected: false },
        ],
        scenarios: [
            {
                id: 7,
                title: "The Diversification Dilemma",
                prompt: "The Board is pressing for growth. The CEO is presented with two options for a new $2B investment: 1. Launch a new product line in a completely new, unrelated industry. 2. Develop a slightly modified product to sell in new international markets.",
                options: [
                    { 
                        text: "A. The Unrelated Leap: Choose option 1 (new product, new market) for maximum growth potential.", 
                        trustChange: -15,
                        outcome: "Unrelated diversification is fraught with risk, especially without clearly defined Parenting Advantages to add value. It rarely works and dilutes focus away from core competencies."
                    },
                    { 
                        text: "B. The Focused Effort: Choose option 2, launching an existing product type into new international markets.", 
                        trustChange: 20,
                        outcome: "This is the responsible path. Market Development (using existing product technology in a new geography) is a far less risky growth vector than unrelated diversification. It leverages our current capabilities and focuses on controlled expansion."
                    },
                    { 
                        text: "C. The Product Overhaul: Launch a radically new product into the existing core market (Product Development).", 
                        trustChange: -5,
                        outcome: "Product development is a good path, but Market Development often presents lower project management risk by exploiting existing, proven products."
                    },
                ],
            },
            {
                id: 8,
                title: "The SBU Efficiency Grid",
                prompt: "The Corporate Centre must make annual budget approvals. The Logistics SBU is generating high cash but has low growth (Cash Cow). A new SBU is hemorrhaging cash but operates in a high-growth market (Question Mark). The Board wants to cut cash-draining units.",
                options: [
                    { 
                        text: "A. The Cash Cow Cut: Divest the Logistics SBU (Cash Cow) to free up capital.", 
                        trustChange: -25,
                        outcome: "Cutting a Cash Cow is strategically backward! These low-growth, high-share units are essential to provide the surplus cash flow needed to fund risky Question Marks and high-potential Stars."
                    },
                    { 
                        text: "B. The Reckless Fund: Immediately pump unlimited cash into the new, cash-draining SBU.", 
                        trustChange: -15,
                        outcome: "We cannot blindly fund a cash-draining unit just because it's high growth. It must demonstrate a high relative competitive position (McKinsey Matrix) or be a strategically necessary Question Mark (BCG) to warrant the funding."
                    },
                    { 
                        text: "C. The Balanced Flow: Protect the Logistics SBU (Cash Cow), using its surplus cash to selectively fund the new unit, while demanding a plan to improve its relative competitive position.", 
                        trustChange: 20,
                        outcome: "Disciplined capital allocation requires protecting our Cash Cows to fund our growth businesses. This application of the Portfolio Matrix (BCG/McKinsey) ensures we maintain financial balance and strategic focus."
                    },
                ],
            },
            {
                id: 9,
                title: "The M&A Integration",
                prompt: "We are acquiring a high-tech company, Target Zeta, primarily for their unique IP and R&D talent (Strategic Fit). Target Zeta's culture is loose and innovative; Aalto Industries is hierarchical and bureaucratic. The CEO must decide the integration path for this soft asset.",
                options: [
                    { 
                        text: "A. The Synergistic Slam: Immediately impose Aalto Industries centralized HR, IT, and process systems to ensure maximum synergy realization.", 
                        trustChange: -20,
                        outcome: "Major integration failure! This approach prioritizes synergy speed over retention, destroying the soft capabilities we paid for. A lack of Organizational Justice guarantees that the acquired R&D talent will walk away."
                    },
                    { 
                        text: "B. The Hands-Off Approach: Let Target Zeta operate fully independently forever, simply reporting results to the Board.", 
                        trustChange: -5,
                        outcome: "While protecting the culture is good, perpetual independence means we fail to leverage their IP across the conglomerate. We must find a way to integrate selectively."
                    },
                    { 
                        text: "C. The Phased Integration: Delay structural integration for 12 months, focusing on Procedural Justice and preserving the unique culture, accepting that the realization of synergies will be slower and more complex.", 
                        trustChange: 20,
                        outcome: "Prioritizing Organizational Fit is essential, but be warned: This is the ideal Unelmaskenaario—it requires immense discipline, strong Informational Justice, and managerial capacity to handle dual systems for 12 months to succeed. The complexity risk is high."
                    },
                ],
            },
        ],
        // Level 3 Visuals (Night - previously Level 2 assets)
        backgroundColor: '#C5AE91',
        windowFrameColor: '#8C6D4F',
        skyColors: { stop1: '#2C2D5A', stop2: '#6B4F71' },
        floorStyle: 'checkerboard',
        floorColors: { tile1: '#2d3748', tile2: '#4a5568' },
    },
    4: {
        id: 4,
        platforms: SHARED_PLATFORMS,
        doors: [
            { id: 11, x: 620, y: PLATFORM_HEIGHT - 240, scenarioId: 11, isFinal: true },
        ],
        collectibles: [
             { id: 401, x: 200, y: PLATFORM_HEIGHT - 200, collected: false },
             { id: 402, x: 1000, y: PLATFORM_HEIGHT - 200, collected: false },
        ],
        scenarios: [
           {
                id: 11,
                title: "The Strategic Showdown",
                prompt: "The Corporate Review Panel finds the Manufacturing SBU strategically 'Stuck in the Middle' (mid-price, mid-quality). Their mediocre returns prevent further Corporate funding. The CEO must issue a definitive Strategic Mandate to break the cycle.",
                options: [
                    { 
                        text: "A. The Focus Option: Nurture the current \"best value\" strategy, arguing that the combination of price and quality works for a broad target market.", 
                        trustChange: -10,
                        outcome: "The Board will not accept mediocrity. Pursuing 'best value' means we are strategically 'Stuck in the Middle,' lacking the margin of a differentiator and the volume of a cost leader. This guarantees average, vulnerable returns."
                    },
                    { 
                        text: "B. The Differentiation Pivot: Invest aggressively in R&D and marketing to achieve genuinely premium status, commanding higher prices (The Differentiator on the Strategy Clock).", 
                        trustChange: -5,
                        outcome: "This is a coherent strategic mandate, but high-cost and high-risk. We should weigh it against the lower-risk option of cost focus before committing to premium branding."
                    },
                    { 
                        text: "C. Enforce an immediate, deep-cut plan to become the lowest-cost producer globally, even if it means sacrificing some quality features (Cost Leadership).", 
                        trustChange: 20,
                        outcome: "This forces a definitive Trade-Off! Committing to Cost Leadership by streamlining the entire value chain eliminates the fatal ambiguity of being 'Stuck in the Middle.' This is a clean mandate, but SBU leadership must execute a painful operational overhaul immediately."
                    },
                ]
            }
        ],
        backgroundColor: '#4A5568',
        windowFrameColor: '#2D3748',
        skyColors: { stop1: '#0c0a1a', stop2: '#2a0e4a' },
        floorStyle: 'checkerboard',
        floorColors: { tile1: '#1e3a8a', tile2: '#facc15' },
    }
};