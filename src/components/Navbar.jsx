import React,{useState} from "react"

export default function Navbar() {
    return (
        <div className="">
            <FlyoutLink href="#" >
            Computer & Accessories
            </FlyoutLink>
        </div>
    
    )
}
const FlyoutLink = ({children, href, FlyoutContent}) =>{
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

}
const CpmputerContent = () =>{
    return (
        <div  className="w[746px] h-[390px] p-5 rounded">
            <div className="col-1 flex ">
                <ul className="keyboard"></ul>
                <ul className="Storage"></ul>
                <ul className="Cables"></ul>
            </div>
            <div className="col-2">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    )

}