import Image from 'next/image';
import HeaderItem from "./HeaderItem";
import {BadgeCheckIcon, HomeIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";

/*Header component
* Search bar
* Home Button
* Profile
* Logo
* */


function Header(props) {
    return (
        <header className='flex flex-col  items-center sm:flex-row m-4 justify-between'>
            <div className={"flex flex-grow m-1 justify-evenly max-w-2xl"}>
                <HeaderItem title={"Home"} Icon={HomeIcon}/>
                <HeaderItem title={"Collection"} Icon={CollectionIcon}/>
                <HeaderItem title={"Verified"} Icon={BadgeCheckIcon}/>
                <HeaderItem title={"Trending"} Icon={LightningBoltIcon}/>
                <HeaderItem title={"User"} Icon={UserIcon}/>
                <HeaderItem title={"Search"} Icon={SearchIcon}/>
                {/*<div className="pt-2 relative mx-auto text-gray-600">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search"/>
                </div>*/}
            </div>
            <h1 className={"text-2xl font-bold mb-2"}>MOVIE DATABASE</h1>
            {/*<Image className={"object-contain"} src={"https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"} width={75} height={25}/>*/}
        </header>
    );
}

export default Header;