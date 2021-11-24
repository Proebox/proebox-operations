# proebox-operations

* Based on
    - https://javascript.plainenglish.io/how-to-create-and-publish-your-first-npm-package-2765c851de2a#1da6
    - Steps:
        - Step 1: Create git repository with a readme file
            - git clone https://github.com/Proebox/proebox-operations.git
        - Step 2: Init npm to create package JSON
            - cd proebox-operations
            - npm init
        - Step 3: Create the package script file
            - index.js
        - Step 4 : Testing
            - npm link
            - mkdir test-script && vim script.js
            - npm link proebox-operations
            - node .\script.js
        - Step 5: Publishing package
            - cd proebox-operations
            - npm login

                ` npm notice Log in on https://registry.npmjs.org/
                Username: yuansix
                Password:
                Email: (this IS public) juan.siesquen@gmail.com
                Logged in as yuansix on https://registry.npmjs.org/.
                `
            - npm publish
            
                ` npm notice
                npm notice proebox-operations@0.1.0
                npm notice === Tarball Contents ===
                npm notice 1.0kB README.md
                npm notice 329B  index.js
                npm notice 600B  package.json
                npm notice === Tarball Details ===
                npm notice name:          proebox-operations
                npm notice version:       0.1.0
                npm notice filename:      proebox-operations-0.1.0.tgz
                npm notice package size:  938 B
                npm notice unpacked size: 2.0 kB
                npm notice shasum:        52326f1e54f12e13651906b1db620bcf18d248f0
                npm notice integrity:     sha512-KCT4eT3/7wtz5[...]mQNAJ1KawKsPA==
                npm notice total files:   3
                npm notice
                + proebox-operations@0.1.0
                `
            - npm version minor -m "comment"    // major | minor | patch
            - npm publish --access public