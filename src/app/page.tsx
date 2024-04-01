import {AddListIcon, CreatListIcon, HomeIcon,LibraryIcon,SearchIcon} from "../../public/svg/Icons.js"
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 text-zinc-50 text-sm ">
        <aside className="space-y-9 w-56 bg-black pl-5 pt-5 text-zinc-400 " >

          <nav className="flex flex-col gap-3">
            <a href="" className="flex gap-3 hover:text-zinc-50"><HomeIcon /> Home</a>
            <a href="" className="flex gap-3 hover:text-zinc-50 "><SearchIcon/> Search</a>
            <a href="" className="flex gap-3 hover:text-zinc-50 "><LibraryIcon/> Your Library</a>
          </nav>
          <nav className="flex flex-col gap-3">
              <a href="" className="flex gap-3 hover:text-zinc-50 "> <AddListIcon/> Creat Playlist</a>
              <a href="" className="flex gap-3 hover:text-zinc-50 "> <CreatListIcon/> Liked Songs</a>
          </nav>
          <nav className="w-44 mt-10 pt-10 border-t border-zinc-600 ">
            <a href="">jhkl</a>
          </nav>
        </aside>
        <main className="flex-1">
          main
        </main>
      </div>
      <footer>
        foo
      </footer>
    </div>
  ); 
}
