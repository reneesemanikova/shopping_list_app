//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import Tile from "./tile";
import { useAlertBus } from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ListView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListView",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    
    //@@viewOn:private
    const { children } = props;
    const { addAlert } = useAlertBus();

function showError(error, header = "") {
  addAlert({
    header,
    message: error.message,
    priority: "error",
  });
}

function handleDelete(event) {
  const shopping_list = event.data;

  try {
    props.onDelete(shopping_list);
    addAlert({
      message: `The shopping list ${shopping_list.name} has been deleted.`,
      priority: "success",
      durationMs: 2000,
    });
  } catch (error) {
    ListView.logger.error("Error deleting shopping list", error);
    showError(error, "Shopping list delete failed!");
  }
}

function handleUpdate(event) {
  try {
    props.onUpdate(event.data);
  } catch (error) {
    ListView.logger.error("Error updating shopping list", error);
    showError(error, "Shopping list update failed!");
  }
}
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ListView);

    return (
      <div {...attrs}>
        {props.shoppingList.map((shopping_list) => (
          <Tile
            key={shopping_list.id}
            shopping_list={shopping_list}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            style={{ width: 640, margin: "24px auto" }}
          />
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView };
export default ListView;
//@@viewOff:exports
