require('./copystuf')(['src/assets/dev/**', 'builds/dist/**'],process.argv[2]).then(()=>true);