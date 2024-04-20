# Karabiner Elements configuration

If you like TypeScript and want your Karabiner configuration maintainable & type-safe, you probably want to use the custom configuration DSL / generator I created in `rules.ts` and `utils.ts`!

You probably don't want to use my exact configuration, as it's optimized for my personal style & usage. Best way to go about using this if you want to? Probably delete all the sublayers in `rules.ts` and add your own based on your own needs!

## Installation

1. Install & start [Karabiner Elements](https://karabiner-elements.pqrs.org/)
1. Clone this repository
1. Delete the default `~/.config/karabiner` folder
1. Create a symlink with `ln -s ~/github/mxstbr/karabiner ~/.config` (where `~/github/mxstbr/karabiner` is your local path to where you cloned the repository)
1. [Restart karabiner_console_user_server](https://karabiner-elements.pqrs.org/docs/manual/misc/configuration-file-path/) with `` launchctl kickstart -k gui/`id -u`/org.pqrs.karabiner.karabiner_console_user_server ``

## Development

```
pnpm install
```

to install the dependencies. (one-time only)

```
pnpm run build
```

builds the `karabiner.json` from the `rules.ts`.

```
pnpm run watch
```

watches the TypeScript files and rebuilds whenever they change.

## License

Copyright (c) 2024 Gor Davtyan, licensed under the [MIT license](./LICENSE.md).
