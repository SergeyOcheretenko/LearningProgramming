package main

import "fmt"

func main() {
    var a, b, average float32
    fmt.Scan(&a, &b)
    average = (a + b) / 2
    fmt.Println(average)
}
