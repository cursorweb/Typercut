There are three variables to keep track of position.

1. `i`
    1. `i` keep tracks of the current position of the word.
    
    For example, the `o` in `coder` is always `1` regardless of where `coder` is.

    2. Once `inWord` is false, `i` goes back to `0` and `wordi` increases.
2. `wordi` keeps track of the current word. There will be an `Word[]`, so it is important to keep track of where `wordi` is.
