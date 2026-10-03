# 3D Cube

A wireframe 3d cube you can steer with you mouse, with sound in under 3KB of HTML (yes, it also has js)

## Controls
- Move mouse (or your finger on mobile) - rotates the buc
- Click / tap (guess how?) - the cube change colors and the song (noise) starts

Audio starts only with the first key press (browser requirement)

# Run it
just open index.html in any html viwer or your browser

# How it works

- Canvas - everythig is drawn on a single 2d canvas, with some extra details
- 3D - Not really 3d just the good old math to do some perspective trickes
- Sound - a sawtooth oscillator through a filter for the drone, plus a short oscillator blip per click.
- Inputs - pointer events (and touch on mobile)

Thanks MDN Docs 

# Size
- Source - 4kb
- Build - 2.4kb