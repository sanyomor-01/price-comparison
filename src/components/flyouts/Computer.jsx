
export default function Computer() {

    return(
        <div className=" flyout-content px-5 pt-6  bg-white rounded-sm w-[470px] h-[300px] mt-8 ml-8">
            <div className="wrapper flex flex-col">
                <a className= "mb-3.5 text-lg font-medium capitalize hover:text-blue-700" href="">Computer & Accessories</a>
                <div className="flex gap-4">
                    <div className="keyboard flex flex-col gap-3 w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">Keyboard & Mice</a></li>
                            <li><a href="">computer keyboards</a></li>
                            <li><a href="">mouse & pointing devices</a></li>
                            <li><a href="">keyboard & mouse combos</a></li>
                        </ul>
                        <a className="font-medium" href="#">Laptops</a>
                    </div>

                    <div className="storage flex flex-col gap-3 w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">storage media</a></li>
                            <li><a href="">memory cards</a></li>
                            <li><a href="">USB flash drives</a></li>
                            <li><a href="">external hard drives</a></li>
                        </ul>
                        <a className="font-medium" href="#">Tablets</a>
                    </div>

                    <div className="cables flex flex-col gap-3 w-[33%] capitalize">
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><a className= "font-medium" href="">cables</a></li>
                            <li><a href="">HDMI, DVI & displayPort cables</a></li>
                            <li><a href="">Ethernet cables</a></li>
                            <li><a href="">fibre optic cables</a></li>
                        </ul>
                        <a className="font-medium" href="#">monitors</a>
                    </div>

                </div>
            </div>
        </div>
    );
}