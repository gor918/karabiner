import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
    // Define the Hyper key itself
    {
        description: "Hyper Key (⌃⌥⇧⌘)",
        manipulators: [
            {
                description: "Caps Lock -> Hyper Key",
                from: {
                    key_code: "caps_lock",
                    modifiers: {
                        optional: ["any"],
                    },
                },
                to: [
                    {
                        set_variable: {
                            name: "hyper",
                            value: 1,
                        },
                    },
                ],
                to_after_key_up: [
                    {
                        set_variable: {
                            name: "hyper",
                            value: 0,
                        },
                    },
                ],
                to_if_alone: [
                    {
                        key_code: "escape",
                    },
                ],
                type: "basic",
            },
            //      {
            //        type: "basic",
            //        description: "Disable CMD + Tab to force Hyper Key usage",
            //        from: {
            //          key_code: "tab",
            //          modifiers: {
            //            mandatory: ["left_command"],
            //          },
            //        },
            //        to: [
            //          {
            //            key_code: "tab",
            //          },
            //        ],
            //      },
        ],
    },

    ...createHyperSubLayers({
        // o = "Open" applications
        w: {
            r: app("Arc"),
            e: app("Visual Studio Code"),
            n: app("Notion"),
            t: app("Warp"),
            f: app("Finder"),
            p: app("Spotify"),
        },

        // r = "Raycast"
        r: {
            e: open("raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"),
            c: open("raycast://extensions/raycast/system/open-camera"),
            p: open("raycast://extensions/raycast/raycast/confetti"),
            a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
            s: open("raycast://extensions/peduarte/silent-mention/index"),
            h: open("raycast://extensions/raycast/clipboard-history/clipboard-history"),
            1: open("raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"),
            2: open("raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"),
        },
    }),
];

fs.writeFileSync(
    "karabiner.json",
    JSON.stringify(
        {
            global: {
                show_in_menu_bar: false,
            },
            profiles: [
                {
                    name: "Default",
                    complex_modifications: {
                        rules,
                    },
                },
            ],
        },
        null,
        2
    )
);
