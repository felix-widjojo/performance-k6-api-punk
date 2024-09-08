Installation
------

### Mac

Install with [Homebrew](https://brew.sh/) by running:

```bash
brew install k6
```

### Windows

If you use the [Chocolatey package manager](https://chocolatey.org/) you can install the unofficial k6 package with:

```bash
choco install k6
```

Otherwise, you can manually download and install the [latest official `.msi` package](https://dl.k6.io/msi/k6-latest-amd64.msi).
References: [k6.io installations](https://k6.io/docs/getting-started/installation/)

To run
------ 
Running the code with command line inside the directory with this line of code (I am using VSCode which supported by k6)

```bash
k6 run stockbit-api-punk-test.js
```