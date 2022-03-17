package main

import "fmt"

func main() {
    m := map[int]int{
	    12: 2,
	    1:  5,
    }

    fmt.Println(m) // map[12:2 1:5]
    fmt.Println(m[12]) // 2
    
    delete(m, 12)
    fmt.Println(m) // map[1:5]
}
