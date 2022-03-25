package main

import (
    "strconv"
    "bufio"
    "fmt"
    "os"
)

func main() {
    var (
        str_elem string 
        counter int
    )

    scanner := bufio.NewScanner(os.Stdin)
    scanner.Scan()
    text := scanner.Text() 
    rs := []rune(text)
    
    first_rune := []rune{}
    second_rune := []rune{}
    
    for i, elem := range rs {
        str_elem = string(elem)
        
        if str_elem == ";" {
            counter = i
            break
        }
        
        if str_elem == " " {
            continue   
        }
        
        if str_elem == "," {
            first_rune = append(first_rune, rune('.'))   
        } else {
            first_rune = append(first_rune, elem) 
        }
    }
    
    for i := counter + 1; i < len(rs); i++ {
        str_elem = string(rs[i])
                
        if str_elem == " " {
            continue   
        }
        
        if str_elem == "," {
            second_rune = append(second_rune, rune('.'))   
        } else {
            second_rune = append(second_rune, rs[i]) 
        }
    }
    
    first_string := string(first_rune)
    second_string := string(second_rune)
    
    first_number, _ := strconv.ParseFloat(first_string, 32)
    second_number, _ := strconv.ParseFloat(second_string, 32)
    
    result := first_number / second_number
    
    fmt.Println(first_number)
    fmt.Println(second_number)
    fmt.Printf("%.4f\n", result)
}
