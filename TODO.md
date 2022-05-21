**MUST**
- [ ] Pause and rethink and don't rush.

**TODO**

- [ ] Implement parseOptions
  - [x] Report if no value given with option
  - [x] Report if both options given
  - [ ] Report if wrong option given
  - [ ] Report if no count is given
- [ ] Write main file and test main
  - [x] make the default values in main.
  - [x] need to parse the option (if accepts)
  - [ ] make it work for multiple files.
- [ ] Implement `--help` option
- [ ] Move the split and join to stringUtils.js


**MAYBE**

- [ ] Consider separating the tests.

**DONE**

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
