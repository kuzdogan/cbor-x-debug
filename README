## cbor-x-debug

Repository to debug `segmentation fault` / `bus error` on `cbor-x` npm package.

```
npm install
```

### Single run

```
node index.js
```

This will **inconsistently give** the following outputs. One might need to run `node index.js` multiple times to see the other ouput. Can't really tell a pattern.

(unexpected)

```
[1]    75662 segmentation fault  node index.js
```

or (expectedly)

```
TypeError: Unexpected end of buffer reading string
    at readString (/Users/kuzdogan/repos/cbor-debug/node_modules/cbor-x/dist/node.cjs:519:22)
    at read (/Users/kuzdogan/repos/cbor-debug/node_modules/cbor-x/dist/node.cjs:342:11)
    at read (/Users/kuzdogan/repos/cbor-debug/node_modules/cbor-x/dist/node.cjs:347:47)
    at read (/Users/kuzdogan/repos/cbor-debug/node_modules/cbor-x/dist/node.cjs:347:47)
    at read (/Users/kuzdogan/repos/cbor-debug/node_modules/cbor-x/dist/node.cjs:347:47)
    at checkedRead (/Users/kuzdogan/repos/cbor-debug/node_modules/cbor-x/dist/node.cjs:201:16)
    at decode (/Users/kuzdogan/repos/cbor-debug/node_modules/cbor-x/dist/node.cjs:162:10)
    at Object.<anonymous> (/Users/kuzdogan/repos/cbor-debug/index.js:10:16)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10) {
  incomplete: true
}
Auxdata is not a valid CBOR object
```

### Multiple runs

Instead one can run via a script to run a bunch of times.

```
chmod +x run.sh
./run.sh
```
