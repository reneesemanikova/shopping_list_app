//@@viewOn:imports
import { createComponent,Utils,useState } from "uu5g05";
import Config from "./config/config.js";

//@@viewOff:imports
let initialState = 
          { id: Utils.String.generateId(),
          name: "Sunday shopping list",
          shopping_list_items: [{ name: "carrot",resolved: true },
                                { name: "apple", resolved: false }],
          uuIdentityName: "John Smith",
          sys: { cts: "2022-03-17T09:48:38.990Z" },
          };
//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ItemProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ItemProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [list, setList] = useState(initialState);

    function remove(shopping_list) {
      setList((prevShoppingList) => prevShoppingList.filter((item) => item.id !== shopping_list.id));
     //shoppingList = shoppingList.filter((item) => item.id !== shopping_list.id);
    }
  
    function createItem(value) {
      console.log( "item provider create ",value)
      const newState = {
        ...list,
        shopping_list_items:[...list.shopping_list_items,{name:value.data.value.name,resolved:false}]
        //id: Utils.String.generateId(),
      };
      console.log("test typ", newState)
      setList(newState);
      //setItem((prevItem) => { ...prevItem, shopping_list_items:prevItem.shopping_list_items});
      //return shoppingList;
    }

    function updateItem(name, newValue) {
      console.log("test function updateItem", name, newValue);

      const newitems = list.shopping_list_items.map( it => {

        if (it.name == name){
          return Object.assign({}, it, {resolved: newValue} );
        } 

        else {return it};

      });
        

      console.log(newitems)
        
        

      const newState = {
        ...list,
        shopping_list_items: newitems
        //id: Utils.String.generateId(),
      };
      console.log("test typ", newState)
      setList(newState);
    }
    
    //@@viewOff:private
  
    //@@viewOn:render
    const value = { item: list,createItem,updateItem };//, remove, update zmazano
    return typeof props.children === "function" ? props.children(value) : props.children;
    //@@viewOff:render
  }
});

//@@viewOn:exports
export { ItemProvider };
export default ItemProvider;
//@@viewOff:exports
