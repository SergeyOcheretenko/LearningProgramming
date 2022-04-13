package main

import (
    "fmt"
    "strconv"
)

func main() {
    fn := func(number uint) uint {
        var (
            elem_uint uint64
            elem_string string
        )
    
        number_string := strconv.FormatUint(uint64(number), 10)
    
        array_number := []rune(number_string)
        array := []rune{}
    
        for _, elem := range array_number {     
            elem_string = string(elem)
            elem_uint, _ = strconv.ParseUint(elem_string, 10, 0)
        
            if elem_uint % 2 == 0 && elem_uint != 0 {
                array = append(array, elem)   
            }
        }
    
        result_string := string(array)
        result, _ := strconv.ParseUint(result_string, 10, 0)
        
        if result == 0 {
            return 100   
        }
        
        return uint(result)   
    }

    fmt.Println(fn(727178)) // 28
    fmt.Println(fn(90573)) // 100, because result is 0
    fmt.Println(fn(45870)) // 48
}
