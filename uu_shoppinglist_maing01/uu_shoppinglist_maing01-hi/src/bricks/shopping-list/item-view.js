//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState } from "uu5g05";
import Config from "./config/config.js";
import Tile from "./tile";
import { useAlertBus } from "uu5g05-elements";
import { Form, FormText, SubmitButton, CancelButton,Button,Toggle } from "uu5g05-forms";



  


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

const ItemView = createVisualComponent({
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
  const items = event.data;

  try {
    props.onDelete(items);
    addAlert({
      message: `The shopping list item ${items.name} has been deleted.`,
      priority: "success",
      durationMs: 2000,
    });
  } catch (error) {
    ItemView.logger.error("Error deleting shopping list", error);
    showError(error, "Shopping list delete failed!");
  }
}

function handleUpdate(item) {
  console.log(item);
  props.onUpdate(item.name, !item.resolved);
  /*
  try {
    console.log("Zavolal sa handle update",event)
    props.onUpdate(event.data);
  } catch (error) {
    ItemView.logger.error("Error updating shopping list", error);
    showError(error, "Shopping list update failed!");
  }*/
}
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ItemView);

    console.log("props" ,props)
    return (
      <div {...attrs}>
        {props.item.name}
        {props.item.shopping_list_items.map((item) => (
          <div key={item.name}>
            {item.name}{' '} {/* Add a space here */}
            
            {' '} {/* Add a space here */}
            <input type="checkbox" checked={item.resolved} onClick={()=> handleUpdate(item)} />
            {item.resolved ? 'resolved' : 'not resolved'}
            
          </div>
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ItemView };
export default ItemView;
//@@viewOff:exports
