# 6
z=6 what3numbers modules in vector tiles

# URL
https://hfu.github.io/6/{z}/{x}/{y}.pbf

# source-layer
'6'

# property
property name: w3n

property value: {z}-{x}-{y}

# how this is created
```console
$ node index.js > a.ndjson
$ tippecanoe -f -o a.mbtiles --maximum-zoom=6 -l 6 a.ndjson
$ tile-join -e . a.mbtiles --no-tile-compression
```
