import logo from '../assets/icons/logo.svg'
import setting from '../assets/icons/setting-2.svg'
import search from '../assets/icons/search-normal.svg'
import slash from '../assets/icons/slash-icon.svg'
import heart from '../assets/icons/heart.svg'
import user from '../assets/icons/user.svg'

const Nav = () => {
  return (
    <header className='block  pb-3 pt-6 px-[30px]  bg-[#01274B]'>
        <nav>
            <div className="top flex justify-between"> 
                <a className='flex gap-3 items-center font-bebas text-3xl text-[#F4F4F4]' href="/">
                    <img className='w-12 ' src= {logo}  alt="logo" />
                    opendeals
                </a>
                <div className="search px-4 py-3 flex justify-between rounded bg-white items-center w-[620px]">
                    <div className='flex gap-4'>
                        <img className='w-6' src={search} alt="search" />
                        <input   className="w-[266px] px-2 my-1  placeholder:text-sm placeholder:text-[#014F97]  border-0 outline-none" type="search"  placeholder="Search for Hardware, Phones..."/>
                    </div>
                    <img className='w-6' src={slash} alt="" />
                </div>
                <div className="nav-links flex items-center gap-3">
                    <a  className=" flex gap-3 px-4 py-2 items-center text-sm  font-medium text-white "href="/">
                        <img className='w-5 h-5' src={heart} alt="heart" />
                        Wishlist
                    </a>
                    <a className=" flex gap-3 px-4 py-2 items-center text-sm font-medium text-white" href="/">
                        <img  className='w-5 h-5'src={setting} alt="heart" />
                        Settings
                    </a>
                    <a className=" flex gap-2 px-4 py-2 items-center text-sm  font-medium  rounded bg-white" href="/">
                        <img className='w-5 h-5' src={user} alt="heart" />
                        Login
                    </a>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Nav