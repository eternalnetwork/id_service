import DomainSearch from "~/components/DomainSearch"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-64">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Find an Eternal ID(EID)</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">An Eternal ID or EID is a way to transact with dapps and other blockchain services without having to type out a long ethereum aderess</p>
      <DomainSearch />
    </main>
  )
}
