package main

import "fmt"

func main() {
    var (
        count int = 0
        n, min, number int
        slice []int
    )
        
    fmt.Scan(&n)
    
    for i := 0; i < n; i++ {
        fmt.Scan(&number)
        slice = append(slice, number)
    }
    
    min = slice[0]
    
    for _, elem := range slice {
        if elem < min {
            min = elem
            count = 0
        }
        
        if elem == min {
            count++   
        }
    }
    
    fmt.Println(count)
}
