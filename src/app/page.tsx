import Image from "next/image.js";
import {AddListIcon, BackIcon, CreatListIcon, ExitIcon, ForwardIcon, HomeIcon,LibraryIcon,SearchIcon} from "../../public/svg/Icons.js"
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 text-zinc-50 text-sm  ">
        <aside className="space-y-8 w-56 bg-black pl-5 pt-5  text-zinc-400 " >

          <nav className="flex flex-col gap-3">
            <a href="" className="flex gap-3 hover:text-zinc-50"><HomeIcon /> Home</a>
            <a href="" className="flex gap-3 hover:text-zinc-50 "><SearchIcon/> Search</a>
            <a href="" className="flex gap-3 hover:text-zinc-50 "><LibraryIcon/> Your Library</a>
          </nav>
          <nav className="flex flex-col gap-3">
              <a href="" className="flex gap-3 hover:text-zinc-50 "> <AddListIcon/> Creat Playlist</a>
              <a href="" className="flex gap-3 hover:text-zinc-50 "> <CreatListIcon/> Liked Songs</a>
          </nav>
          <nav className="w-44 mt-10 pt-6 border-t border-zinc-600  flex flex-col space-y-3 ">
            <a href="" className="hover:text-zinc-50">Ambient</a>
            <a href="" className="hover:text-zinc-50">Eletronic</a>
            <a href="" className="hover:text-zinc-50">Blues</a>
            <a href="" className="hover:text-zinc-50">Acoutsc</a>
            <a href="" className="hover:text-zinc-50">Children</a>
            <a href="" className="hover:text-zinc-50">Ambients</a>
            <a href="" className="hover:text-zinc-50">Fantasy</a>
            <a href="" className="hover:text-zinc-50">Classical</a>
            <a href="" className="hover:text-zinc-50">Reggae</a>
            <a href="" className="hover:text-zinc-50">Indie</a>
          </nav>
        </aside>
        <main className="flex-1 pl-7 pt-4 space-y-8">
          <div className="flex gap-3 items-center">
            <button className="rounded-full bg-zinc-950 hover:bg-zinc-700"><BackIcon /></button> 
            <button className="rounded-full bg-zinc-950 hover:bg-zinc-700"><ForwardIcon /></button>

          </div>
          <div>
            <h1 className="text-3xl font-semibold">Recent searches</h1>
            <div className="w-max mt-6 grid grid-cols-3 gap-4 ">
              <div className="cursor-pointer bg-zinc-800 w-82 h-16 rounded-md flex flex-row items-center gap-3 hover:bg-zinc-700  ">
                <Image width={64} height={64} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
              </div>
              <div className="cursor-pointer bg-zinc-800 w-82 h-16 rounded-md flex flex-row items-center gap-3 hover:bg-zinc-700  ">
                <Image width={64} height={64} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
              </div>
              <div className="cursor-pointer bg-zinc-800 w-82 h-16 rounded-md flex flex-row items-center gap-3 hover:bg-zinc-700  ">
                <Image width={64} height={64} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
              </div>
              <div className="cursor-pointer bg-zinc-800 w-82 h-16 rounded-md flex flex-row items-center gap-3 hover:bg-zinc-700  ">
                <Image width={64} height={64} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
              </div>
              <div className="cursor-pointer bg-zinc-800 w-82 h-16 rounded-md flex flex-row items-center gap-3 hover:bg-zinc-700  ">
                <Image width={64} height={64} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
              </div>
              <div className="cursor-pointer bg-zinc-800 w-82 h-16 rounded-md flex flex-row items-center gap-3 hover:bg-zinc-700  ">
                <Image width={64} height={64} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer>
        foo
      </footer>
    </div>
  ); 
}
