import Image, {StaticImageData} from "next/image";
import { LucideIcon } from "lucide-react";
import { ReactNode,ElementType } from "react";

type SpanTextProps = {
    children: ReactNode;
    // Accepte Lucide, SVG ou Image
    icon?: StaticImageData | React.ElementType |LucideIcon;
    // Taille personnalisable
    iconSize?: number;
  };
  
  export default function SpanText({ children, icon, iconSize = 16 }: SpanTextProps) {
    const Icon = icon as ElementType; // ✅ Solution pour éviter l'erreur JSX
    
    return (
      <span className="inline-flex items-center gap-1 bg-accent/30 border border-accent hover:bg-accent/50 transition-colors rounded-md p-1">
        {children}
        {typeof icon === "function" && <Icon size={iconSize} className="inline"/>} {/* Lucide ou SVG */}
        {typeof icon === "object" && "src" in icon && ( /* Vérifie si c'est une image */
          <Image src={icon} alt="image" width={iconSize} height={iconSize} className="inline"/>
        )}
      </span>
    );
  }