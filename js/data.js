// data.js - Simulating a database for characters, episodes, trivia, etc.
const BB_DATA = {
    characters: [
        { 
            id: 1, name: "Walter White", alias: "Heisenberg", status: "Deceased", 
            image: "assets/images/characters/walter.webp",
            age: 50, height: "5'11\"", gender: "Male",
            background: "A former award-winning chemist and co-founder of Gray Matter Technologies. Became a suburban high school teacher before turning to high-purity methamphetamine production following a terminal cancer diagnosis.",
            description: "Chemistry genius turned meth kingpin.",
            operations: ["Blue Sky distribution", "Superlab management", "Car wash money laundering"],
            affiliations: ["Jesse Pinkman", "Saul Goodman", "Gustavo Fring"],
            location: "Negra Arroyo Lane, Albuquerque (Deceased)"
        },
        { 
            id: 2, name: "Jesse Pinkman", alias: "Cap'n Cook", status: "Alive", 
            image: "assets/images/characters/jesse.webp",
            age: 25, height: "5'8\"", gender: "Male",
            background: "A former student of Mr. White with a middle-class upbringing. Known for small-time meth manufacturing before becoming the primary assistant and cook for the Heisenberg operation.",
            description: "Former student, trusted lab partner.",
            operations: ["Small-scale cooking", "Retail distribution", "Superlab labor"],
            affiliations: ["Walter White", "Mike Ehrmantraut", "Badger & Skinny Pete"],
            location: "Unknown (Possible residence: Alaska)"
        },
        { 
            id: 3, name: "Gustavo Fring", alias: "The Chicken Man", status: "Deceased", 
            image: "assets/images/characters/gus.png",
            age: 52, height: "5'8\"", gender: "Male",
            background: "A Chilean national and co-founder of the Los Pollos Hermanos fast-food chain. Utilized legitimate business infrastructure to manage a massive international narcotics distribution network.",
            description: "Owner of Los Pollos Hermanos and a major drug kingpin.",
            operations: ["International distribution", "Industrial Superlab", "Los Pollos Hermanos laundering"],
            affiliations: ["Madrigal Electromotive", "Mike Ehrmantraut", "Walter White"],
            location: "Albuquerque (Deceased)"
        },
        { 
            id: 4, name: "Mike Ehrmantraut", alias: "The Cleaner", status: "Deceased", 
            image: "assets/images/characters/mike.jpeg",
            age: 68, height: "5'9\"", gender: "Male",
            background: "A former Philadelphia police officer who relocated to Albuquerque. Served as the primary head of security and enforcer for Gustavo Fring's organization. Known for a strict, pragmatic code of ethics.",
            description: "A former police officer and security consultant for Gustavo Fring.",
            operations: ["Corporate security", "Logistics", "Assassination & Cleanup"],
            affiliations: ["Gustavo Fring", "Saul Goodman", "Walter White"],
            location: "The Bosque (Deceased)"
        },
        { 
            id: 5, name: "Saul Goodman", alias: "Gene Takavic", status: "In Custody", 
            image: "assets/images/characters/saul.avif",
            age: 44, height: "5'9\"", gender: "Male",
            background: "Born James McGill, a charismatic con-artist turned attorney. Specialized in representing Albuquerque's criminal underworld and facilitating high-level money laundering for the Heisenberg empire.",
            description: "Criminal defense attorney specializing in money laundering.",
            operations: ["Legal protection", "Identity procurement", "Shell company facilitation"],
            affiliations: ["Walter White", "Jesse Pinkman", "Francesca Liddy"],
            location: "ADX Florence (Incarcerated)"
        },
        { 
            id: 6, name: "Skyler White", alias: "The Accountant", status: "Alive", 
            image: "assets/images/characters/skyler.webp",
            age: 42, height: "5'8\"", gender: "Female",
            background: "A former bookkeeper and short-fiction writer. Initially unaware of her husband's criminal activities, she eventually became an accomplice, managing the car wash to launder drug proceeds.",
            description: "Former car wash owner and money launderer.",
            operations: ["A1 Car Wash bookkeeping", "Structured deposits", "Asset protection"],
            affiliations: ["Walter White", "Hank Schrader", "Ted Beneke"],
            location: "Albuquerque (Witness Protection Status)"
        },
        { 
            id: 7, name: "Hank Schrader", alias: "ASAC Schrader", status: "Deceased", 
            image: "assets/images/characters/hank.webp",
            age: 47, height: "5'10\"", gender: "Male",
            background: "A high-ranking DEA agent and brother-in-law to Walter White. Led the obsessive multi-year investigation into the meth kingpin 'Heisenberg,' unaware of White's secret identity for years.",
            description: "Highly decorated DEA Assistant Special Agent in Charge.",
            operations: ["Narcotics interdiction", "Heisenberg task force leader"],
            affiliations: ["DEA", "Marie Schrader", "Gomez"],
            location: "To'hajiilee (Deceased)"
        },
        { 
            id: 8, name: "Walter White Jr.", alias: "Flynn", status: "Alive", 
            image: "assets/images/characters/walterjr.webp",
            age: 17, height: "5'9\"", gender: "Male",
            background: "The teenage son of Walt and Skyler with cerebral palsy. Struggles with family instability and his father's mysterious disappearances during the height of the meth empire's expansion.",
            description: "Son of Walter and Skyler White.",
            operations: ["Save Walter White donation website"],
            affiliations: ["Walter White", "Skyler White", "Louis"],
            location: "Albuquerque"
        },
        { 
            id: 9, name: "Marie Schrader", alias: "None", status: "Alive", 
            image: "assets/images/characters/marie.webp",
            age: 40, height: "5'6\"", gender: "Female",
            background: "A radiologic technologist and sister to Skyler White. Fiercely supportive of her husband Hank Schrader, though struggled with personal bouts of compulsive kleptomania.",
            description: "Skyler's sister and Hank's wife. Known for occasional kleptomania.",
            operations: ["Medical support", "Task force surveillance assist"],
            affiliations: ["Hank Schrader", "Skyler White", "Walter White"],
            location: "Albuquerque"
        }
    ],
    seasons: [
        { 
            id: 1, title: "Season 1", year: "2008", 
            episodes: 7, riskLevelCount: 40, riskLevel: "MODERATE", 
            icon: "🧪", 
            majorPlayer: "Krazy-8", 
            keyLocation: "The Desert / RV",
            description: "Initial surveillance identifies a new high-purity methamphetamine source. Subject Walter White, code-named 'Heisenberg', enters into a partnership with Jesse Pinkman. Primary incidents include the neutralization of local dealer Krazy-8 and first contact with cartel-affiliated Tuco Salamanca. The operation utilizes a 1986 Fleetwood Bounder as a mobile manufacturing site." 
        },
        { 
            id: 2, title: "Season 2", year: "2009", 
            episodes: 13, riskLevelCount: 65, riskLevel: "HIGH", 
            icon: "✈️", 
            majorPlayer: "Tuco Salamanca", 
            keyLocation: "The Hideout",
            description: "The distribution network expands following the death of Tuco Salamanca. Intelligence reports the involvement of criminal attorney Saul Goodman, facilitating laundering operations. A major atmospheric incident over Albuquerque, linked to flight controller Donald Margolis, coincides with the suspected overdose of Jane Margolis. The blue-colored product begins dominating the regional market." 
        },
        { 
            id: 3, title: "Season 3", year: "2010", 
            episodes: 13, riskLevelCount: 85, riskLevel: "EXTREME", 
            icon: "🚛", 
            majorPlayer: "The Cousins", 
            keyLocation: "The Superlab",
            description: "The operation industrializes. Direct evidence points to a sophisticated 'Superlab' buried beneath a commercial laundry facility owned by Gustavo Fring. Heisenberg enters an agreement to produce large batches under Madrigal-affiliated logistics. Cartel enforcement via 'The Cousins' results in a high-intensity shootout involving ASAC Hank Schrader." 
        },
        { 
            id: 4, title: "Season 4", year: "2011", 
            episodes: 13, riskLevelCount: 95, riskLevel: "CRITICAL", 
            icon: "🔔", 
            majorPlayer: "Gustavo Fring", 
            keyLocation: "Casa Tranquila",
            description: "Strategic war of attrition between Walter White and the Fring organization. Investigations into the poisoning of a minor and the elimination of cartel leadership in Mexico. The operation reaches a critical point with the explosive neutralization of Gustavo Fring at the Casa Tranquila nursing home. Following the incident, the Superlab site was completely destroyed via arson." 
        },
        { 
            id: 5, title: "Season 5", year: "2012-2013", 
            episodes: 16, riskLevelCount: 100, riskLevel: "LETHAL", 
            icon: "🧤", 
            majorPlayer: "Jack Welker", 
            keyLocation: "Felina / Compound",
            description: "Total collapse of the Heisenberg organization. Post-Madrigal investigations reveal international distribution tentacles. Major incidents include a high-stakes methylamine train heist and the mass assassination of incarcerated witnesses. The operation concludes with the massacre at the Welker compound and the recovery of subject Walter White's body at the scene." 
        }
    ],
    trivia: [
        { q: "What is Walter White’s profession at the start of the series?", options: ["Chemical Engineer", "High School Chemistry Teacher", "Forensic Scientist", "Pharmaceutical Salesman"], a: 1 },
        { q: "What is the name of the fast-food restaurant used as a front by Gus Fring?", options: ["Pollo Loco", "Twisters", "Los Pollos Hermanos", "Chicken Shack"], a: 2 },
        { q: "What is Jesse Pinkman’s signature catchphrase?", options: ["Let's cook!", "Yo, Bitch!", "Whatever, man.", "Science, rules!"], a: 1 },
        { q: "In which city does the show primarily take place?", options: ["El Paso, Texas", "Phoenix, Arizona", "Albuquerque, New Mexico", "Santa Fe, New Mexico"], a: 2 },
        { q: "What color is the high-purity methamphetamine that Walt becomes famous for?", options: ["Clear", "Yellow", "Blue", "Green"], a: 2 },
        { q: "What is the name of Walter White's criminal alter ego?", options: ["Ozymandias", "Heisenberg", "The Cook", "Mr. Mayhew"], a: 1 },
        { q: "What type of vehicle is used as the duo's first mobile laboratory?", options: ["1986 Fleetwood Bounder RV", "1994 Winnebago", "2002 Ford Econoline", "1978 Volkswagen Bus"], a: 0 },
        { q: "Which book leads Hank Schrader to finally suspect Walt?", options: ["The Great Gatsby", "Moby Dick", "Leaves of Grass", "The Age of Innocence"], a: 2 },
        { q: "What is the name of the company Walt co-founded and later left?", options: ["Madrigal Electromotive", "Gray Matter Technologies", "Beneke Fabricators", "Golden Moth Chemical"], a: 1 },
        { q: "What is the name of Gus Fring's partner who died at the hands of the Salamancas?", options: ["Max Arciniega", "Juan Bolsa", "Victor", "Tyrus"], a: 0 },
        { q: "What alias does Jimmy McGill take when he moves to Omaha?", options: ["Saul Goodman", "Gene Takavic", "Viktor St. Claire", "Mr. Lazer"], a: 1 },
        { q: "How many seasons does the show have?", options: ["3", "4", "5", "6"], a: 2 },
        { q: "What is the name of the automated machine gun setup in the series finale?", options: ["The Sentry", "M-60 Surprise", "Madrigal Special", "The Iron Man"], a: 1 },
        { q: "What flavor did Walter say the meth would never be?", options: ["Strawberry", "Blueberry", "Chili P", "Vanilla"], a: 2 },
        { q: "Which character is known as 'The Cleaner'?", options: ["Saul Goodman", "Gus Fring", "Mike Ehrmantraut", "Huell Babineaux"], a: 2 },
        { q: "What is the name of Walter White's wife?", options: ["Marie", "Skyler", "Lydia", "Andrea"], a: 1 },
        { q: "What kind of car does Walter White drive in the beginning?", options: ["Chrysler 300C", "Pontiac Aztek", "Toyota Tercel", "Volvo 240"], a: 1 },
        { q: "What was the name of the lawyer for Mike's legacy guys?", options: ["Dan Wachsberger", "Todd Alquist", "Lydia", "Ted Beneke"], a: 0 },
        { q: "What was the name of the child Jesse saved in the episode 'Peekaboo'?", options: ["Brock", "Drew", "The unnamed redhead kid", "Jake"], a: 2 },
        { q: "Who is the creator of Breaking Bad?", options: ["Bryan Cranston", "Vince Gilligan", "Aaron Paul", "George Mastras"], a: 1 }
    ],
    gallery: [
        { 
            id: 1, label: "EVIDENCE A1: CRYSTAL METH FOUND", src: "assets/images/hero/walt-transformation.jpg", caption: "TRACES OF BLUE METH FOUND", 
            description: "High-purity blue methamphetamine discovered in a desert cook site. Sample purity exceeds 99.1%. Investigating connection to the Heisenberg organization."
        },
        { 
            id: 2, label: "EVIDENCE B2: INDUSTRIAL SUPERLAB", src: "assets/images/hero/superlab-interior.webp", caption: "GANG MEETUP EVIDENCE", 
            description: "Satellite surveillance photo showing an industrial-scale manufacturing facility. Multiple unknown subjects observed entering and exiting the premise."
        },
        { 
            id: 3, label: "EVIDENCE C3: AIRPLANE COLLISION", src: "assets/images/hero/smoke-effect.gif", caption: "AIRPLANE CRASH EVIDENCE", 
            description: "Atmospheric disturbance over Albuquerque resulting from a mid-air collision. Investigating possible negligence of flight controller Donald Margolis."
        },
        { 
            id: 4, label: "EVIDENCE D4: MOBILE LAB RV", src: "assets/images/hero/rv-desert.webp", caption: "RV METH LAB FOUND", 
            description: "A 1986 Fleetwood Bounder recovered in the Albuquerque desert. Found containing industrial lab equipment and traces of P2P manufacturing signatures."
        }
    ]
};
