import Image from "next/image.js";
import {AddListIcon, BackIcon, CreatListIcon, ExitIcon, ForwardIcon, HomeIcon,LibraryIcon,PlayIcon,SearchIcon} from "../../public/svg/Icons.js"
export default function Home() {
  return (
    <div className="h-screen flex flex-col  ">
      <div className="flex flex-1 text-zinc-100 text-sm">
        <div className="flex flex-col overflow-y-auto h-screen">
          <aside className="space-y-8 w-56 bg-black pl-5 pt-5 pb-24 text-zinc-400 " >

            <nav className="flex flex-col gap-3">
              <a href="" className="flex gap-3 hover:text-zinc-50"><HomeIcon /> Home</a>
              <a href="" className="flex gap-3 hover:text-zinc-50 "><SearchIcon/> Search</a>
              <a href="" className="flex gap-3 hover:text-zinc-50 "><LibraryIcon/> Your Library</a>
            </nav>
            <nav className="flex flex-col gap-3">
              <a href="" className="flex gap-3 hover:text-zinc-50 "> <AddListIcon/> Creat Playlist</a>
              <a href="" className="flex gap-3 hover:text-zinc-50 "> <CreatListIcon/> Liked Songs</a>
            </nav>
            <nav className="w-44 mt-10 pt-6 border-t border-zinc-600  flex flex-col space-y-3  ">
              <a href="" className="hover:text-zinc-50">Ambient</a>
              <a href="" className="hover:text-zinc-50">Eletronic</a>
              <a href="" className="hover:text-zinc-50">Blues</a>
              <a href="" className="hover:text-zinc-50">Acoutsc</a>
              <a href="" className="hover:text-zinc-50">Children</a>
              <a href="" className="hover:text-zinc-50">Ambients</a>
              <a href="" className="hover:text-zinc-50">Fantasy</a>
              <a href="" className="hover:text-zinc-50">Classical</a>
              <a href="" className="hover:text-zinc-50">Reggae</a>
            </nav>
          </aside>
        </div>
        <main className="flex-1 pl-7 pt-4 pb-24 space-y-8 max-h-screen  overflow-y-auto">
          <div className="flex gap-3 items-center">
            <button className="rounded-full bg-zinc-950 hover:bg-zinc-700"><BackIcon /></button> 
            <button className="rounded-full bg-zinc-950 hover:bg-zinc-700"><ForwardIcon /></button>

          </div>
          <div>
            <h1 className="text-3xl font-semibold">Recent searches</h1>
            <div className="w-max mt-6 grid grid-cols-3 gap-4 ">
              <div className="group cursor-pointer bg-neutral-800 w-82 h-17 rounded-md flex flex-row items-center gap-3 hover:bg-neutral-700  transition-colors  ">
                <Image width={70} height={70} src="/images/byonce.jpeg" alt="Foto Byonce" className=" rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
                <button className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ml-auto mr-8 invisible group-hover:visible">
                  <PlayIcon  />
                </button>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-82 h-17 rounded-md flex flex-row items-center gap-3 hover:bg-neutral-700 transition-colors ">
                <Image width={70} height={70} src="/images/byonce.jpeg" alt="Foto Byonce" className=" rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
                <button className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ml-auto mr-8 invisible group-hover:visible">
                  <PlayIcon />
                </button>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-82 h-17 rounded-md flex flex-row items-center gap-3 hover:bg-neutral-700 transition-colors ">
                <Image width={70} height={70} src="/images/byonce.jpeg" alt="Foto Byonce" className=" rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
                <button className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ml-auto mr-8 invisible group-hover:visible">
                  <PlayIcon />
                </button>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-82 h-17 rounded-md flex flex-row items-center gap-3 hover:bg-neutral-700 transition-colors ">
                <Image width={70} height={70} src="/images/byonce.jpeg" alt="Foto Byonce" className=" rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
                <button className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ml-auto mr-8 invisible group-hover:visible">
                  <PlayIcon />
                </button>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-82 h-17 rounded-md flex flex-row items-center gap-3 hover:bg-neutral-700 transition-colors ">
                <Image width={70} height={70} src="/images/byonce.jpeg" alt="Foto Byonce" className=" rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
                <button className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ml-auto mr-8 invisible group-hover:visible">
                  <PlayIcon />
                </button>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-82 h-17 rounded-md flex flex-row items-center gap-3 hover:bg-neutral-700 transition-colors ">
                <Image width={70} height={70} src="/images/byonce.jpeg" alt="Foto Byonce" className=" rounded-s-md"/>
                <h1 className="font-medium">Album Beyoncé</h1>
                <button className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ml-auto mr-8 invisible group-hover:visible">
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Episodes for You</h1>
            <div className="w-max mt-6 grid grid-cols-5 gap-12   ">
             <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center ">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Episodes for You</h1>
            <div className="w-max mt-6 grid grid-cols-5 gap-12   ">
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
              <div className="group cursor-pointer bg-neutral-800 w-44 h-60  rounded-md flex flex-col pt-4 gap-3 hover:bg-neutral-700 transition-colors ">
                <div className="relative flex justify-center">
                 <Image width={150} height={150} src="/images/byonce.jpeg" alt="Foto Byonce" className="rounded-sm"/>
                 <div className="flex items-end justify-end ">
                  <button className="absolute bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center pl-0.5 mb-3 mr-3 shadow-2xl invisible group-hover:visible">
                      <PlayIcon  />
                    </button>
                  </div> 
                </div>
                <div className="flex flex-col gap-2 pl-3 ">
                  <p className="text-sm ">TEXAS HOLD 'EM</p>
                  <p className="text-xs text-zinc-400">Beyoncé</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-1000 border-t border-zinc-700 pl-6 pt-3 pb-3 fixed bottom-0 right-0 w-full   ">
      <Image width={60} height={60} src="/images/byonce.jpeg" alt="Foto Byonce" className=""/>
      </footer>
    </div>
  ); 
}
