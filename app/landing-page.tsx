import Link from "next/link";
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span>Site<span>Snipe</span></span>
        </div>
        <ul>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/sign-in" className="nav-sign-in">Sign In</Link>
          <Link href="/sign-up" className="nav-cta">Get Started</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-badge"><div className="dot" />{" "}20.6M+ business listings available</div>
        <h1>Find businesses<br />without websites.<br /><span className="highlight">Sell them one.</span></h1>
        <p>SiteSnipe finds local businesses with no website, builds them a professional site in seconds, and gives you everything you need to close the deal.</p>
        <div className="hero-ctas">
          <Link href="/sign-up" className="btn-primary">Start Sniping Leads</Link>
          <a href="#how" className="btn-secondary">See How It Works</a>
        </div>
      </section>

      <div className="proof-bar">
        <div className="proof-stat"><div className="number">20.6M+</div><div className="label">Searchable Businesses</div></div>
        <div className="proof-stat"><div className="number">~30s</div><div className="label">To Generate a Full Website</div></div>
        <div className="proof-stat"><div className="number">40+</div><div className="label">Lead Filters</div></div>
        <div className="proof-stat"><div className="number">$0</div><div className="label">Design Skills Needed</div></div>
      </div>

      <section id="how">
        <div className="section-inner">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Three steps to your first sale</h2>
          <p className="section-sub">No coding. No design. No cold-calling lists. Just leads ready to buy.</p>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" />
                </svg>
              </div>
              <h3>Find Leads</h3>
              <p>Search 20.6M+ Google Business Profiles. Filter by industry, location, rating, reviews, photos — and most importantly: <strong>no website.</strong></p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                </svg>
              </div>
              <h3>Build Their Site</h3>
              <p>One click pulls their GBP data — name, photos, services, hours — and generates a professional website in under 30 seconds.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Close the Deal</h3>
              <p>Show them a live preview of their new site. Use built-in SEO reports, rankings data, and AI visibility scores as ammo to sell.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="section-inner">
          <div className="feature-block">
            <div className="feature-text">
              <div className="section-label">Lead Finder</div>
              <h3>A database of businesses<br />begging for a website</h3>
              <p>Access 20.6M+ Google Business Profiles. Filter down to your ideal prospect in seconds — businesses without websites who are actively getting reviews and traffic.</p>
              <ul className="feature-list">
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Filter for businesses with no website</li>
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Sort by rating, review count, photos</li>
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Filter by verification status</li>
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Search any industry, any location</li>
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>See last updated date to find active businesses</li>
              </ul>
              <div style={{ marginTop: 20 }}>
                <div className="section-label" style={{ marginBottom: 12, fontSize: "0.7rem" }}>Available Filters</div>
                <div className="filter-cloud">
                  <span className="filter-tag">No Website</span>
                  <span className="filter-tag">City / Region</span>
                  <span className="filter-tag">Business Category</span>
                  <span className="filter-tag">Min. Rating</span>
                  <span className="filter-tag">Min. Reviews</span>
                  <span className="filter-tag"># of Photos</span>
                  <span className="filter-tag">Verified</span>
                  <span className="filter-tag">Last Updated</span>
                  <span className="filter-tag">Has Phone</span>
                  <span className="filter-tag">Has Address</span>
                  <span className="filter-tag">Has Hours</span>
                  <span className="filter-tag">Rating Range</span>
                  <span className="filter-tag">Review Range</span>
                  <span className="filter-tag">Is Claimed</span>
                  <span className="filter-tag">Keywords</span>
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <table className="mock-table">
                <thead><tr><th>Business</th><th>Rating</th><th>Reviews</th><th>Website</th></tr></thead>
                <tbody>
                  <tr><td><strong>Mike&apos;s Plumbing Co</strong><br /><span style={{ fontSize: "0.75rem", color: "var(--text2)" }}>Austin, TX</span></td><td><span className="rating">*****</span> 4.9</td><td>127</td><td><span className="tag tag-red">None</span></td></tr>
                  <tr><td><strong>Sunrise Landscaping</strong><br /><span style={{ fontSize: "0.75rem", color: "var(--text2)" }}>Austin, TX</span></td><td><span className="rating">****</span> 4.6</td><td>84</td><td><span className="tag tag-red">None</span></td></tr>
                  <tr><td><strong>Elite Roofing LLC</strong><br /><span style={{ fontSize: "0.75rem", color: "var(--text2)" }}>Round Rock, TX</span></td><td><span className="rating">*****</span> 4.8</td><td>203</td><td><span className="tag tag-red">None</span></td></tr>
                  <tr><td><strong>Comfort Air HVAC</strong><br /><span style={{ fontSize: "0.75rem", color: "var(--text2)" }}>Cedar Park, TX</span></td><td><span className="rating">****</span> 4.5</td><td>56</td><td><span className="tag tag-red">None</span></td></tr>
                  <tr><td><strong>Pro Clean Gutters</strong><br /><span style={{ fontSize: "0.75rem", color: "var(--text2)" }}>Pflugerville, TX</span></td><td><span className="rating">*****</span> 5.0</td><td>312</td><td><span className="tag tag-red">None</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <div className="feature-block reverse">
            <div className="feature-text">
              <div className="section-label">Instant Site Builder</div>
              <h3>A full website from a Google profile — in one click</h3>
              <p>Select any lead and hit &quot;Build Site.&quot; We pull their name, photos, services, contact info, and hours directly from their Google Business Profile and generate a clean, professional site instantly.</p>
              <ul className="feature-list">
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Auto-pulls all GBP data and images</li>
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Professional template built for home services</li>
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>Live preview link to share with the prospect</li>
                <li><span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>No design or coding skills needed</li>
              </ul>
              <div className="gen-time">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                Average build time: 28 seconds
              </div>
            </div>
            <div className="feature-visual">
              <div className="mock-browser">
                <div className="browser-bar"><div className="browser-dot" /><div className="browser-dot" /><div className="browser-dot" /><div className="browser-url">mikesplumbing.sitesnipe.io</div></div>
                <div className="browser-content">
                  <div className="mock-hero-block"><h4>Mike&apos;s Plumbing Co</h4><p>Professional plumbing services in Austin, TX</p></div>
                  <div className="mock-sections"><div className="mock-section">Services</div><div className="mock-section">Reviews</div><div className="mock-section">Contact</div></div>
                  <div className="mock-sections"><div className="mock-section">Gallery</div><div className="mock-section">About</div><div className="mock-section">Hours</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ammo-section" style={{ paddingTop: 80 }}>
        <div className="section-inner">
          <div style={{ textAlign: "center" }}>
            <div className="section-label">Sales Ammo</div>
            <h2 className="section-title">Built-in intel to close every deal</h2>
            <p className="section-sub" style={{ margin: "12px auto 0" }}>When you open a lead profile, you get instant access to data that makes you look like an expert — and makes the sale obvious.</p>
          </div>
          <div className="ammo-grid">
            <div className="ammo-card">
              <div className="icon-box-sm" style={{ background: "rgba(77,139,255,0.08)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#4d8bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
              </div>
              <h4>Google Keyword Rankings</h4>
              <p>See where the business ranks (or doesn&apos;t) for their most important local keywords.</p>
              <div className="pitch">&quot;You&apos;re not showing up for &apos;plumber austin tx&apos; — your competitor is. Let me fix that.&quot;</div>
            </div>
            <div className="ammo-card">
              <div className="icon-box-sm" style={{ background: "rgba(0,232,123,0.08)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#00e87b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
              </div>
              <h4>AI Visibility Score</h4>
              <p>Check if ChatGPT, Gemini, or other AI tools mention this business. Most don&apos;t — huge selling point.</p>
              <div className="pitch">&quot;When someone asks AI for a plumber in Austin, your business doesn&apos;t exist.&quot;</div>
            </div>
            <div className="ammo-card">
              <div className="icon-box-sm" style={{ background: "rgba(255,107,53,0.08)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
              </div>
              <h4>Backlink Analysis</h4>
              <p>See their backlink profile vs competitors. Show them exactly why they&apos;re being outranked.</p>
              <div className="pitch">&quot;Your top competitor has 84 backlinks. You have 0. A website changes that.&quot;</div>
            </div>
            <div className="ammo-card">
              <div className="icon-box-sm" style={{ background: "rgba(255,255,255,0.04)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#8a8a96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="m8 11 2 2 4-4" /></svg>
              </div>
              <h4>On-Page SEO Audit</h4>
              <p>If they have a site, instantly audit it. Find missing title tags, slow load times, broken links.</p>
              <div className="pitch">&quot;Your current site has 23 SEO issues. I can build you a clean one today.&quot;</div>
            </div>
          </div>
        </div>
      </section>

      <section className="math-section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-label">The Math</div>
          <h2 className="section-title">Even one sale pays for a year of SiteSnipe</h2>
          <div className="math-grid">
            <div className="math-card"><div className="val">$29</div><div className="desc">SiteSnipe per month</div></div>
            <div className="math-card"><div className="val">$500-2k</div><div className="desc">What businesses pay for a website</div></div>
            <div className="math-card"><div className="val">30 sec</div><div className="desc">Your build time per site</div></div>
          </div>
          <p className="math-note">Close 1 deal a month and you&apos;re already profitable. Close 5 and you&apos;ve replaced a full-time income.</p>
        </div>
      </section>

      <section id="pricing">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div className="section-label">Pricing</div>
          <h2 className="section-title">One sale pays for itself</h2>
          <p className="section-sub" style={{ margin: "8px auto 0" }}>Start finding and closing leads today.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-name">Starter</div>
              <div className="price-amount">$29<span>/mo</span></div>
              <div className="price-desc">Perfect for testing the waters</div>
              <ul className="price-features">
                <li>2,500 lead lookups / month</li>
                <li>25 website generations</li>
                <li>All search filters</li>
                <li>30-day preview links</li>
                <li>Lead export (CSV)</li>
                <li className="price-feature-disabled">White-label preview domain</li>
              </ul>
              <Link href="/sign-up" className="price-btn price-btn-outline">Get Started</Link>
            </div>
            <div className="price-card featured">
              <div className="price-name">Pro</div>
              <div className="price-amount">$79<span>/mo</span></div>
              <div className="price-desc">For serious website sellers</div>
              <ul className="price-features">
                <li>5,000 lead lookups / month</li>
                <li>50 website generations</li>
                <li>All search filters</li>
                <li>SEO &amp; keyword reports</li>
                <li>AI visibility scores</li>
                <li>Backlink analysis</li>
                <li>White-label preview domain</li>
                <li>Priority support</li>
              </ul>
              <Link href="/sign-up" className="price-btn price-btn-fill">Get Started</Link>
            </div>
            <div className="price-card">
              <div className="price-name">Agency</div>
              <div className="price-amount">$199<span>/mo</span></div>
              <div className="price-desc">Scale to a full operation</div>
              <ul className="price-features">
                <li>10,000 lead lookups / month</li>
                <li>Unlimited site generations</li>
                <li>All Pro features</li>
                <li>On-page SEO audits</li>
                <li>Content analysis</li>
                <li>White-label preview domain</li>
                <li>Team seats (coming soon)</li>
              </ul>
              <Link href="/sign-up" className="price-btn price-btn-outline">Get Started</Link>
            </div>
            <p className="pricing-note">Host client sites for $9/mo each. Includes custom domain support.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-inner" style={{ position: "relative" }}>
          <h2>Stop building websites from scratch.<br /><span style={{ color: "var(--accent)" }}>Start selling them.</span></h2>
          <p>20.6M+ businesses. Millions without a website. Your next client is one search away.</p>
          <Link href="/sign-up" className="btn-primary" style={{ position: "relative" }}>Start Your Free Trial</Link>
        </div>
      </section>

      <footer>
        <div className="logo" style={{ justifyContent: "center", marginBottom: 16 }}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          </div>
          <span>Site<span>Snipe</span></span>
        </div>
        &copy; 2026 SiteSnipe. All rights reserved.
      </footer>
    </div>
  );
}
