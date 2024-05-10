import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";

function MenuSection(){

    const componentStyle={
        display:"flex",
        justifyContent:"center",
        marginTop:"5rem"
    }

    return(
        <div style={componentStyle}>
        <Menu1 />
        <Menu2 />
        <Menu3 />
        <Menu4 />
        </div>
    );
}

export default MenuSection;