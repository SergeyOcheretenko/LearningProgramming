package main

import "fmt"

func main() {
    var (
        number int
        count int = 0
        max int = 0
    )
    
    for fmt.Scan(&number); number != 0; fmt.Scan(&number) {
        if number > max {
            max = number
            count = 0
        }
        
        if number == max {
            count = count + 1
        }
    }
    fmt.Println(count)
}
