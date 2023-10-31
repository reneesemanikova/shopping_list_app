//@@viewOn:imports
import { createComponent,Utils } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

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
    function remove(shopping_list) {
      shoppingList = shoppingList.filter((item) => item.id !== shopping_list.id);
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
