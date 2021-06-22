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
        <header className='flex flex-col sm:flex-row m-5 justify-between'>
            <div className={"flex flex-grow justify-evenly max-w-2xl"}>
                <HeaderItem title={"Home"} Icon={HomeIcon}/>
                <HeaderItem title={"Collection"} Icon={CollectionIcon}/>
                <HeaderItem title={"Verified"} Icon={BadgeCheckIcon}/>
                <HeaderItem title={"Trending"} Icon={LightningBoltIcon}/>
                <HeaderItem title={"User"} Icon={UserIcon}/>
                <HeaderItem title={"User"} Icon={SearchIcon}/>
            </div>
            <Image className={"object-contain"} src={"https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"} width={75} height={25}/>
        </header>
    );
}

export default Header;