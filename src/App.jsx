import "./App.css";

function App() {
  return (
    <main className="login-page">
      <section className="showcase">
        <div className="showcase-top">
          <a className="brand" href="#">
            <span className="brand-mark">R</span>
            <span className="brand-name">ROYAL</span>
          </a>

          <span className="showcase-label">EXCLUSIVE SANCTUARY</span>
        </div>

        <div className="showcase-content">
          <span className="eyebrow">THE EPITOME OF LUXURY</span>

          <h1>
            Absolute prestige.
            <br />
            <span>Uncompromised.</span>
          </h1>

          <p>
            An elite digital ecosystem meticulously crafted for distinguished individuals.
          </p>
        </div>

        <div className="showcase-bottom">
          <div className="gold-line" />
          <span>EST. MMXXIV</span>
          <span>PRIVATE ACCESS</span>
        </div>

        <div className="decorative-orbit orbit-one" />
        <div className="decorative-orbit orbit-two" />
        <div className="decorative-glow" />
      </section>

      <section className="form-panel">
        <div className="form-top">
          <span className="mobile-brand">
            <span className="brand-mark">R</span>
            <span className="brand-name">ROYAL</span>
          </span>


        </div>

        <div className="login-card">
          <div className="form-heading">
            <span className="eyebrow">MEMBER AUTHENTICATION</span>
            <h2>Welcome to Royal</h2>
            <p>Please enter your credentials to access your private vault.</p>
          </div>

          <form className="login-form">

            <label className="field-label" htmlFor="username">
              Username
            </label>
            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20a7 7 0 0 1 14 0" />
                </svg>
              </span>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                autoComplete="username"
              />
            </div>

 
            <label className="field-label" htmlFor="phone">
              Phone Number
            </label>
            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 3.8h2.6l1.3 4.1-1.8 1.5a14.6 14.6 0 0 0 5.9 5.9l1.5-1.8 4.1 1.3v2.6c0 .9-.7 1.6-1.6 1.6A15.8 15.8 0 0 1 5 5.4c0-.9.7-1.6 1.6-1.6Z" />
                </svg>
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+Country code and phone number"
                autoComplete="tel"
              />
            </div>


            <div className="password-heading">
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <a className="text-link" href="#">
                Forgot password?
              </a>
            </div>

            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
              </span>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <label className="remember-option">
              <input type="checkbox" />
              <span className="custom-checkbox" />
              <span>Remember this device</span>
            </label>

            <button className="sign-in-button" type="button">
              <span>Access Vault</span>
              <span className="button-arrow">→</span>
            </button>
          </form>

          <p className="signup-note">
            Don't have an elite membership? <a href="#">Apply for access</a>
          </p>
        </div>

        <footer className="form-footer">
          <span>© 2026 Royal Corporation. All rights reserved.</span>
          <a href="#">Privacy &amp; Security Protocol</a>
        </footer>
      </section>
    </main>
  );
}

export default App;
