//@@viewOn:imports
import { createComponent,Utils,useState } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports
let initialShoppingList = [
  {
    id: Utils.String.generateId(),
    name: "Sunday shopping list",
    shopping_list_items: "carrot, meat",
    uuIdentityName: "John Smith",
    sys: { cts: "2022-03-17T09:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "Renée shopping list",
    shopping_list_items: "chocolate, chips",
    uuIdentityName: "Harry Potter",
    sys: { cts: "2022-02-14T10:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "School shopping list",
    shopping_list_items: "pencil, book",
    uuIdentityName: "Bart Simpson",
    sys: { cts: "2021-02-14T10:48:38.990Z" },
  },
];

let shoppingList = [
  {
    id: Utils.String.generateId(),
    name: "Sunday shopping list",
    shopping_list_items: "carrot, meat",
    uuIdentityName: "John Smith",
    sys: { cts: "2022-03-17T09:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "Renée shopping list",
    shopping_list_items: "chocolate, chips",
    uuIdentityName: "Harry Potter",
    sys: { cts: "2022-02-14T10:48:38.990Z" },
  },
  {
    id: Utils.String.generateId(),
    name: "School shopping list",
    shopping_list_items: "pencil, book",
    uuIdentityName: "Bart Simpson",
    sys: { cts: "2021-02-14T10:48:38.990Z" },
  },
];
//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [shoppingList, setShoppingList] = useState(initialShoppingList);

    function remove(shopping_list) {
      setShoppingList((prevShoppingList) => prevShoppingList.filter((item) => item.id !== shopping_list.id));
     //shoppingList = shoppingList.filter((item) => item.id !== shopping_list.id);
    }
  
    function create(values) {
      const shopping_list = {
        ...values,
        id: Utils.String.generateId(),
        uuIdentityName: "Gerald of Rivia",
        sys: {
          cts: new Date().toISOString(),
        },
      };
    
      setShoppingList((prevShoppingList) => [...prevShoppingList, shopping_list]);
      return shopping_list;
    }

    function update() {
      throw new Error("Shopping list update is not implemented yet.");
    }
    //@@viewOff:private
  
    //@@viewOn:render
    const value = { shoppingList, remove, update };
    return typeof props.children === "function" ? props.children(value) : props.children;
    //@@viewOff:render
  }
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
