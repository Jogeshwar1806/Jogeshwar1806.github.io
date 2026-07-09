// Project Information Data Array
const PROJECTS_DATA = [
    {
        id: "fretza",
        title: "Fretza – Delivery App",
        category: "Full Stack / Logistics",
        status: "Active / Deployed",
        description: "A rural logistics and food delivery platform designed to optimize rural supply chains. Supports food, groceries, daily essentials, and human transportation services.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Google Maps API"],
        url: "https://fretza-delivery.vercel.app/",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <path d="M50 50 H350 V200 H50 Z" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
            <path d="M100 50 V200M200 50 V200M300 50 V200M50 100 H350M50 150 H350" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1"/>
            <!-- Map Route Optimization path -->
            <path d="M100 150 Q 150 70, 200 120 T 300 80" stroke="url(#fretzaGrad)" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 4" class="animated-path"/>
            <!-- Location Pin 1 -->
            <circle cx="100" cy="150" r="6" fill="#7c3aed" filter="url(#glow)"/>
            <circle cx="100" cy="150" r="2" fill="#fff"/>
            <!-- Location Pin 2 -->
            <circle cx="300" cy="80" r="6" fill="#5ffbd6" filter="url(#glow)"/>
            <circle cx="300" cy="80" r="2" fill="#fff"/>
            <!-- Floating nodes -->
            <circle cx="200" cy="120" r="4" fill="#ffffff" fill-opacity="0.5"/>
            <!-- Delivery vehicle schematic -->
            <g transform="translate(185, 100)">
                <rect width="30" height="16" rx="3" fill="#0a192f" stroke="#5ffbd6" stroke-width="1.5"/>
                <circle cx="8" cy="16" r="3" fill="#7c3aed"/>
                <circle cx="22" cy="16" r="3" fill="#7c3aed"/>
                <path d="M22 4 H26 V10 H22 Z" fill="#5ffbd6"/>
            </g>
            <defs>
                <linearGradient id="fretzaGrad" x1="100" y1="150" x2="300" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7c3aed" />
                    <stop offset="1" stop-color="#5ffbd6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <style>
                .animated-path {
                    stroke-dasharray: 8, 4;
                    animation: dash 30s linear infinite;
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: -1000;
                    }
                }
            </style>
        </svg>`
    },
    {
        id: "aquavitae",
        title: "Aqua Vitae (WQMF Robot)",
        category: "IoT / Robotics",
        status: "Prototype",
        description: "Proprietary floating robotic system designed for automated, real-time water quality monitoring, parameters logging (pH, temperature, turbidity), and environmental tracking.",
        tech: ["C++", "Arduino", "Sensors", "RF Communication", "System Design"],
        url: "https://github.com/Jogeshwar1806/Water-Quality-Measurement-Floating-Robot",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <!-- Water Ripples -->
            <path d="M50 180 C 100 170, 150 190, 200 180 C 250 170, 300 190, 350 180" stroke="#7c3aed" stroke-opacity="0.3" stroke-width="1.5"/>
            <path d="M30 195 C 90 185, 140 205, 200 195 C 260 185, 310 205, 370 195" stroke="#5ffbd6" stroke-opacity="0.2" stroke-width="1"/>
            <!-- Robot Buoy -->
            <g transform="translate(170, 100)">
                <!-- Buoy body -->
                <path d="M10 40 L 0 20 L 15 0 L 45 0 L 60 20 L 50 40 Z" fill="#0a192f" stroke="#5ffbd6" stroke-width="2"/>
                <!-- Sensor rod -->
                <line x1="30" y1="40" x2="30" y2="70" stroke="#7c3aed" stroke-width="3"/>
                <!-- LED Indicator -->
                <circle cx="30" cy="15" r="4" fill="#5ffbd6" filter="url(#glow-av)"/>
                <!-- Antenna -->
                <line x1="30" y1="0" x2="30" y2="-25" stroke="#ffffff" stroke-width="1.5"/>
                <circle cx="30" cy="-25" r="2" fill="#7c3aed"/>
                <!-- Sonar Rings -->
                <circle cx="30" cy="70" r="12" stroke="#5ffbd6" stroke-opacity="0.5" stroke-width="1" class="ping-ring"/>
                <circle cx="30" cy="70" r="24" stroke="#5ffbd6" stroke-opacity="0.2" stroke-width="1" class="ping-ring-slow"/>
            </g>
            <defs>
                <filter id="glow-av" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <style>
                .ping-ring {
                    animation: ping 2s infinite ease-out;
                    transform-origin: 200px 170px;
                }
                .ping-ring-slow {
                    animation: ping 3s infinite ease-out;
                    transform-origin: 200px 170px;
                }
                @keyframes ping {
                    0% { transform: scale(0.5); opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
            </style>
        </svg>`
    },
    {
        id: "smarthome",
        title: "Smart Home Automation",
        category: "IoT / Embedded",
        status: "Maintenance",
        description: "An integrated home automation system controlling room lighting, safety alarms, and appliance configurations via distributed Arduino sensors and RF communication modules.",
        tech: ["Arduino", "C++", "IoT", "Sensor Networks", "RF Systems"],
        url: "maintenance",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <path d="M50 50 H350 V200 H50 Z" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
            <!-- Schematic House -->
            <path d="M200 60 L 290 130 V 190 H 110 V 130 Z" stroke="#7c3aed" stroke-width="2" fill="#0a192f" fill-opacity="0.6"/>
            <path d="M180 190 V 150 H 220 V 190" stroke="#7c3aed" stroke-width="2"/>
            <!-- Sensor Nodes -->
            <g transform="translate(200, 60)">
                <circle cx="0" cy="0" r="5" fill="#5ffbd6" filter="url(#glow-sh)"/>
                <line x1="0" y1="0" x2="60" y2="40" stroke="#5ffbd6" stroke-opacity="0.5" stroke-width="1"/>
                <line x1="0" y1="0" x2="-60" y2="40" stroke="#5ffbd6" stroke-opacity="0.5" stroke-width="1"/>
                <line x1="0" y1="0" x2="0" y2="70" stroke="#5ffbd6" stroke-opacity="0.5" stroke-width="1"/>
            </g>
            <circle cx="260" cy="100" r="4" fill="#ffffff"/>
            <circle cx="140" cy="100" r="4" fill="#ffffff"/>
            <circle cx="200" cy="130" r="4" fill="#ffffff"/>
            <defs>
                <filter id="glow-sh" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
        </svg>`
    },
    {
        id: "calculator",
        title: "Modern Calculator",
        category: "Frontend",
        status: "Completed",
        description: "A sleek, responsive dark UI calculator supporting standard arithmetic computations. Includes an interactive visual layout and dynamic dark/light theme switching.",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        url: "https://jogeshwar1806.github.io/Modern-Calculator/",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <!-- Calculator Frame -->
            <g transform="translate(130, 45)">
                <rect width="140" height="170" rx="10" fill="#0a192f" stroke="#7c3aed" stroke-width="2"/>
                <!-- Display -->
                <rect x="15" y="15" width="110" height="30" rx="5" fill="#020617" stroke="#ffffff" stroke-opacity="0.1"/>
                <text x="115" y="36" fill="#5ffbd6" font-family="monospace" font-size="16" text-anchor="end">42.00</text>
                <!-- Buttons -->
                <rect x="15" y="60" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="44" y="60" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="73" y="60" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="102" y="60" width="22" height="22" rx="4" fill="#7c3aed"/>
                
                <rect x="15" y="90" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="44" y="90" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="73" y="90" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="102" y="90" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.1"/>
                
                <rect x="15" y="120" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="44" y="120" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="73" y="120" width="22" height="22" rx="4" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="102" y="120" width="22" height="22" rx="4" fill="#5ffbd6" fill-opacity="0.8"/>
            </g>
        </svg>`
    },
    {
        id: "textutils",
        title: "Text Utils",
        category: "Frontend / Utility",
        status: "Completed",
        description: "An interactive, web-based utility for rapid text formatting and statistics. Features uppercase/lowercase conversion, word/character counting, and estimated reading time.",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        url: "https://jogeshwar1806.github.io/TextUtils/",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <!-- Text Box layout -->
            <g transform="translate(80, 50)">
                <rect width="240" height="150" rx="8" fill="#0a192f" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1.5"/>
                <!-- Line placeholders -->
                <line x1="20" y1="30" x2="220" y2="30" stroke="#ffffff" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round"/>
                <line x1="20" y1="50" x2="180" y2="50" stroke="#ffffff" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round"/>
                <line x1="20" y1="70" x2="200" y2="70" stroke="url(#lineGrad)" stroke-width="3" stroke-linecap="round" class="drawn-line"/>
                <line x1="20" y1="90" x2="140" y2="90" stroke="#ffffff" stroke-opacity="0.1" stroke-width="3" stroke-linecap="round"/>
                <!-- Glowing cursor -->
                <line x1="145" y1="84" x2="145" y2="96" stroke="#5ffbd6" stroke-width="2" class="blinking-cursor"/>
                <!-- Statistics bar -->
                <rect x="20" y="115" width="70" height="18" rx="3" fill="#7c3aed" fill-opacity="0.2" stroke="#7c3aed" stroke-width="1"/>
                <text x="55" y="128" fill="#d2bbff" font-family="monospace" font-size="8" text-anchor="middle">WORDS: 148</text>
                
                <rect x="100" y="115" width="75" height="18" rx="3" fill="#5ffbd6" fill-opacity="0.1" stroke="#5ffbd6" stroke-width="1"/>
                <text x="137" y="128" fill="#5ffbd6" font-family="monospace" font-size="8" text-anchor="middle">TIME: 24s</text>
            </g>
            <defs>
                <linearGradient id="lineGrad" x1="20" y1="70" x2="200" y2="70" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5ffbd6" />
                    <stop offset="1" stop-color="#7c3aed" />
                </linearGradient>
            </defs>
            <style>
                .blinking-cursor {
                    animation: blink 1s step-end infinite;
                }
                @keyframes blink {
                    50% { opacity: 0; }
                }
            </style>
        </svg>`
    },
    {
        id: "meramann",
        title: "Mera Mann",
        category: "Full Stack / Social",
        status: "Completed",
        description: "A community social media application where users can share ideas, post images/text updates, comment on threads with nested replies, and express likes.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
        url: "https://github.com/Jogeshwar1806/Meramann",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <path d="M50 50 H350 V200 H50 Z" stroke="#ffffff" stroke-opacity="0.02"/>
            <!-- Dynamic Connection Grid -->
            <g transform="translate(50, 40)">
                <circle cx="60" cy="50" r="18" fill="#0a192f" stroke="#7c3aed" stroke-width="2"/>
                <circle cx="150" cy="130" r="22" fill="#0a192f" stroke="#5ffbd6" stroke-width="2"/>
                <circle cx="240" cy="60" r="18" fill="#0a192f" stroke="#7c3aed" stroke-width="2"/>
                <!-- Connection Lines -->
                <line x1="78" y1="50" x2="132" y2="118" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5"/>
                <line x1="222" y1="65" x2="168" y2="118" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1.5"/>
                <line x1="78" y1="50" x2="222" y2="60" stroke="#5ffbd6" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 4"/>
                <!-- Speech Bubble in center node -->
                <path d="M140 100 H160 V112 L154 108 H140 Z" fill="#7c3aed" filter="url(#glow-mm)"/>
                <!-- Heart Icon in right node -->
                <path d="M236 56 C234 54, 232 54, 230 56 L240 66 L250 56 C248 54, 246 54, 244 56 L240 60 Z" fill="#5ffbd6"/>
            </g>
            <defs>
                <filter id="glow-mm" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
        </svg>`
    },
    {
        id: "wanderlust",
        title: "Wanderlust",
        category: "Full Stack / Travel",
        status: "Completed",
        description: "A hotel recommendation and travel directory fullstack web app. Allows users to browse listings on interactive maps, write reviews, and book accommodations.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mapbox SDK", "Bootstrap"],
        url: "https://github.com/Jogeshwar1806/WanderLust",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <!-- Map mesh -->
            <path d="M50 50 H350 V200 H50 Z" stroke="#ffffff" stroke-opacity="0.03"/>
            <!-- Topography contours -->
            <path d="M80 120 C 130 90, 180 150, 220 100 C 270 50, 310 120, 340 160" stroke="#7c3aed" stroke-opacity="0.15" stroke-width="2"/>
            <path d="M60 150 C 110 120, 160 180, 200 130 C 250 80, 290 150, 320 190" stroke="#5ffbd6" stroke-opacity="0.1" stroke-width="1.5"/>
            <!-- Map pins -->
            <g transform="translate(180, 110)">
                <circle cx="0" cy="0" r="30" fill="#5ffbd6" fill-opacity="0.04" stroke="#5ffbd6" stroke-opacity="0.1" stroke-width="1"/>
                <path d="M0 -15 C -8 -15, -12 -9, -12 0 C -12 10, 0 22, 0 22 C 0 22, 12 10, 12 0 C 12 -9, 8 -15, 0 -15 Z" fill="#7c3aed" filter="url(#glow-wl)"/>
                <circle cx="0" cy="-3" r="4" fill="#ffffff"/>
            </g>
            <defs>
                <filter id="glow-wl" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
        </svg>`
    },
    {
        id: "nextask",
        title: "NexTask – The todo app",
        category: "Frontend / Productivity",
        status: "Completed",
        description: "A smart task manager incorporating motivational analytical review cards. Validates user checklist efficiency and serves contextual analytical feedback.",
        tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
        url: "https://github.com/Jogeshwar1806/NexTask---The-TODO-App",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <!-- Checklist frame -->
            <g transform="translate(100, 50)">
                <rect width="200" height="150" rx="8" fill="#0a192f" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1.5"/>
                <!-- Item 1 (Checked) -->
                <circle cx="30" cy="40" r="8" fill="#5ffbd6" fill-opacity="0.2" stroke="#5ffbd6" stroke-width="1.5"/>
                <path d="M27 40 L 29 42 L 33 37" stroke="#5ffbd6" stroke-width="2" stroke-linecap="round"/>
                <line x1="50" y1="40" x2="170" y2="40" stroke="#ffffff" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round"/>
                <!-- Item 2 (Checked) -->
                <circle cx="30" cy="75" r="8" fill="#5ffbd6" fill-opacity="0.2" stroke="#5ffbd6" stroke-width="1.5"/>
                <path d="M27 75 L 29 77 L 33 72" stroke="#5ffbd6" stroke-width="2" stroke-linecap="round"/>
                <line x1="50" y1="75" x2="150" y2="75" stroke="#ffffff" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round"/>
                <!-- Item 3 (Unchecked) -->
                <circle cx="30" cy="110" r="8" fill="none" stroke="#7c3aed" stroke-width="1.5"/>
                <line x1="50" y1="110" x2="160" y2="110" stroke="#ffffff" stroke-opacity="0.2" stroke-width="3" stroke-linecap="round"/>
            </g>
        </svg>`
    },
    {
        id: "rusticlad",
        title: "A Rustic Lad",
        category: "Creative / Web Book",
        status: "Ongoing",
        description: "An immersive e-book web layout serving as an autobiographical documentary of the author's personal journal and creative writing pieces.",
        tech: ["HTML", "CSS", "JavaScript", "Markdown Parsing"],
        url: "https://github.com/Jogeshwar1806/A-Rustic-Lad",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <!-- Open Book layout -->
            <g transform="translate(100, 60)">
                <path d="M10 110 C 50 115, 95 105, 100 20 C 105 105, 150 115, 190 110 V 10 C 150 15, 105 5, 100 0 C 95 5, 50 15, 10 10 Z" fill="#0a192f" stroke="#7c3aed" stroke-width="2"/>
                <line x1="100" y1="0" x2="100" y2="110" stroke="#7c3aed" stroke-width="1"/>
                <!-- Text line segments on page -->
                <line x1="30" y1="30" x2="80" y2="30" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
                <line x1="30" y1="45" x2="70" y2="45" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
                <line x1="30" y1="60" x2="80" y2="60" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
                
                <line x1="120" y1="30" x2="170" y2="30" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
                <line x1="120" y1="45" x2="160" y2="45" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
                <line x1="120" y1="60" x2="170" y2="60" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
                <!-- Floating particle elements -->
                <circle cx="100" cy="-15" r="4" fill="#5ffbd6" filter="url(#glow-rl)"/>
                <path d="M98 -13 L 102 -9" stroke="#5ffbd6" stroke-width="1"/>
            </g>
            <defs>
                <filter id="glow-rl" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
        </svg>`
    },
    {
        id: "projectphoenix",
        title: "Project Phoenix",
        category: "Productivity / Dashboard",
        status: "Active",
        description: "A multi-dimensional performance tracking dashboard and activity monitor layout. Provides self-auditing routines and metric visualizations.",
        tech: ["HTML", "CSS", "JavaScript", "Charts.js", "Analytics Log"],
        url: "https://github.com/Jogeshwar1806/Project-Phoenix-2026",
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <!-- Dashboard Grid lines -->
            <path d="M50 50 H350 V200 H50 Z" stroke="#ffffff" stroke-opacity="0.03"/>
            <!-- Phoenix Geometric Shape outline -->
            <path d="M200 70 L 230 110 H 260 L 210 130 L 230 170 L 200 150 L 170 170 L 190 130 L 140 110 H 170 Z" fill="#7c3aed" fill-opacity="0.1" stroke="#7c3aed" stroke-width="2" filter="url(#glow-ph)"/>
            <!-- Analytics Chart Overlay -->
            <path d="M60 180 L 120 150 L 180 160 L 240 120 L 300 130 L 340 90" stroke="#5ffbd6" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="340" cy="90" r="4" fill="#ffffff"/>
            <defs>
                <filter id="glow-ph" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
        </svg>`
    },
    {
        id: "pythongames",
        title: "Python Games Bundle",
        category: "Python / Logic",
        status: "Completed",
        description: "A double project release featuring: 1. Kaun Banega Crorepati (a CLI-based trivia simulation applying custom data structures) and 2. Code & Decode (a custom hash key cryptographic converter).",
        tech: ["Python", "Algorithms", "DSA", "Hashing & Encryption"],
        url: [
            { label: "KBC Game GitHub", link: "https://github.com/Jogeshwar1806/Kaun-Banega-Crorepati" },
            { label: "Code & Decode GitHub", link: "https://github.com/Jogeshwar1806/Code-and-Decode" }
        ],
        illustration: `
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#020617"/>
            <g transform="translate(60, 45)">
                <!-- Left Console: KBC trivia -->
                <rect width="130" height="150" rx="6" fill="#0a192f" stroke="#7c3aed" stroke-width="1.5"/>
                <text x="65" y="30" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">KBC TRIVIA</text>
                <rect x="15" y="50" width="100" height="16" rx="3" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="15" y="72" width="100" height="16" rx="3" fill="#ffffff" fill-opacity="0.05"/>
                <rect x="15" y="94" width="100" height="16" rx="3" fill="#5ffbd6" fill-opacity="0.2" stroke="#5ffbd6" stroke-width="1"/>
                <rect x="15" y="116" width="100" height="16" rx="3" fill="#ffffff" fill-opacity="0.05"/>
                
                <!-- Right Console: Crypto lock -->
                <rect x="150" y="0" width="130" height="150" rx="6" fill="#0a192f" stroke="#5ffbd6" stroke-width="1.5"/>
                <text x="215" y="30" fill="#ffffff" font-family="monospace" font-size="10" text-anchor="middle">ENCRYPT / DECRYPT</text>
                <!-- Lock Icon -->
                <rect x="200" y="70" width="30" height="22" rx="3" fill="none" stroke="#7c3aed" stroke-width="2"/>
                <path d="M206 70 V 60 C 206 50, 224 50, 224 60 V 70" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/>
                <!-- Binary stream lines -->
                <text x="215" y="115" fill="#5ffbd6" font-family="monospace" font-size="8" text-anchor="middle" font-weight="bold">1010110110</text>
            </g>
        </svg>`
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    setupMouseGlow();
    setupNavbarScroll();
    setupMobileMenu();
    renderProjects(4);
    setupProjectsToggler();
    setupActiveNavSpy();
    setupScrollReveals();
    setupTimelineHighlights();
    setupContactForm();
}

// 1. Mouse responsive glow inside glass cards (Optimized via delegation)
function setupMouseGlow() {
    document.body.addEventListener("mousemove", (e) => {
        const card = e.target.closest(".glass-card, .project-card");
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });
}

// 2. Navbar Smart Hide on Scroll & Blur Backdrop
function setupNavbarScroll() {
    const header = document.querySelector(".header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = "rgba(2, 6, 23, 0.85)";
            header.style.borderBottomColor = "rgba(255, 255, 255, 0.1)";
        } else {
            header.style.backgroundColor = "rgba(2, 6, 23, 0.65)";
            header.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
        }

        if (window.scrollY > lastScrollY && window.scrollY > 80) {
            // Scrolling down - hide header
            header.classList.add("header-hidden");
        } else {
            // Scrolling up - show header
            header.classList.remove("header-hidden");
        }
        lastScrollY = window.scrollY;
    }, { passive: true });
}

// 3. Mobile Hamburger Menu
function setupMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");
    const navLinks = document.querySelectorAll(".mobile-nav a");

    hamburger.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        
        // Transform hamburger lines into X
        const spans = hamburger.querySelectorAll("span");
        if (isOpen) {
            spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        }
    });

    // Close menu when clicking nav link
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
            const spans = hamburger.querySelectorAll("span");
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        });
    });
}

// 4. Dynamic Project Rendering
function renderProjects(limit) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = "";
    
    // Slice data to render target count
    const projectsToRender = PROJECTS_DATA.slice(0, limit);

    projectsToRender.forEach((proj, idx) => {
        const card = document.createElement("div");
        card.className = "project-card fade-in";
        card.style.animationDelay = `${idx * 0.1}s`;

        // Compose tags HTML
        const tagsHtml = proj.tech
            .map((t) => `<span class="tag gray">${t}</span>`)
            .join("");

        // Build URL redirection action button
        let actionButtonHtml = "";
        if (proj.url === "maintenance") {
            actionButtonHtml = `<button type="button" class="btn btn-secondary btn-maintenance" data-project="${proj.title}">Under Maintenance</button>`;
        } else if (Array.isArray(proj.url)) {
            // Bundle project with multiple links
            actionButtonHtml = `
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${proj.url.map(lnk => `<a href="${lnk.link}" target="_blank" class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.75rem;">${lnk.label}</a>`).join("")}
            </div>
            `;
        } else {
            actionButtonHtml = `<a href="${proj.url}" target="_blank" class="btn btn-outline">View Details <span class="material-symbols-outlined" style="font-size: 1rem;">open_in_new</span></a>`;
        }

        card.innerHTML = `
            <div class="project-img">
                ${proj.illustration}
                <div class="project-overlay"></div>
                <span class="project-category-badge">${proj.category}</span>
                <span class="project-status-badge" style="${proj.status.includes('Active') ? 'color: var(--primary); border-color: rgba(95, 251, 214, 0.3); background: rgba(95, 251, 214, 0.05);' : ''}">${proj.status}</span>
            </div>
            <div class="project-info">
                <div class="project-header">
                    <h3>${proj.title}</h3>
                </div>
                <p>${proj.description}</p>
                <div class="tags" style="margin-top: auto; padding-bottom: 0.5rem;">
                    ${tagsHtml}
                </div>
                <div class="project-actions">
                    ${Array.isArray(proj.url) ? '' : '<span class="material-symbols-outlined" style="color: var(--primary-dim); font-size: 1.5rem;">integration_instructions</span>'}
                    ${actionButtonHtml}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Add event listeners to maintenance buttons
    document.querySelectorAll(".btn-maintenance").forEach((btn) => {
        btn.addEventListener("click", () => {
            showToast(`${btn.getAttribute("data-project")} is currently undergoing system upgrades.`);
        });
    });
}

// 5. Expandable projects panel trigger
function setupProjectsToggler() {
    const toggleBtn = document.getElementById("toggle-projects-btn");
    if (!toggleBtn) return;

    let expanded = false;

    toggleBtn.addEventListener("click", () => {
        expanded = !expanded;
        if (expanded) {
            renderProjects(PROJECTS_DATA.length);
            toggleBtn.innerHTML = `Show Less Projects <span class="material-symbols-outlined">expand_less</span>`;
            
            // Auto scroll slightly down to make expanded items obvious
            const grid = document.getElementById("projects-grid");
            if (grid) {
                grid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        } else {
            renderProjects(4);
            toggleBtn.innerHTML = `Show More Projects <span class="material-symbols-outlined">expand_more</span>`;
            
            // Scroll back up to projects header
            const section = document.getElementById("projects");
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// 6. Navigation Link Highlighting (ScrollSpy)
function setupActiveNavSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navA = document.querySelectorAll(".nav-links a, .mobile-nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.scrollY + 200; // Offset for triggers

        sections.forEach((sec) => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                current = sec.getAttribute("id");
            }
        });

        navA.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${current}`) {
                a.classList.add("active");
            }
        });
    }, { passive: true });
}

// 7. Scroll reveal animations (Intersection Observer)
function setupScrollReveals() {
    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll, .glass-card, .profile-grid > div");
    
    // Add default CSS styling to enable reveals
    elementsToReveal.forEach(el => {
        if (!el.classList.contains("reveal-on-scroll")) {
            el.classList.add("reveal-on-scroll");
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    elementsToReveal.forEach((el) => {
        observer.observe(el);
    });
}

// 8. Timeline interactive path highlight on scroll
function setupTimelineHighlights() {
    const items = document.querySelectorAll(".timeline-item");
    if (items.length === 0) return;

    // Highlight timeline nodes on scroll using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-timeline");
            } else {
                entry.target.classList.remove("active-timeline");
            }
        });
    }, {
        threshold: 0.15, // Lower threshold triggers easily on all viewport heights
        rootMargin: "0px 0px -100px 0px"
    });

    items.forEach((item) => {
        observer.observe(item);
    });
}

// 9. Contact form validation, states & premium success checks
function setupContactForm() {
    const form = document.querySelector(".contact-form form");
    const container = document.querySelector(".contact-form");
    if (!form || !container) return;

    const fields = form.querySelectorAll(".form-control");
    
    // Handle focus visual states
    fields.forEach((field) => {
        const group = field.closest(".form-group");
        
        field.addEventListener("focus", () => {
            group.classList.add("focused");
        });

        field.addEventListener("blur", () => {
            group.classList.remove("focused");
            validateField(field);
        });

        field.addEventListener("input", () => {
            if (group.classList.contains("error")) {
                validateField(field);
            }
        });
    });

    // Handle submit
    const submitBtn = form.querySelector("button");
    
    submitBtn.addEventListener("click", () => {
        let allValid = true;
        fields.forEach((field) => {
            if (!validateField(field)) {
                allValid = false;
            }
        });

        if (!allValid) return;

        // Perform Submit Animation
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="material-symbols-outlined" style="animation: spin 1s infinite linear;">sync</span> Sending...`;

        // Simulate API network latency
        setTimeout(() => {
            // Success State Transition
            form.style.display = "none";
            
            const nameField = form.querySelector('input[placeholder="Your Name"]');
            const nameVal = nameField ? nameField.value.trim() : "Friend";
            
            // Add success panel markup
            const successState = document.createElement("div");
            successState.className = "contact-success-state";
            successState.innerHTML = `
                <div class="success-icon-wrap floating-element">
                    <span class="material-symbols-outlined">done</span>
                </div>
                <h3>Message Dispatched!</h3>
                <p>Thank you for reaching out, ${nameVal}. Your transmission has been compiled and delivered. Expect a reply shortly.</p>
                <button type="button" class="btn btn-outline" style="margin-top: 1rem;" id="reset-form-btn">Send Another Message</button>
            `;
            container.appendChild(successState);
            successState.style.display = "flex";

            // Add reset trigger
            document.getElementById("reset-form-btn").addEventListener("click", () => {
                successState.remove();
                form.reset();
                form.style.display = "block";
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Send Message";
            });
        }, 1800);
    });
}

function validateField(field) {
    const group = field.closest(".form-group");
    let errorMsg = group.querySelector(".form-error-msg");
    
    if (!errorMsg) {
        errorMsg = document.createElement("span");
        errorMsg.className = "form-error-msg";
        group.appendChild(errorMsg);
    }

    if (!field.value.trim()) {
        group.classList.add("error");
        errorMsg.textContent = "This entry field is required.";
        return false;
    }

    if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
            group.classList.add("error");
            errorMsg.textContent = "Please provide a valid email format.";
            return false;
        }
    }

    group.classList.remove("error");
    errorMsg.textContent = "";
    return true;
}

// 10. Global Toast Message Panel
function showToast(message) {
    let toast = document.querySelector(".toast-msg");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast-msg";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <span class="material-symbols-outlined icon">info</span>
        <span>${message}</span>
    `;
    
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4500);
}
