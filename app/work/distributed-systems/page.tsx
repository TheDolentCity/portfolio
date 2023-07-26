import HeaderProjectsPopover from '@/components/header/HeaderProjectsPopover'
import HeaderResumeButton from '@/components/header/HeaderResumeButton'
import HeaderWorkPopover from '@/components/header/HeaderWorkPopover'
import DistributedSystems from './distributed-systems.mdx'
import Main from '@/components/article/Main'
import Article from '@/components/article/Article'
import MainGradient from '@/components/article/MainGradient'

export default function Page() {
  return (
    <>
      <div className="relative w-screen h-screen min-h-[100svh] overflow-y-scroll">
        <header className="sticky z-20 top-0 left-0 right-0 flex h-20 gap-4 px-4 md:px-12 items-center justify-between border-b border-base-900 bg-black/50 backdrop-blur">
          <h1 className="flex-1 text-3xl font-bold tracking-tighter text-focus whitespace-nowrap">
            Dante Nardo
          </h1>
          <div className="grow flex gap-2">
            <HeaderWorkPopover />
            <HeaderProjectsPopover />
          </div>
          <div className="flex-1 flex justify-end">
            <HeaderResumeButton />
          </div>
        </header>
        <Main>
          <MainGradient />
          <Article>
            <DistributedSystems />
          </Article>
        </Main>
      </div>
    </>
  )
}
