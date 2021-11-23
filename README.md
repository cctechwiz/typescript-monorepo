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

Deploy locally
```
yarn docker:build:api
yarn docker:build:ui
```

### 6. Push changes
Github Actions pipeline will automatically build api and ui docker images tagged with `:main`.

To tag with latest add a release version tag:
```
git tag v0.1.1
git push origin v0.1.1
```

Now you can pull those docker images wherever you need them:
```
docker pull ghcr.io/cctechwiz/kbst-app-go-prom:latest
```
