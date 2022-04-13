package main

import (
    "fmt"
    "math"
)

func triangle(a, b float64) float64 {
    return math.Sqrt(a * a + b * b)   
}

func main() {
    var a, b, result float64
    fmt.Scan(&a, &b)
    
    result = triangle(a, b)
    fmt.Println(result)
}
