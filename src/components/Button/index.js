import { Button as TheButton} from "./style";

export const Button = ({children, ...props}) => {
    return ( 
        <TheButton{...props}>{children}</TheButton>
    )
 }