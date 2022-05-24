**TODO**

- [ ] Send the error through error stream in headLib.js
- [ ] log the headFiles instead of returning the string
- [ ] Refactor the parse function

**MAYBE**

- [ ] Consider separating the tests.
- [ ] Consider moving the split and join to stringUtils.js

**DONE**

- [x] move the parse sub functions to separate files.
- [x] Test sub functions in parseOptions
- [x] Implement parseOptions
- [x] Make functions for error messages.
- [x] fix iterating over null in parse when option only specified __(head -n )__
- [x] Validate after parse
  - [x] Report if no value given with option
  - [x] Report if both options given
  - [x] Report if wrong option given
  - [x] Report if no count is given
- [x] Implement `--help` option
- [x] Return the error message instead of throwing errors.
  - [x] head --help
  - [x] no count is gven
  - [x] Bad file given
  - [x] -n and -c are given (invalid option)
- [x] Move the validations in parse to validators file.
- [x] Write main file and test main
  - [x] make the default values in main.
  - [x] need to parse the option (if accepts)
  - [x] make it work for multiple files.
- [x] Change the parser to loop from regex.
- [x] Change the head contract to accept the option.
- [x] ~~Consider different approach instead of deciding actions using ternary.~~
- [x] ~~Consider changing name of `actionToPerform`~~
- [x] Think about how to accept options.
- [x] Implement the command line interface
- [x] Implement `head -c characters`
- [x] Change the contract of `linesUpTo` by taking the content itself
- [x] Implement options using object
- [x] Consider is 'getLines' a good function name?
- [x] Consider changing `linesToShow` variable name.
- [x] Refactor head .
  - [x] Extracted the for loop
  - [x] Consider alternative for `for` loop
- [x] Implement `head -n lineCount` 
- [x] Implement `head without options`
  - [x] Implement head for a single line.
  - [x] Implement head for 2 lines.
  - [x] Implement head up to 10 lines as default.
- [x] Make a plan
- [x] Make the directory structure of src and test
- [x] Verify mocha existence
- [x] Reinvestigate `head` for any leftOut information
- [x] Check if the master branch is the one taking commits.
