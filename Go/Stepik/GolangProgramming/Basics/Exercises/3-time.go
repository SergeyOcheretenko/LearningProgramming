package main 

import "fmt"

func main() {
    var seconds, hours, minutes, rest int
    fmt.Scan(&seconds)
    
    hours = seconds / 3600
    rest = seconds - hours * 3600
    minutes = rest / 60
    
    fmt.Printf("It is %d hours %d minutes.", hours, minutes)
}
