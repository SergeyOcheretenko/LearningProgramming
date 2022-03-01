package main

import "fmt"

func main() {
    var number, last int
    fmt.Scan(&number)
    last = number % 10
    if ((number >= 11 && number <= 19) ||
        (last == 0 || (last >= 5 && last <= 9))) {
        fmt.Printf("%d korov", number)   
    } else if last == 1 {
        fmt.Printf("%d korova", number)
    } else {
        fmt.Printf("%d korovy", number)   
    }
}
