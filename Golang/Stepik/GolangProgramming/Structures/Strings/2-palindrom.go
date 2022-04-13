package main

import (
    "fmt"
    "bufio"
    "os"
	"strings"
)

func main() {
    text, _ := bufio.NewReader(os.Stdin).ReadString('\n')
	text = strings.TrimSpace(text)
    
    rs := []rune(text)
    length := len(rs)
    flag := true
    
    for i := 0; i <= length / 2; i++ {
        if rs[i] != rs[length - 1 - i] {
            flag = false
            break
        }
    }
    
    if flag {
        fmt.Println("Палиндром")
    } else {
        fmt.Println("Нет")
    }
}