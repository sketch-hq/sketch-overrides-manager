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
    if (identifier.includes("script-lock")) {
        sketch.UI.alert(
            "🚨 Disable Overrides",
            "We're about to disable the new override properties available with Sketch 94+"
        );
    } else {
        sketch.UI.alert(
            "🚨 Enable Overrides",
            "We're about to enable the new override properties available with Sketch 94+"
        );
    }

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
                    message = "Your symbol overrides properties: \n";
                    message += "- Color Variables \n";
                    message += "- Text Size \n";
                    message += "- Text Color \n";
                    message += "- Text Decoration \n";
                    message += "- Text Align \n";
                    message += "- Fill Color \n";
                    message += "- Border Color \n";
                    message += "- Shadow Color \n";
                    message += "- Inner Shadow Color \n";
                    message += "have been disabled";
                } else {
                    override.editable = true;
                    alert = "🔓 Overrides enabled";
                    message = "Your symbol overrides properties: \n";
                    message += "- Color Variables \n";
                    message += "- Text Size \n";
                    message += "- Text Color \n";
                    message += "- Text Decoration \n";
                    message += "- Text Align \n";
                    message += "- Fill Color \n";
                    message += "- Border Color \n";
                    message += "- Shadow Color \n";
                    message += "- Inner Shadow Color \n";
                    message += "have now been enabled";
                }
            }
        });
    });
    sketch.UI.alert(alert, message);
}
