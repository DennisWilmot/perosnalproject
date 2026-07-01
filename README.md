# Dennis Wilmot — Portfolio (React)

Terminal-style portfolio, converted from the design preview.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  main.jsx                 entry — mounts <App />
  App.jsx                  page shell + terminal frame
  styles.css               resets, scrollbar, hover states, fonts
  data/
    colors.js              palette tokens
    tree.js                fake filesystem layout
    files.js               file contents (h1:, ★, kv:, img:, etc)
  hooks/
    useTerminal.js         all command state + dispatch (cd, ls, cat, sudo…)
  components/
    PreLabel.jsx           "field-notes.tty v3.0" header strip
    TerminalChrome.jsx     traffic lights + avatar + title row
    NavBar.jsx             BACK / HOME / breadcrumbs / section jump buttons
    WelcomeBanner.jsx      ship-ascii hero + intro copy + start-here grid
    ShipScene.jsx          the full-bleed ASCII sea, ships, birds, sun
    Listing.jsx            "ls"-style clickable file/folder grid
    FileView.jsx           renders one "cat"-ed file (h1/★/kv/img/etc lines)
    HelpView.jsx           the help table
    SudoCard.jsx           "sudo hire-me" final card
    Prompt.jsx             the bottom dennis@field-notes:cwd$ input line
    PromptLine.jsx         echoed prompt+command in history
    StatusBar.jsx          READY · cwd · hints · UTC strip
    PostFooter.jsx         © + tagline below the terminal
```

## Assets

Drop your portrait + company logos into `public/assets/`:

- `public/assets/portrait.jpeg`
- `public/assets/intellibus.jpeg`
- `public/assets/appfinity.jpeg`

Paths in `src/data/files.js` reference `/assets/portrait.jpeg` etc.
