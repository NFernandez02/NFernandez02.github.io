type Game = {
  title: string,
  image: string,
  description: string,
  itchUrl: string
}
const games: Game[] = [
  {
    title: 'Oryxys',
    image: '/images/Oryxys-Thumbnail.png',
    description: 'A Rhythm game for PC',
    itchUrl: 'https://redfrogu.itch.io/oryxys'
  },
  {
    title: 'Count n Shoot',
    image: '/images/Oryxys-Thumbnail.png',
    description: 'A Math shooting game',
    itchUrl: 'https://redfrogu.itch.io/oryxys'
  }
]

function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.itchUrl}
      target="_blank"
      rel="noreferrer"
      className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={game.image}
        alt={game.title}
        className="aspect-video w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{game.title}</h3>

        <p className="mt-2 text-gray-600">
          {game.description}
        </p>

        <p className="mt-4 text-sm font-medium">
          Play on itch.io →
        </p>
      </div>
    </a>
  )
}
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-bold">
            NFernandez
          </a>

          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900">
              About
            </a>

            <a href="#projects" className="hover:text-gray-900">
              Projects
            </a>

            <a href="#games" className="hover:text-gray-900">
              Games
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-24">
          <p className="text-sm font-medium text-gray-500">
            Web Developer
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I'm Norbert Fernandez.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I build backend systems and web applications.
            I'm a Computer Science graduate focused on backend and software development.
            I enjoy designing APIs, working with databases, and building applications that are reliable, maintainable, and practical.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/NFernandez02"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
            >
              GitHub
            </a>

            <a
              href="#projects"
              className="rounded-md border bg-white px-5 py-2.5 text-sm font-medium hover:bg-gray-100"
            >
              View projects
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t py-20">
          <h2 className="text-2xl font-bold">
            About
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            I'm a Computer Science graduate interested in building software that works well behind the scenes.

            My current focus is backend and web development, particularly building APIs, working with databases, designing application architecture, and understanding the systems that make web applications reliable and maintainable.

            One of my main projects is Laravel SaaS Admin Kit, an open-source SaaS starter project built with Laravel and Vue. It includes authentication, role-based access control, permissions, audit logging, RESTful APIs, Redis-backed queues and caching, Docker-based environments, automated testing, static analysis, and CI.

            I also enjoy game development, which has given me another way to explore programming and software design. While I'm currently focusing my career on backend and general software development, I want to keep exploring different areas of engineering as I grow.

            As a fresh graduate, I'm looking for opportunities where I can contribute to real software, learn from experienced developers, and continue developing strong engineering fundamentals.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t py-20">
          <h2 className="text-3xl font-bold">Projects</h2>

          <div className="mt-8 overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Laravel SaaS Admin Kit
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                A Laravel-based SaaS administration template focused on
                authentication, user management, roles and permissions, audit
                logging, and REST APIs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-600">
                  Laravel
                </span>

                <span className="rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-600">
                  PHP
                </span>

                <span className="rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-600">
                  MySQL
                </span>

                <span className="rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-600">
                  Tailwind CSS
                </span>

                <span className="rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-600">
                  Redis
                </span>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <img
                  src="/images/Saas-Admin-Dashboard.png"
                  alt="Laravel SaaS Admin Kit dashboard"
                  className="aspect-video w-full rounded-lg border object-cover"
                />

                <img
                  src="/images/Saas-UserProfile.png"
                  alt="Laravel SaaS Admin Kit user management"
                  className="aspect-video w-full rounded-lg border object-cover"
                />
              </div>

              <div className="mt-6">
                <a
                  href="https://github.com/NFernandez02/Laravel-Saas-Admin-Kit"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium hover:underline"
                >
                  View on GitHub →
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* Games */}
        <section id="games" className="border-t bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-bold">Games</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {games.map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Fernandez. Built with React and
            Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App