
import Computer from "./flyouts/Computer";
import Audio from "./flyouts/audio";
import Interior from "./flyouts/Interior";
import Health from "./flyouts/Health";
import Phone from "./flyouts/Phone";
import Sports from "./flyouts/sports";
import FlyoutLink from "./flyouts/FlyoutLinks";

function Categories() {
  return (
    <div className="w-full h-11 bg-blue-700 flex items-center justify-center">
      <nav className="flex items-center justify-center h-fit  ">
        <FlyoutLink href="#" FlyoutContent={Computer}>
          Computer Accessories
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={Phone}>
          Phones       
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={Audio}>
          
          Audio & Video

        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={Health}>
          Health 
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={Interior}>
          
          Home & Interrior
        </FlyoutLink>
        <FlyoutLink href="#" FlyoutContent={Sports}>
          
          Sports & Outdoor

        </FlyoutLink>
      </nav>
    </div>
  );
}

export default Categories;
