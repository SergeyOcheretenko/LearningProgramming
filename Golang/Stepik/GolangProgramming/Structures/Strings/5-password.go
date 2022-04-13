package main

import (
    "fmt"
    "unicode"
)

func check_password(password string) bool {
    rs := []rune(password)
    
    if len(rs) < 5 {
        return false
    }
    
    for _, elem := range rs {
        if !(unicode.Is(unicode.Latin, elem) || unicode.IsDigit(elem)) {
            return false
        }
    }
    
    return true
}

func main() {
    var password string
    fmt.Scan(&password)
    
    result := check_password(password)
    
    if result {
        fmt.Println("Ok")   
    } else {
        fmt.Println("Wrong password")   
    }
}
