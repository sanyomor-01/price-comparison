
export default function Phone() {

    return(
        <div className="px-5 pt-6  bg-white rounded-sm max-w-[746px] h-[318px] mt-8 ml-8">
            <div className="wrapper flex flex-col">
                <a className= "mb-3.5" href="">Phones</a>
                <div className="flex gap-4">
                    <div className="phones flex flex-col w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">Mobile Phones</a></li>
                            <li><a href="">Samsung</a></li>
                            <li><a href=""> Apple</a></li>
                            <li><a href="">Xiomi</a></li>
                            <li><a href="">Google Pixels</a></li>
                            <li><a href="">Vivo</a></li>

                        </ul>
                    </div>

                    <div className="phone-accessoriez flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">mobile phone accessories</a></li>
                            <li><a href="">bluetooth headset</a></li>
                            <li><a href="">phone holders</a></li>
                            <li><a href="">power banks</a></li>
                        </ul>
                    </div>

                    <div className="wearables flex flex-col  w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">Wearables</a></li>
                            <li><a href="">fitness watches</a></li>
                            <li><a href="">Smart watches</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}