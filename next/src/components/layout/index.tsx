type Props = {
  page: string;
  children: React.ReactNode;
};

export function Layout({ page, children }: Props) {
  return (
    <>
      <header className="header--container">
        <div className="header">
          <p className="site-logo">
            <a href="/">Sen Hongo</a>
          </p>

          <nav className="header--nav">
            <a href="/now">Now</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/projects">Projects</a>
          </nav>

          <a className="millefeuille-cta" href="https://millefeuille.app">
            Try Millefeuille
          </a>
        </div>
      </header>

      <section className="site--title">
        <h1>{page}</h1>
      </section>

      <main className="site--main">{children}</main>

      <footer className="footer">
        <div className="footer--wrapper">
          <section className="millefeuille-pr">
            <p className="millefeuille-catchphrase">
              A million layers of <br />
              pure financial goodness
            </p>

            <a href="https://millefeuille.app" className="millefeuille-cta">
              Try Millefeuille.app
            </a>
          </section>

          <section className="footer--body">
            <nav className="footer--nav">
              <a href="/now">Now</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/projects">Projects</a>
              <a href="https://millefeuille.app">Millefeuille</a>
            </nav>

            <div className="footer--credits">
              <p>&#169; Sen Hongo</p>

              <nav className="footer--social">
                <a href="https://github.com/senhongo">
                  <img src="/github-mark.png" width="30" />
                </a>
                <a href="https://www.linkedin.com/in/sen-hongo/">
                  <img src="/In-Blue-128@2x.png" width="30" />
                </a>
              </nav>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
