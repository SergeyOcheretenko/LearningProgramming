package main

import "fmt"

func main() {
    var (
        n, number int
        slice []int
    )
    
    fmt.Scan(&n)
    
    for i := 0; i < n; i++ {
        fmt.Scan(&number)
        if i % 2 == 0 {
            slice = append(slice, number)   
        }
    }
    
    // fmt.Println(slice)
    
    for _, elem := range slice {
        fmt.Printf("%v ", elem)   
    }
}
