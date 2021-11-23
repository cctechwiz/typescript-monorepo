# typescript-monorepo
A template project for quickly getting started with a Typescript monorepo including; shared, API, and UI packages.

## Getting started
### 1. Clone the template
On [the template repo](https://github.com/cctechwiz/typescript-monorepo) page, click  the big green "Use this template" button.

Or use the [github cli](https://cli.github.com/manual/gh_repo_create):
```
mkdir my-new-app
cd my-new-app
gh repo create --template https://github.com/cctechwiz/typescript-monorepo
```

### 2. Rename the app (e.g. @my-app -> @my-awesome-new-app)
```
grep -Rl my-app . | xargs -o -l sed -i -e 's/my-app/NEW-APP-NAME/g'
```

### 3. Install dependencies
```
yarn install
```

### 4. Build app
```
yarn @all build
```

### 5. Start coding
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
