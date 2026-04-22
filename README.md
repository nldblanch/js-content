<a id="top"></a>

# JavaScript Learning Challenges

A collection of JavaScript coding challenges designed to help you learn and practice JavaScript fundamentals.

<details>
<summary><strong>Table of Contents</strong></summary>

- [Getting Started](#getting-started)
- [Challenges](#challenges)
  - [Challenge List](#challenge-list)
- [How to Use](#how-to-use)
- [Testing](#testing)
  - [Run all tests](#run-all-tests)
  - [Run test by filename](#run-test-by-filename)
  - [Run tests by pattern](#run-tests-by-pattern)
  - [Run tests in watch mode](#run-tests-in-watch-mode)
- [Contributing to webpage (as a developer)](#contributing-to-webpage-as-a-developer)
  - [Debug webpage in VSCode](#debug-webpage-in-vscode)

</details>

## Getting Started

1. Fork this repository
2. Clone this repository

```bash
git clone https://github.com/<your-username>/js-content.git
```

3. Open in VSCode (or other editor)
4. Install dependencies:

```bash
npm install
```

5. Run tests:

```bash
npm test
```

[Back to top](#top)

## Challenges

Each challenge is in its own directory with:

- A `README.md` with instructions. Always start here!
- A starter `.js` file. This is where you write your code.
- Test files to verify your solution
- Other instructions and guided walkthroughs. Always refer to the README first.

### Challenge List

1. **[Temperature Converter](1.%20Temperature/)** - Convert between Celsius and Fahrenheit
2. **[Dog Age Calculator](2.%20Dog%20Age%20Calculator/)** - Calculate dog years from human years
3. **[Magic Eight Ball](3.%20Magic%20Eight%20Ball/)** - Create a fortune-telling game
4. **[Race Day](4.%20Race%20Day/)** - Assign race numbers and start times
5. **[Rock Paper Scissors](5.%20Rock%20Paper%20Scissors/)** - Classic game implementation
6. **[Sleep Calculator](6.%20Sleep%20Calculator/)** - Calculate sleep debt
7. **[Coded Message](7.%20Coded%20Message/)** - Decode secret messages
8. **[Whale Talk](8.%20Whale%20Talk/)** - Translate to whale language
9. **[Choose the Correct Iterator](9.%20Choose%20the%20Correct%20Iterator/)\*** - Practice with array methods
10. **[Grammar Checker](10.%20Grammar%20Checker/)\*\*** - Check and fix grammar
11. **[Menu Maker](11.%20Menu%20Maker/)\*\*** - Create dynamic menus
12. **[Team Sports](12.%20Team%20Sports/)\*\*** - Manage team rosters

<br />

_\*This challenge is still in the Proof of Concept stage. There may be problems or inconsistencies._

_\*\*These challenges have not been migrated to the new format yet. Please refer to the pdf_instructions._

[Back to top](#top)

## How to Use

1. Navigate to any challenge directory
2. Read the `README.md` for instructions
3. Implement your solution in the provided `.js` file
4. Run `npm test` to check your solution
5. All tests should pass when your solution is correct

[Back to top](#top)

## Testing

### Run all tests:

```bash
npm test
```

_The npm commands `test` and `start` are special - you can run them as shown without `run`._

_You can also shorten this command to `npm t`._

### Run test by filename

You can run the tests of a specific test by including the filename.

```bash
npm test temperature.test.js
```

### Run tests by pattern

Pass a pattern to run only matching tests. Examples:

- Match a short pattern (matches `race.test.js` and `rockPaperScissors.test.js`):

```bash
npm test r
```

- Run all tests in challenge 1 (Temperature):

```bash
npm test 1
```

### Run tests in watch mode:

```bash
npm run test:watch
```

_Other npm scripts (those with custom names) must be invoked with `npm run <script>`._

[Back to top](#top)

## Contributing to webpage (as a developer)

1. From repo root, change directory to `webpage` directory

```bash
cd  webpage
```

2. Install dependencies:

```bash
npm install
```

3. Start local development server

You have two options:

**Option A: Standard Development Server**

```bash
npm run dev
```

Starts a development server at `http://localhost:5173/`.

**Option B: Development Server with CLI Enabled**

```bash
npm run dev:cli
```

Starts a development server at `http://localhost:5173/` with the CLI tool enabled.

4. Run tests and see code coverage

```bash
npm run coverage
```

Code coverage will be outputted to `webpage/coverage/` directory.

[Back to top](#top)

### Debug webpage in VSCode

**For a more detailed guide, see [Microsoft’s official documentation on debugging React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react)**

_Note that, as a complement to debugging in VSCode, the [React Developer Tools browser extension](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) is recommended. The extension's component view, for example, allows you to interact with the component tree while viewing the React app as it is rendered to the browser._

1. On VSCode, open any TypeScript (.tsx) file in `webpage/src`.

2. On left-side panel click on ‘Run and Debug’ (shortcut: Ctrl + Shift + D).

3. On 'Run and Debug' view, click ‘create a launch.json file’. (If you do not see this file, the reason is a `.vscode/launch.json` file already exists). You should will be presented with a list of debuggers, among them various web browsers such as Edge and Chrome. Pick one of these web browsers as a debugger. (This example assumes you pick Edge since it, installed by default, will always be available). Once you select a debugger, a new JSON file will be created that will be ignored by `.gitignore`: `.vscode/launch.json`.

4. In this `launch.json` file you should see the `webRoot` property. By default, it will have the value `${workspaceFolder}`. The problem with this value is that the debugger will look for the React app in the project root directory when, in actuality, the React app is located in the `webpage` directory. For this reason, update this value to `${workspaceFolder}/webpage`.

5. By default, the value for the `url` property will be `http://localhost:808,` but the development server is configured to start on port 5173. Therefore, update the value of the `url` property to `http://localhost:5173`.

The final `launch.json` file should look as follows.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "msedge",
      "request": "launch",
      "name": "Launch Edge against localhost",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/webpage"
    }
  ]
}
```

6. Start the development server by following the [previous instructions](#contributing-to-webpage-as-a-developer). Once the local development server has started on `http://localhost:5173/`, press the green play button on the Run and Debug view (shortcut: F5) to start debugging. (Note that the development server must be running before you can start debugging).

[Back to top](#top)
