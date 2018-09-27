const tilebelt = require('@mapbox/tilebelt')
const z = 6

for (let x = 0; x < 2 ** z; x++) {
  for (let y = 0; y < 2 ** z; y++) {
    let f = {
      type: 'Feature',
      geometry: tilebelt.tileToGeoJSON([x, y, z]),
      properties: {
        w3n: `${z}-${x}-${y}`
      }
    }
    console.log(JSON.stringify(f))
  }
}
