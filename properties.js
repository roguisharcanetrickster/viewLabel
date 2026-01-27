import FNViewLabel from "./properties/FNViewLabel.js";
import FNViewLabelEditor from "./properties/FNViewLabelEditor.js";

export default function registerProperties(PluginAPI) {
   return [
      FNViewLabel(PluginAPI),
      FNViewLabelEditor(PluginAPI)
   ];
}

