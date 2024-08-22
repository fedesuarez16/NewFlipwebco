export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Desarrollo de Apps Web y Móviles
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-zinc-100 mx-auto">
                Impulsa tu negocio con soluciones innovadoras y personalizadas para cualquier plataforma.
              </p>
            </div>
            <div className="w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<InboxIcon className="text-white h-6 w-6 mb-2 opacity-75" />}
                  title="Desarrollo Full-Stack"
                  description="Desde el backend hasta el frontend, desarrollamos soluciones completas que garantizan rendimiento y escalabilidad."
                />
                <FeatureCard
                  icon={<MergeIcon className="text-white h-6 w-6 mb-2 opacity-75" />}
                  title="Integración Continua"
                  description="Integramos APIs, bases de datos y servicios de terceros para una experiencia sin fisuras."
                />
                <FeatureCard
                  icon={<SettingsIcon className="text-white h-6 w-6 mb-2 opacity-75" />}
                  title="Personalización Completa"
                  description="Adaptamos cada aplicación a las necesidades específicas de tu negocio para lograr un impacto máximo."
                />
                <FeatureCard
                  icon={<SearchIcon className="text-white h-6 w-6 mb-2 opacity-75" />}
                  title="Optimización SEO"
                  description="Aseguramos que tu aplicación web esté optimizada para los motores de búsqueda, aumentando su visibilidad online."
                />
                <FeatureCard
                  icon={<LockIcon className="text-white h-6 w-6 mb-2 opacity-75" />}
                  title="Seguridad Robusta"
                  description="Implementamos medidas de seguridad avanzadas para proteger tus datos y los de tus usuarios."
                />
                <FeatureCard
                  icon={<CombineIcon className="text-white h-6 w-6 mb-2 opacity-75" />}
                  title="Despliegue Multiplataforma"
                  description="Llevamos tu aplicación a múltiples plataformas, asegurando una experiencia coherente en web y móvil."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
      <div className="p-2 bg-black bg-opacity-50 rounded-full">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-gray-500 dark:text-zinc-100">
        {description}
      </p>
    </div>
  );
}

function CombineIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MergeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-1.94 1.5l-.3 1.1a1 1 0 0 1-.95.75h-.28a2 2 0 0 0-1.57.77l-.2.26a2 2 0 0 0 .12 2.56l.75.65a1 1 0 0 1 0 1.53l-.75.65a2 2 0 0 0-.12 2.56l.2.26a2 2 0 0 0 1.57.77h.28a1 1 0 0 1 .95.75l.3 1.1a2 2 0 0 0 1.94 1.5h.44a2 2 0 0 0 1.94-1.5l.3-1.1a1 1 0 0 1 .95-.75h.28a2 2 0 0 0 1.57-.77l.2-.26a2 2 0 0 0-.12-2.56l-.75-.65a1 1 0 0 1 0-1.53l.75-.65a2 2 0 0 0 .12-2.56l-.2-.26a2 2 0 0 0-1.57-.77h-.28a1 1 0 0 1-.95-.75l-.3-1.1a2 2 0 0 0-1.94-1.5z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
