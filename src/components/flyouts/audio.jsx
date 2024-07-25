
export default function Audio() {

    return(
        <div className="flyout-content px-5 pt-6  bg-white rounded-sm w-[470px] h-[300px] mt-8 ml-8">
            <div className="wrapper flex flex-col">
                <a className= "mb-3.5 text-lg font-medium capitalize hover:text-blue-700" href="">Audio & Video</a>
                <div className="flex gap-4">
                    <div className="phones flex flex-col w-[33%] gap-3 capitalize">
                        <a className="font-medium" href="">TVs</a>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">Headphones & Accessories</a></li>
                            <li><a href="">Headphones</a></li>
                            <li><a href=""> Headphone accessories</a></li>
                        </ul>
                    </div>

                    <div className="phone-accessoriez flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">speakers</a></li>
                            <li><a href="">subwoofers</a></li>
                            <li><a href="">portable speakers</a></li>
                            <li><a href="">floorstanding speakers</a></li>
                            <li><a href="">surround system</a></li>
                        </ul>
                    </div>

                    <div className="wearables flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">Projectors & Screens</a></li>
                            <li><a href="">Projector calibrator</a></li>
                            <li><a href="">Projectors</a></li>
                            <li><a href="">Projector screens</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}