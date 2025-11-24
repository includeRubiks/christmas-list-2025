import ListItem from "./components/Item.tsx"

function App() {
  return (
    <div className="text-center bg-dark text-light">
      <h1>Doug's christmas list</h1>
      <ol>
        <ListItem name="Filament! (Get as much as you can!)" url="https://www.amazon.com/dp/B0991P3Q25"/>
        <ListItem name="Cool Book" url="https://www.amazon.com/dp/0063412640/keywords=games?tag=harpercollinsus-20"/>
        <ListItem name="Filament holder that keeps the filament dry" url="https://www.amazon.com/gp/product/B07NP98YKY"/>
        <ListItem name="Flexible Filament" url="https://www.microcenter.com/product/626659/inland-175mm-translucent-blue-tpu-95a-3d-printer-filament-1kg-spool-(22-lbs)"/>
        <ListItem name="Tripod" url="https://www.amazon.com/dp/B005KP473Q?tag=popularmechanics_auto-append-20&th=1"/>
        <ListItem name="Adapter for radio" url="https://www.digikey.com/en/products/detail/te-connectivity-linx/ADP-SMAF-SMAF/1577233"/>
        <ListItem name="Motors (Get 4), for a robot" url="https://www.sparkfun.com/hobby-motor-gear.html"/>
        <ListItem name="The newest Raspberry Pi Zero" url="https://www.digikey.com/en/products/detail/raspberry-pi/SC1176/15298147"/>
        <ListItem name="Synthesizer" url="https://www.amazon.com/Korg-Modular-Semi-Modular-Synthesizer-Sequencer/dp/B07MW2S1YW"/>
        <ListItem name="Expansion storage hat for home server" url="https://www.sparkfun.com/raspberry-pi-m-2-hat.html"/>
        <ListItem name="Nozzles for my Ender 3!" url="https://www.amazon.com/Creality-Nozzles-3D-Printer-Extruder/dp/B093SKXHL3"/>
        <ListItem name="Thing so my printer can print multicolor! (Get soon or the price will go up $100)" url="https://www.microcenter.com/product/685299/bambu-lab-ams-lite"/>
        <ListItem name="Tiny computer!" url="https://www.digikey.com/en/products/detail/m5stack-technology-co-ltd/K132-V11/26267927"/>
        <ListItem name="Cute synthesizer music thingy" url="https://www.digikey.com/en/products/detail/seeed-technology-co-ltd/107990333/26834485"/>
        <ListItem name="Switches for my mechanical keyboard" url="https://www.microcenter.com/product/649443/glorious-kailh-mechanical-keyboard-switches-(120-piece)"/>
        <ListItem name="Filament dehydrator so my prints don't suck" url="https://www.amazon.com/eSUN-Upgraded-Printing-Filaments-Dehydrating/dp/B0969L64TT/"/>
        <ListItem name="Ham Radio" url="https://www.dxengineering.com/parts/ysu-ft-891"/>
        <ListItem name="Another printer (I guess...)" url="https://www.amazon.com/Comgrow-Creality-Ender-Aluminum-220x220x250mm/dp/B07BR3F9N6"/>      
        <ListItem name="Prusa Printer" url="https://www.prusa3d.com/product/original-prusa-mk4s-3d-printer-5/"/>
        <ListItem name="Money (If you can't get anything else)" url="https://en.wikipedia.org/wiki/United_States_dollar"/>

      </ol>
    </div>
  )
}

export default App;