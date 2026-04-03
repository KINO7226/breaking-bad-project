document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const appContainer = document.getElementById('app-container');
    const smokeOverlay = document.getElementById('smoke-overlay');

    let currentQuiz = [];
    let currentScore = 0;

    // Simple Hash Router Component
    function router() {
        let hash = window.location.hash.substring(1);
        if (!hash) hash = 'home';
        
        renderView(hash);
        updateNav(hash);
    }

    function updateNav(currentView) {
        navItems.forEach(item => {
            if (item.getAttribute('data-view') === currentView) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    async function renderView(view) {
        // Trigger cinematic transition
        appContainer.classList.add('fade-out');
        smokeOverlay.classList.add('active');
        
        // Wait for fade out animation
        await new Promise(r => setTimeout(r, 500));
        
        let html = '';
        
        switch (view) {
            case 'home':
                html = getHomeView();
                break;
            case 'characters':
                html = getCharactersView();
                break;
            case 'seasons':
                html = getSeasonsView();
                break;
            case 'gallery':
                html = getGalleryView();
                break;
            case 'trivia':
                html = getTriviaView();
                break;
            default:
                html = `<h2>404</h2><p>Page Not Found</p>`;
        }
        
        appContainer.innerHTML = html;
        
        // Trigger cinematic reveal
        appContainer.classList.remove('fade-out');
        smokeOverlay.classList.remove('active');
        
        // Setup page-specific JS
        if (window.homeSliderInterval) clearInterval(window.homeSliderInterval);
        if (view === 'home') {
            setTimeout(initHomeScripts, 100);
        }
        
        // Add card click listeners for characters
        if (view === 'characters') {
            setTimeout(initCharacterScripts, 100);
        }
        
        if (view === 'gallery') {
            setTimeout(initGalleryScripts, 100);
        }
    }

    function initCharacterScripts() {
        const grid = document.querySelector('.dossier-grid');
        if (!grid) return;

        const cards = document.querySelectorAll('.dossier-card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Prevent double-clicking on buttons if any
                if (e.target.closest('.view-file-btn')) return;

                const isActive = card.classList.contains('expanded');
                
                // Close others
                cards.forEach(c => c.classList.remove('expanded'));

                if (!isActive) {
                    card.classList.add('expanded');
                    // Move to top of the grid
                    grid.prepend(card);
                    // Scroll container to top
                    const section = document.querySelector('.characters-section');
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }

    function initGalleryScripts() {
        const frames = document.querySelectorAll('.polaroid-frame');
        frames.forEach(frame => {
            frame.addEventListener('click', () => {
                frame.classList.toggle('flipped');
            });
        });
    }

    function initHomeScripts() {
        let slides = document.querySelectorAll('#hero-slider .slide');
        let currentSlide = 0;
        if(slides.length > 0) {
            window.homeSliderInterval = setInterval(() => {
                slides.forEach(s => s.classList.remove('active'));
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 3000);
        }

        const recBtn = document.querySelector('.cam-recording');
        if (recBtn) {
            recBtn.addEventListener('click', () => {
                const grid = document.querySelector('.wanted-grid');
                if (grid) {
                    grid.classList.add('flash-white');
                    setTimeout(() => grid.classList.remove('flash-white'), 200);
                }
            });
        }

        const dismissBtns = document.querySelectorAll('.dismiss-ad-btn');
        dismissBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const ad = e.target.closest('.lawyer-ad');
                if (ad) {
                    ad.style.display = 'none';
                    const sidebar = ad.closest('.ads-sidebar');
                    if (sidebar) {
                        const allAds = Array.from(sidebar.querySelectorAll('.lawyer-ad'));
                        const allHidden = allAds.every(a => a.style.display === 'none');
                        if (allHidden) {
                            sidebar.style.display = 'none';
                        }
                    }
                }
            });
        });
    }

    function getCharactersView() {
        let cards = BB_DATA.characters.map(char => `
            <div class="dossier-card" data-id="${char.id}">
                <div class="dossier-tab">CLASSIFIED</div>
                <div class="dossier-body">
                    <div class="smoke-effect-bg"></div>
                    <div class="dossier-header">
                        <div class="photo-attachment">
                            ${char.image ? `<img src="${char.image}" alt="${char.name}">` : `<div class="photo-placeholder"><span>PHOTO</span></div>`}
                        </div>
                        <div class="header-details">
                            <div class="name-status-flex">
                                <div class="name-box">
                                    <h3>${char.name}</h3>
                                    <span class="dossier-alias">AKA: ${char.alias}</span>
                                </div>
                                <span class="dossier-status ${char.status.toLowerCase().replace(' ', '-')}">${char.status}</span>
                            </div>
                            <div class="profile-row">
                                <span class="profile-item"><label>AGE:</label> ${char.age}</span>
                                <span class="profile-item"><label>HEIGHT:</label> ${char.height}</span>
                                <span class="profile-item"><label>GENDER:</label> ${char.gender}</span>
                            </div>
                        </div>
                    </div>
                    <p class="base-desc">${char.description}</p>
                    
                    <div class="evidence-file">
                        <div class="evidence-divider">DETAILED EVIDENCE LOG</div>
                        <div class="evidence-content">
                            <div class="evidence-section background-narrative">
                                <label>SUBJECT BACKGROUND:</label>
                                <p>${char.background}</p>
                            </div>
                            <div class="evidence-section">
                                <label>KNOWN OPERATIONS:</label>
                                <ul>${char.operations.map(op => `<li>${op}</li>`).join('')}</ul>
                            </div>
                            <div class="evidence-section">
                                <label>CRIMINAL AFFILIATIONS:</label>
                                <p>${char.affiliations.join(', ')}</p>
                            </div>
                            <div class="evidence-section">
                                <label>LAST KNOWN LOCATION:</label>
                                <p>${char.location}</p>
                            </div>
                        </div>
                    </div>
                    <div class="expansion-hint">CLICK TO UNFOLD FILE</div>
                </div>
            </div>
        `).join('');
        
        return `
            <section class="characters-section">
                <h2 class="view-title">DEA Investigation Database</h2>
                <div class="dossier-grid">
                    ${cards}
                </div>
            </section>
        `;
    }

    function getSeasonsView() {
        let items = BB_DATA.seasons.map(s => {
            const riskLevel = s.riskLevelCount || 0;
            const riskColor = riskLevel >= 90 ? '#8c2d2d' : (riskLevel >= 70 ? '#9c6f44' : '#4a5d4a');
            const calculatedTemp = (98.2 + (riskLevel / 100)).toFixed(1);
            
            return `
                <div class="timeline-item">
                    <div class="batch-report-header">
                        <span class="batch-id">BATCH REPORT #${s.id}</span>
                    </div>
                    <div class="timeline-content">
                        <h4 class="batch-title">CHRONO LOG: ${s.title} (${s.year})</h4>
                        <div class="batch-meta">
                            <p><span class="meta-label">PRIMARY SUBJECT:</span> ${s.majorPlayer}</p>
                            <p><span class="meta-label">LOGISTICS:</span> ${s.keyLocation}</p>
                        </div>
                        <p class="season-desc">${s.description}</p>
                        <div class="batch-stats">
                            <div class="stat-item">
                                <span class="label">BATCH PURITY:</span>
                                <span class="value">${riskLevel}%</span>
                            </div>
                            <div class="stat-item">
                                <span class="label">TEMP:</span>
                                <span class="value">${calculatedTemp}°C</span>
                            </div>
                            <div class="stat-item">
                                <span class="label">RISK ASSESSMENT:</span>
                                <span class="value" style="color: ${riskColor}; font-weight: 900; text-transform: uppercase; text-shadow: none;">${s.riskLevel || 'ACTIVE'}</span>
                            </div>
                        </div>
                    </div>
                    <div class="batch-footer">OFFICIAL DEA CASE LOG - SEASN-${s.id}00X</div>
                </div>
            `;
        }).join('');
        
        return `
            <section class="episodes-section">
                <h2 class="view-title">Operation Timeline</h2>
                <div class="temperature-gauge">
                    <div class="gauge-liquid"></div>
                    <div class="timeline-container">
                        ${items}
                    </div>
                </div>
            </section>
        `;
    }

    function getGalleryView() {
        let items = BB_DATA.gallery.map(item => `
            <div class="polaroid-frame">
                <div class="polaroid-inner">
                    <div class="polaroid-front">
                        <div class="evidence-tape">EVIDENCE: DO NOT CROSS</div>
                        <img src="${item.src}" alt="${item.caption}">
                        <div class="polaroid-caption">${item.label}</div>
                    </div>
                    <div class="polaroid-back">
                        <div class="case-label">CASE FILE: ${item.label}</div>
                        <div class="case-desc">
                            <p>${item.description}</p>
                            <div class="file-footer">DEA EVIDENCE LOG - NOREFS</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        return `
            <section class="gallery-section">
                <h2 class="view-title">Evidence Locker</h2>
                <div class="polaroid-grid">
                    ${items}
                </div>
            </section>
        `;
    }

    function getTriviaView() {
        let shuffled = [...BB_DATA.trivia].sort(() => 0.5 - Math.random());
        currentQuiz = shuffled.slice(0, 5);
        currentScore = 0;

        let html = `
            <section class="trivia-section">
                <div class="dea-case-file">
                    <div class="dea-noise-overlay"></div>
                    <div class="smoke-effect-bg"></div>
                    <img src="assets/images/ui/logo.png" class="dea-watermark" alt="DEA Watermark">
                    <div class="case-header">
                        <h2>DEA EXTREME MEASURES TASK FORCE</h2>
                        <p class="case-cyan">CLEARANCE VERIFICATION EXAM</p>
                    </div>
                    <div class="case-board" id="trivia-board">
                        ${renderTriviaQuestion(0)}
                    </div>
                </div>
            </section>
        `;
        return html;
    }

    function renderTriviaQuestion(index) {
        if (index >= currentQuiz.length) {
            let rating = "";
            switch(currentScore) {
                case 5: rating = "STATUS: CLASSIFIED HEISENBERG LEVEL"; break;
                case 4: rating = "STATUS: MASTERMIND PROFILE"; break;
                case 3: rating = "STATUS: KNOWN ASSOCIATE"; break;
                case 2: rating = "STATUS: PETTY OFFENDER"; break;
                default: rating = "STATUS: UNDER INVESTIGATION"; break;
            }
            return `<div class="trivia-done">
                        <h3 style="font-size: 2.5rem; color: #000; font-weight: 900; margin-bottom: 30px;">EXAMINATION CONCLUDED</h3>
                        <h2 class="case-cyan" style="font-size: 2rem; margin: 20px 0;">RELEVANT KNOWLEDGE CONFIRMED: ${currentScore}/5</h2>
                        <p class="status-red" style="margin-top:20px; font-size:1.5rem; text-transform:uppercase;">${rating}</p>
                        <button onclick="window.restartTrivia()" class="resit-btn">RESIT EXAMINATION</button>
                    </div>`;
        }
        let q = currentQuiz[index];
        let options = q.options.map((opt, i) => `
            <button class="case-btn" onclick="window.nextTrivia(${index}, ${i}, ${q.a})">${opt}</button>
        `).join('');

        return `
            <div class="case-question">
                <p class="case-cyan" style="margin-bottom: 25px; font-size:1.1rem;">RELEVANT KNOWLEDGE CONFIRMED: ${index}/5</p>
                <h3>FILE #${index + 1}: ${q.q}</h3>
                <div class="case-options">
                    ${options}
                </div>
            </div>
        `;
    }

    window.nextTrivia = function(currentIndex, selectedIndex, correctIndex) {
        let board = document.getElementById('trivia-board');
        if (!board) return;
        
        let buttons = board.querySelectorAll('.case-btn');
        if(selectedIndex === correctIndex) {
            buttons[selectedIndex].classList.add('correct');
            currentScore++;
        } else {
            buttons[selectedIndex].classList.add('wrong');
            buttons[correctIndex].classList.add('correct');
        }

        buttons.forEach(b => b.disabled = true);

        setTimeout(() => {
            board.innerHTML = renderTriviaQuestion(currentIndex + 1);
        }, 2000);
    };

    window.restartTrivia = function() {
        const app = document.getElementById('app-container');
        app.innerHTML = getTriviaView();
    };

    function getHomeView() {
        return `
            <section class="home-expanded">
                <video class="bg-video" autoplay loop muted playsinline>
                    <source src="https://cdn.pixabay.com/video/2016/09/21/5412-183786483_large.mp4" type="video/mp4">
                </video>
                <div class="home-overlay"></div>
                
                <div class="home-content">
                    <div class="home-main">
                        <div class="transformation-slider" id="hero-slider">
                            <div class="slide active" style="background-image: url('assets/images/hero/rv-desert.webp');"></div>
                            <div class="slide" style="background-image: url('assets/images/hero/walt-transformation.jpg');"></div>
                            <div class="slide" style="background-image: url('assets/images/hero/superlab-interior.webp');"></div>
                        </div>

                        <div class="case-overview">
                            <div class="smoke-effect-bg"></div>
                            <div class="confidential-stamp">CONFIDENTIAL</div>
                            <h3>Case Overview: Operation Breaking Bad</h3>
                            <p>Subject: Walter White, a former high school chemistry teacher, initiated the production of high-purity methamphetamine. Following a terminal cancer diagnosis, White partnered with former student <span class="redacted">Jesse Pinkman</span> to establish a localized distribution network.</p>
                            <p>Intelligence suggests a later partnership and hostile takeover involving <span class="redacted">Gustavo Fring's</span> organization. The operation culminated in the collapse of the Los Pollos Hermanos drug empire and the <span class="redacted">deaths of multiple key figures</span>.</p>
                        </div>

                        <div class="most-wanted-carousel">
                            <div class="chemical-watermark">C₁₀H₁₅N</div>
                            <div class="cam-recording" title="Snap Photo" style="cursor: pointer;">
                                <span class="rec-dot"></span> REC 00:00:24
                            </div>
                            <h3 class="wanted-title">DEA MOST WANTED</h3>
                            <div class="wanted-grid">
                                <div class="wanted-mugshot">
                                    <div class="mugshot-placeholder" style="background-image: url('assets/images/characters/walter.webp'); background-position: center top;"></div>
                                    <p>HEISENBERG</p>
                                    <a href="#characters" class="view-file-btn">OPEN DOSSIER</a>
                                </div>
                                <div class="wanted-mugshot">
                                    <div class="mugshot-placeholder" style="background-image: url('assets/images/characters/jesse.webp'); background-position: center top;"></div>
                                    <p>PINKMAN</p>
                                    <a href="#characters" class="view-file-btn">OPEN DOSSIER</a>
                                </div>
                                <div class="wanted-mugshot">
                                    <div class="mugshot-placeholder" style="background-image: url('assets/images/characters/gus.png'); background-position: center top;"></div>
                                    <p>FRING</p>
                                    <a href="#characters" class="view-file-btn">OPEN DOSSIER</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside class="ads-sidebar">
                        <div class="lawyer-ad glitch">
                            <button class="dismiss-ad-btn" title="Dismiss Ad">&times;</button>
                            <div class="ad-label">ADVERTISING SPACE</div>
                            <div class="ad-image-container">
                                <img src="assets/images/marketing/saul-ad.webp" alt="Better Call Saul" class="saul-ad-img">
                                <div class="ad-glitch-overlay"></div>
                            </div>
                            <div class="ad-disclaimer">[AD] Legal services on this site are for entertainment purposes only.</div>
                        </div>

                        <div class="lawyer-ad">
                            <button class="dismiss-ad-btn" title="Dismiss Ad">&times;</button>
                            <div class="ad-label" style="background:#ff3333; color:#fff;">ADVERTISING SPACE</div>
                            <div class="ad-image-container">
                                <img src="assets/images/marketing/los-pollos-ad.png" alt="Los Pollos Hermanos" class="saul-ad-img">
                            </div>
                            <div class="ad-disclaimer">[AD] Caution: Highly addictive substance.</div>
                        </div>
                    </aside>
                </div>

                <div class="chemical-ticker">
                    <div class="ticker-track">
                        <span>[CH3NH2] METHYLAMINE: 1,000 GAL</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>[C10H15N] PURITY: 99.1%</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>YIELD RATING: OPTIMUM</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>STREET VALUE: $80,000,000</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>STATUS: COOKING</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>[CH3NH2] METHYLAMINE: 1,000 GAL</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>[C10H15N] PURITY: 99.1%</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>YIELD RATING: OPTIMUM</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>STREET VALUE: $80,000,000</span>
                        <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <span>STATUS: COOKING</span>
                    </div>
                </div>
            </section>
        `;
    }

    // Listen to hash changes for routing
    window.addEventListener('hashchange', router);
    
    // Initial load
    router();
});
