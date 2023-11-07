//@@viewOn:imports
import { createVisualComponent, Utils,PropTypes, Content } from "uu5g05";
import { Form, FormText, SubmitButton, CancelButton ,Button} from "uu5g05-forms";
import Config from "./config/config.js";
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

const ItemEditForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ItemEditForm",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    onUpdate: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSubmit: () => {},
    onCancel: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    return (
      <Form {...elementProps} onUpdate={props.onUpdate}> 
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", paddingTop: 8 }}>
        <Button onClick={props.onUpdate}>Update status</Button>
        </div>
      </Form>
    );
    //@@viewOff:render
  },
  
});

//@@viewOn:exports
export { ItemEditForm };
export default ItemEditForm;
//@@viewOff:exports
