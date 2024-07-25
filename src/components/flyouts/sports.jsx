
export default function Health() {

    return(
        <div className="px-5 pt-6  bg-white rounded-sm max-w-[746px] h-[318px] mt-8 ml-8">
            <div className="wrapper flex flex-col">
                <a className= "mb-3.5" href="">sports & outdoors</a>
                <div className="flex gap-4">
                    <div className="kitchen flex flex-col w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">ball sports</a></li>
                            <li><a href="">football</a></li>
                            <li><a href="">basketball</a></li>
                            <li><a href="">volley ball</a></li>
                    
                        </ul>
                    </div>

                    <div className="fitness flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">fitness</a></li>
                            <li><a href="">treadmill</a></li>
                            <li><a href="">sports bags</a></li>
                            <li><a href="">dumb bells & weights</a></li>

                        </ul>
                    </div>

                    <div className="sports-shoes flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">sports shoes</a></li>
                            <li><a href="">running shoes</a></li>
                            <li><a href="">outdoor sandals</a></li>
                            <li><a href="">football shoes </a></li>
                            <li><a href="">sneakers</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}