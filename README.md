# typescript-monorepo
A template project for quickly getting started with a Typescript monorepo including; shared, API, and UI packages.

## Getting started
### 1. Rename the app (e.g. @my-app -> @my-awesome-new-app)
```
grep -Rl my-app . | xargs -o -l sed -i -e 's/my-app/NEW-APP-NAME/g'
```

### 2. Install dependencies
```
yarn install
```

### 3. Build app
```
yarn @all build
```

### 4. Start coding
Dev locally
```
yarn @api start:watch
yarn @ui start:watch
```

Deploy
```
yarn docker:build:api
yarn docker:build:ui
```
