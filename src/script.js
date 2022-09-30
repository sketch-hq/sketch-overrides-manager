// Mocha.sharedRuntime().loadFrameworkWithName("CoreFoundation");

// var sort = require("smart-deep-sort");

// #region Sketch Items
const sketch = require("sketch");
var identifier = __command.identifier();
var symbols = sketch.find("SymbolMaster");

var properties = [
    "stringValue",
    "textStyle",
    "layerStyle",
    "symbolID",
    "image",
    "flowDestination",
];

export default function () {
    let alert = "";
    let message = "";
    symbols.forEach((symbol) => {
        let overrides = symbol.overrides;
        overrides.forEach((override) => {
            let property = override.property;
            if (!properties.includes(property)) {
                if (identifier.includes("script-lock")) {
                    override.editable = false;
                    alert = "🔒 Overrides disabled";
                    message =
                        "Your symbols overrides properties that are not: \n";
                    message += "- Text Value \n";
                    message += "- Text Style \n";
                    message += "- Image \n";
                    message += "- Symbol \n";
                    message += "- Hotspot destination \n";
                    message += "has been disabled";
                } else {
                    override.editable = true;
                    alert = "🔓 Overrides enabled";
                    message = "All your overrides are now enabled";
                }
            }
        });
    });
    sketch.UI.alert(alert, message);
}
