package main

import (
    "fmt"
    "strings"
)

func main() {
    var text string
    fmt.Scan(&text)
    
    for _, elem := range text {
        if strings.Count(string(text), string(elem)) >= 2 {
            text = strings.Replace(string(text), string(elem), "", -1)   
        }
    }
    
    fmt.Println(text)
}