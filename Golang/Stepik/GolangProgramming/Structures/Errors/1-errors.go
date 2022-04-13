package main

import "fmt"

func divide(a int, b int) int {
	return a / b
}

func main() {
	var a, b int
	_, err := fmt.Scan(&a, &b)
	if err != nil {
		fmt.Println("Проверьте типы входных параметров")
	} else if b == 0 {
        fmt.Println("Нельзя делить на ноль")
    } else {
		fmt.Println(divide(a, b))
	}
}
