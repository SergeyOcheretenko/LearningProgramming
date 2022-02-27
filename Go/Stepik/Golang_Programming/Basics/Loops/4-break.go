package main

import "fmt"

func main() {
    var number int
    for fmt.Scan(&number); number <= 100 ; fmt.Scan(&number) {
        switch {
            case number < 10: continue
            default: fmt.Println(number)
        }
    }
}
