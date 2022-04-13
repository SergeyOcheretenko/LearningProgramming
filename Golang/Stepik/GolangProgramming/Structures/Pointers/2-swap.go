package main

import "fmt"

func swap(x *int, y *int) (int, int) {
    var cash int = *x
    *x = *y
    *y = cash
    return *x, *y
}

func main() {
    var (
        a int = 5
        b int = 8
    )
   
    fmt.Printf("a = %d. b = %d\n", a, b) // a = 5, b = 8

    a, b = swap(&a, &b)

    fmt.Printf("a = %d, b = %d\n", a , b) // a = 8, b = 5
}
