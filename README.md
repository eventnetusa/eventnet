## To get started

```sh
$ echo '.gems' > .rbenv-gemsets
$ bundle install
$ yarn install
```

## Modifications

- assets that Gulp copies to `.tmp` also gets copied to `src`
- no `rev()` on assets
- use `src` and `dist` as source and destination
- don't exclude `assets` in `_config.yml`

## Netlify
```
Branch: master
Build Cmd: gulp build --prod
Public folder: dist/
```

## Cloud Cannon
```
JEKYLL_ENV: production
```

