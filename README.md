# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment
First, modify your `docusaurus.config.js` and add the required params:

| Name | Description |
| --- | --- |
| `organizationName` | The GitHub user or organization that owns the repository. If you are the owner, it is your GitHub username. In the case of Docusaurus, it is "_facebook_" which is the GitHub organization that owns Docusaurus. |
| `projectName` | The name of the GitHub repository. For example, the repository name for Docusaurus is "docusaurus", so the project name is "docusaurus". |
| `url` | URL for your GitHub Page's user/organization page. This is commonly https://_username_.github.io. |
| `baseUrl` | Base URL for your project. For projects hosted on GitHub pages, it follows the format "/_projectName_/". For https://github.com/facebook/docusaurus, `baseUrl` is `/docusaurus/`. |

### Environment settings

Specify the Git user as an environment variable.

| Name | Description |
| --- | --- |
| `GIT_USER` | The username for a GitHub account that has commit access to this repo. For your own repositories, this will usually be your GitHub username. The specified `GIT_USER` must have push access to the repository specified in the combination of `organizationName` and `projectName`. |

Optional parameters, also set as environment variables:

| Name | Description |
| --- | --- |
| `USE_SSH` | Set to `true` to use SSH instead of the default HTTPS for the connection to the GitHub repo. |
| `DEPLOYMENT_BRANCH` | The branch that the website will be deployed to, defaults to `gh-pages` for normal repos and `master` for repository names ending in `github.io`. |
| `CURRENT_BRANCH` | The branch that contains the latest docs changes that will be deployed. Usually, the branch will be `master`, but it could be any branch (default or otherwise) except for `gh-pages`. If nothing is set for this variable, then the current branch will be used. |
| `GIT_PASS` | Password (or token) of the `git` user (specified by `GIT_USER`). For example, to facilitate non-interactive deployment (e.g. continuous deployment) |

GitHub enterprise installations should work in the same manner as github.com; you only need to set the organization's GitHub Enterprise host as an environment veriable:

| Name          | Description                                     |
| ------------- | ----------------------------------------------- |
| `GITHUB_HOST` | The domain name of your GitHub enterprise site. |

### Deploy

Finally, to deploy your site to GitHub Pages, run:
```
## deploy to github.com:
GIT_USER=<Your GitHub username> USE_SSH=true npm deploy
## deploy to github enterprise:
# linux:
GIT_USER=<Your GitHub username> USE_SSH=true  GITHUB_HOST=<Your GitHub Enterprise host> npm run deploy
# windows cmd
cmd /C "set "USE_SSH=true" & set "GIT_USER=<Your GitHub username>" & set "GITHUB_HOST=<Your GitHub Enterprise host>" && npm run deploy"
# windows powershell
cmd /C 'set "USE_SSH=true" & set "GIT_USER=<Your GitHub username>" & set "GITHUB_HOST=<Your GitHub Enterprise host>" && npm run deploy'
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment
First, modify your `docusaurus.config.js` and add the required params:

| Name | Description |
| --- | --- |
| `organizationName` | The GitHub user or organization that owns the repository. If you are the owner, it is your GitHub username. In the case of Docusaurus, it is "_facebook_" which is the GitHub organization that owns Docusaurus. |
| `projectName` | The name of the GitHub repository. For example, the repository name for Docusaurus is "docusaurus", so the project name is "docusaurus". |
| `url` | URL for your GitHub Page's user/organization page. This is commonly https://_username_.github.io. |
| `baseUrl` | Base URL for your project. For projects hosted on GitHub pages, it follows the format "/_projectName_/". For https://github.com/facebook/docusaurus, `baseUrl` is `/docusaurus/`. |

### Environment settings

Specify the Git user as an environment variable.

| Name | Description |
| --- | --- |
| `GIT_USER` | The username for a GitHub account that has commit access to this repo. For your own repositories, this will usually be your GitHub username. The specified `GIT_USER` must have push access to the repository specified in the combination of `organizationName` and `projectName`. |

Optional parameters, also set as environment variables:

| Name | Description |
| --- | --- |
| `USE_SSH` | Set to `true` to use SSH instead of the default HTTPS for the connection to the GitHub repo. |
| `DEPLOYMENT_BRANCH` | The branch that the website will be deployed to, defaults to `gh-pages` for normal repos and `master` for repository names ending in `github.io`. |
| `CURRENT_BRANCH` | The branch that contains the latest docs changes that will be deployed. Usually, the branch will be `master`, but it could be any branch (default or otherwise) except for `gh-pages`. If nothing is set for this variable, then the current branch will be used. |
| `GIT_PASS` | Password (or token) of the `git` user (specified by `GIT_USER`). For example, to facilitate non-interactive deployment (e.g. continuous deployment) |

GitHub enterprise installations should work in the same manner as github.com; you only need to set the organization's GitHub Enterprise host as an environment veriable:

| Name          | Description                                     |
| ------------- | ----------------------------------------------- |
| `GITHUB_HOST` | The domain name of your GitHub enterprise site. |

### Deploy

Finally, to deploy your site to GitHub Pages, run:
```
## deploy to github.com:
GIT_USER=<Your GitHub username> USE_SSH=true npm deploy
## deploy to github enterprise:
# linux:
GIT_USER=<Your GitHub username> USE_SSH=true  GITHUB_HOST=<Your Github Enterprise host> npm run deploy
# windows cmd
cmd /C "set "USE_SSH=true" & set "GIT_USER=<Your GitHub username>" & set "GITHUB_HOST=<Your GitHub Enterprise host>" && npm run deploy"
# windows powershell
cmd /C 'set "USE_SSH=true" & set "GIT_USER=<Your GitHub username>" & set "GITHUB_HOST=<Your GitHub Enterprise host>" && npm run deploy'
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
