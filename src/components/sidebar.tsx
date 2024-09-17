import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from "react-icons/io5";
import { MenuItemProperties, SidebarMenuItem } from "./sidebarMenuItem";

const menuItems:Array<MenuItemProperties> = [
  {
    path  : '/dashboard/main',
    icon  : <IoBrowsersOutline size={20} color="white"/>,
    title : 'Dashboard',
    subtitle : 'Visualizacion'
  },
  {
    path  : '/dashboard/counter',
    icon  : <IoCalculator size={20} color="white"/>,
    title : 'Counter',
    subtitle : 'contador Client Side'
  },
  {
    path  : '/dashboard/pokemons',
    icon  : <IoFootball size={20} color="white"/>,
    title : 'Pokemones',
    subtitle : 'Generacion estatica'
  },
]

export const Sidebar = () => {
  return (
    <div id="menu" 
      style= {{width: '400px'}}  
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2"/>
          <span>Dash</span>
          <span className="text-blue-500">8</span>.</h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>


      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500 mb-2">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8" 
              src="https://scontent-bog2-2.cdninstagram.com/v/t51.29350-15/403836487_1033386984539697_8288791633521843862_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTc5eDE0MjEuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-bog2-2.cdninstagram.com&_nc_cat=109&_nc_ohc=dQXLOC8-r2sQ7kNvgFZXRlC&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzI0MTAwODYwMDM0NzI0NDgxMA%3D%3D.3-ccb7-5&oh=00_AYCC4cF5bVA5y7Jug0TK094VpUfM5GTrPsL8AD21hZOB1A&oe=66EE3D32&_nc_sid=8f1549"
              alt="" 
              width={150}
              height={150}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Manuel Castro
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map(item => (<SidebarMenuItem key={item.path} {...item }/>))
        }      
      </div>
    </div>
  );
}