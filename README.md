<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>INTERNET-RELAY-CHAT</h1>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/github/license/matix7290/internet-relay-chat?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/matix7290/internet-relay-chat?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/matix7290/internet-relay-chat?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/matix7290/internet-relay-chat?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>
</p>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running](#-running)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---


## 📍 Overview

The "internet-relay-chat" repository houses a Node.js project that facilitates an Internet Relay Chat application via an Express.js server. Its server delivers static content while managing message creation and periodic message polling. Its focused use of package-lock.json ensures stable and consistent installation across environments, enhancing overall system reliability. With its steadfast dependency configurations, it guarantees an easy, productive setup, making it a helpful tool for developers requiring efficient real-time communication functionalities.

---


## 📂 Repository Structure

```sh
└── internet-relay-chat/
    ├── package-lock.json
    ├── package.json
    ├── server.js

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [server.js](https://github.com/matix7290/internet-relay-chat/blob/main/server.js)                 | The code represents an Express.js server that serves static content (HTML, CSS, JavaScript files) for an Internet Relay Chat application. It also handles POST requests for creating a message ('/mess') that updates the server's newest message and timestamp. There's also a polling endpoint ('/poll') that checks for new messages every 3 seconds within a 30-second timeframe, returning the newest message if available. The server listens on a specified port, defaulting to 3000 if not specified. |
| [package-lock.json](https://github.com/matix7290/internet-relay-chat/blob/main/package-lock.json) | The provided code snippet is a package-lock.json file for an Internet Relay Chat (IRC) server. It shows the specific versions of the dependencies it uses, ensuring consistent installs. Dependencies include "express" for handling HTTP requests, "body-parser" to parse incoming request bodies in a middleware, and "debug" for developing with a debug logger. This guarantees stability and consistent behavior across environments for the server application.                                         |
| [package.json](https://github.com/matix7290/internet-relay-chat/blob/main/package.json)           | The provided code is a package.json file for a Node.js project named "lek10". Its main file is "server.js", and it depends on body-parser, express, and serve-favicon packages. The file defines two scripts: "start" that runs the server.js file and "test" which currently throws an error as no test is specified. It doesn't have any development-only dependencies.                                                                                                                                     |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- NodeJS v17.0.0`


### 🔧 Installation

1. Clone the internet-relay-chat repository:
```sh
git clone https://github.com/matix7290/internet-relay-chat
```

2. Change to the project directory:
```sh
cd internet-relay-chat
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running

```sh
node server.js
```
---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/matix7290/internet-relay-chat/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/matix7290/internet-relay-chat/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/matix7290/internet-relay-chat/issues)**: Submit bugs found or log feature requests for MATIX7290.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [MIT License](https://choosealicense.com/licenses/mit) License. For more details, refer to the [LICENSE](https://github.com/matix7290/internet-relay-chat/blob/master/LICENSE) file.\

[**Return**](#Top)

---

