import Image from "next/image.js";
import {AddListIcon, BackIcon, CreatListIcon, ExitIcon, ForwardIcon, HomeIcon,LibraryIcon,SearchIcon} from "../../public/svg/Icons.js"
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 text-zinc-50 text-sm ">
        <aside className="space-y-8 w-56 bg-black pl-5 pt-5 text-zinc-400 " >

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
            <a href="" className="hover:text-zinc-50">Ambient,</a>
            <a href="" className="hover:text-zinc-50">Eletronic,</a>
            <a href="" className="hover:text-zinc-50">Blues,</a>
            <a href="" className="hover:text-zinc-50">Acoutsc,</a>
            <a href="" className="hover:text-zinc-50">Children,</a>
            <a href="" className="hover:text-zinc-50">Ambients,</a>
            <a href="" className="hover:text-zinc-50">Fantasy,</a>
          </nav>
        </aside>
        <main className="flex-1 pl-7 pt-4 space-y-8">
          <div className="flex gap-3 items-center">
            <button className="rounded-full bg-zinc-950 hover:bg-zinc-700"><BackIcon /></button> 
            <button className="rounded-full bg-zinc-950 hover:bg-zinc-700"><ForwardIcon /></button>

          </div>
          <div>
            <h1 className="text-3xl font-semibold">Recent searches</h1>
            <div className="mt-6 grid grid-cols-6 ">
              <div className="flex flex-col justify-start bg-zinc-800 w-40 h-52 rounded-md pl-4 space-y-2 hover:bg-zinc-700 cursor-pointer">
                <div className="flex justify-end mt-1 mr-2"><button className=" flex justify-center         items-center bg-zinc-900 w-4 h-4 rounded-full hover:bg-zinc-800"> <ExitIcon  /> </button>
                </div>
                <Image width={130} height={130} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-full mt-3 "/>
                <div className="flex flex-col">
                  <h1>Byonce</h1>
                  <h3 className="text-zinc-500">Artis</h3>
                </div>
              </div>
              <div className="flex flex-col justify-start bg-zinc-800 w-40 h-52 rounded-md pl-4 space-y-2 hover:bg-zinc-700 cursor-pointer">
                <div className="flex justify-end mt-1 mr-2"><button className=" flex justify-center         items-center bg-zinc-900 w-4 h-4 rounded-full hover:bg-zinc-800"> <ExitIcon  /> </button>
                </div>
                <Image width={130} height={130} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-full mt-3 "/>
                <div className="flex flex-col">
                  <h1>Byonce</h1>
                  <h3 className="text-zinc-500">Artis</h3>
                </div>
              </div>
              <div className="flex flex-col justify-start bg-zinc-800 w-40 h-52 rounded-md pl-4 space-y-2 hover:bg-zinc-700 cursor-pointer">
                <div className="flex justify-end mt-1 mr-2"><button className=" flex justify-center         items-center bg-zinc-900 w-4 h-4 rounded-full hover:bg-zinc-800"> <ExitIcon  /> </button>
                </div>
                <Image width={130} height={130} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-full mt-3 "/>
                <div className="flex flex-col">
                  <h1>Byonce</h1>
                  <h3 className="text-zinc-500">Artis</h3>
                </div>
              </div>
              <div className="flex flex-col justify-start bg-zinc-800 w-40 h-52 rounded-md pl-4 space-y-2 hover:bg-zinc-700 cursor-pointer">
                <div className="flex justify-end mt-1 mr-2"><button className=" flex justify-center         items-center bg-zinc-900 w-4 h-4 rounded-full hover:bg-zinc-800"> <ExitIcon  /> </button>
                </div>
                <Image width={130} height={130} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-full mt-3 "/>
                <div className="flex flex-col">
                  <h1>Byonce</h1>
                  <h3 className="text-zinc-500">Artis</h3>
                </div>
              </div>
              <div className="flex flex-col justify-start bg-zinc-800 w-40 h-52 rounded-md pl-4 space-y-2 hover:bg-zinc-700 cursor-pointer">
                <div className="flex justify-end mt-1 mr-2"><button className=" flex justify-center         items-center bg-zinc-900 w-4 h-4 rounded-full hover:bg-zinc-800"> <ExitIcon  /> </button>
                </div>
                <Image width={130} height={130} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-full mt-3 "/>
                <div className="flex flex-col">
                  <h1>Byonce</h1>
                  <h3 className="text-zinc-500">Artis</h3>
                </div>
              </div>
              <div className="flex flex-col justify-start bg-zinc-800 w-40 h-52 rounded-md pl-4 space-y-2 hover:bg-zinc-700 cursor-pointer">
                <div className="flex justify-end mt-1 mr-2"><button className=" flex justify-center         items-center bg-zinc-900 w-4 h-4 rounded-full hover:bg-zinc-800"> <ExitIcon  /> </button>
                </div>
                <Image width={130} height={130} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-full mt-3 "/>
                <div className="flex flex-col">
                  <h1>Byonce</h1>
                  <h3 className="text-zinc-500">Artis</h3>
                </div>
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
