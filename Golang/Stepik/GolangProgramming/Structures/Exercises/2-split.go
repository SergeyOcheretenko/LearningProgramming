package main

import (
    "fmt"
    "strings"
)

func separator(text string) string {
    splited_text := strings.Split(text, "")
    result := strings.Join(splited_text, "*")
    
    return result
}

func main() {
    var text string
    fmt.Scan(&text)
    
    fmt.Println(separator(text))
}
