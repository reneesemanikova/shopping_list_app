//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useState } from "uu5g05";
import { Button, useAlertBus } from "uu5g05-elements";
import CreateForm from "./create-form.js";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const Mode = {
  BUTTON: "BUTTON",
  FORM: "FORM",
};
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
function CreateButton(props) {
  return (
    <Button {...props} colorScheme="primary" significance="highlighted">
      Create shopping list
    </Button>
  );
}
//@@viewOff:helpers

const CreateView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateView",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onCreate: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onCreate: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();
    const [mode, setMode] = useState(Mode.BUTTON);

    function handleSubmit(event) {
      let shopping_list;

      try {
        shopping_list = props.onCreate(event.data.value);
      } catch (error) {
        // We pass Error.Message instance to the Uu5Forms.Form that shows alert
        throw new Utils.Error.Message("Shopping list create failed!", error);
      }

      addAlert({
        message: `Shopping list ${shopping_list.name} has been created.`,
        priority: "success",
        durationMs: 2000,
      });

      setMode(Mode.BUTTON);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    switch (mode) {
      case Mode.BUTTON:
        return <CreateButton {...elementProps} onClick={() => setMode(Mode.FORM)} />;
      default:
        return <CreateForm {...elementProps} onSubmit={handleSubmit} onCancel={() => setMode(Mode.BUTTON)} />;
    }
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateView };
export default CreateView;
//@@viewOff:exports
