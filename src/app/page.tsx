import MainFrame from '@/components/MainFrame'

export default function Home() {
  return (
    <div className="min-h-screen px-2 py-2 sm:px-16 sm:py-12 flex items-center justify-center">
      <MainFrame>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Leonardo Franco Arakaki
          </h1>
          <p className="text-xl text-gray-300">
            Portfólio - Nova Página Principal
          </p>
        </div>
      </MainFrame>
    </div>
  )
}