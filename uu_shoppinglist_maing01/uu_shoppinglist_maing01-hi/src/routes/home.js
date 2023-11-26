//@@viewOn:imports
import { Utils, createVisualComponent, useSession,useState, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import Tile from "../bricks/shopping-list/tile"; 
import { handleDelete } from "../bricks/shopping-list/tile";
import { handleUpdate } from "../bricks/shopping-list/tile";
import ListProvider from "../bricks/shopping-list/list-provider";
import ListView from "../bricks/shopping-list/list-view";
import CreateView from "../bricks/shopping-list/create-view";
import CreateForm from "../bricks/shopping-list/create-form";


//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers



let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps


  render() {

    const [showModal, setShowModal] = useState(false);
    //@@viewOn:render
    return (
      <>
    <RouteBar />
    <ListProvider>
      {({ shoppingList, remove, update, createShoppinglist }) => (
        <>
          <ListView shoppingList={shoppingList} onDelete={remove} onUpdate={update}/>
          <CreateForm  onCreate={createShoppinglist}  style={{ maxWidth: 400, margin: "24px auto", display: "block" }} />
          <Uu5Elements.Modal header={"header asi"} open={showModal} onClose={() => setShowModal(false)}>
      "joooo"
    </Uu5Elements.Modal>        
        </>
      )}
    </ListProvider>
  </>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports


