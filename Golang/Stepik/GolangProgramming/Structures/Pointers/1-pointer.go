package main

import "fmt"

func test(x *int) {
    *x = *x + 100
}
func main() {
    x := 5
    test(&x)
    fmt.Println(x) // 105
}
