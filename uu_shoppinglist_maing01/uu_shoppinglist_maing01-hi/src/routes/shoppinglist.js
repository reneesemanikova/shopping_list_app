//@@viewOn:imports
import { createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ItemProvider from "../bricks/shopping-list/item-provider";
import ItemView from "../bricks/shopping-list/item-view";
import ItemCreateForm from "../bricks/shopping-list/item-create-form";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

let Shoppinglist = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Shoppinglist",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <>
    <RouteBar />
    <ItemProvider>
      {({ item, remove, updateItem, createItem }) => (
        <>
          <ItemView item={item} onDelete={remove} onUpdate={updateItem}  />
          <ItemCreateForm onCreate={createItem} style={{ maxWidth: 400, margin: "24px auto", display: "block" }} />
        </>
      )}
    </ItemProvider>
  </>
    );
    //@@viewOff:render
  },
});

Shoppinglist = withRoute(Shoppinglist, { authenticated: true });

//@@viewOn:exports
export { Shoppinglist };
export default Shoppinglist;
//@@viewOff:exports
