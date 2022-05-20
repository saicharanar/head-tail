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

