import { openDB, deleteDB } from '/resources/static/modules/idb.js?module'
(async () => {
    'use strict'

    const version = 1 //versions start at 1
    const storeName = 'sha256sums'
    if (!('indexedDB' in window)) {
        console.warn('IndexedDB not supported')
        return
    } else {
        console.info('IndexedDB hashes created')
    }
    const dbName = 'hashes'

    const db = await openDB(dbName, version, {
        upgrade(db, oldVersion, newVersion, transaction) {
            console.debug(oldVersion)
            switch (oldVersion) {
                case 0:
                    db.createObjectStore(storeName, { keyPath: 'name' })
                case 1:
                    db.deleteObjectStore(storeName)
                    db.createObjectStore(storeName)
            }
        }
    })
})();
var p = []
fetch('sha256_verify.txt')
    .then(response => response.text())
    .then((text) => {
        var f = text.split('\n')
        f.forEach(line => {
            if (line.trim() != '') {
                let file = line.trim().split(' ')[2]
                let sha256sum = line.trim().split(' ')[0]
                pidb(file.replace('./','').trim(), sha256sum)
            }
        });
    })
var pidb = async function putIDB(key, val, dbName = 'hashes', version = '1', storeName = 'sha256sums') {
    // base64_decode
    // console.log(key + " => " + val)
    const db = await openDB(dbName, version)
    const tx = db.transaction(storeName, 'readwrite')
      const store = await tx.objectStore(storeName)
      const value = await store.put(val, key)
      await tx.done
};
