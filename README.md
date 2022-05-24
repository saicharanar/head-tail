**TAIL**

  display last lines of the file

**Usage**

  usage: tail [-c # | -n #] [file ...]

**Synopsis**

  - tail [ file... ]

    * display the `last 10 lines` of a file

  - tail -n lines [ file... ]

    * displays the `given number of lines` from end
  
  - tail -c bytes [ file... ]
  
    * displays from the given bytes to the end 

  - tail +[ num ] [ files... ]

    * displays from `given number of line`

  - tail -[ num ] [ files... ]
    
    * displays the `given number of lines` from end (same as -n without -n).

**validations**
  * `-n` and `-c` => usage: tail [-c # | -n #] [file ...]
  
  * `-n|c` with no `number` => tail: illegal offset -- ${optionValue}

  * `Not a valid option`  =>

    tail: illegal option -- a
    usage: tail [-c # | -n #] [file ...]

  * `Wrong value for option` => tail: illegal offset -- c

**HEAD** 
  
  display first lines of a file

**Usage**

  head [-n lines | -c bytes] [file ...]


**Synopsis**

  - head file
    
    * This filter displays the `first count lines or bytes` of each of the `specified files`. Default lines are `10`.
  
  - head -n lines

    * Specifies the number of lines to display up to.

  - head -c bytes

    * Specifies the number of character to display in the firstLine
    * Can go up to any lines until the eof.
    * white spaces also considered as a character `('\n && \t')`
    * Cannot be merged with -n

