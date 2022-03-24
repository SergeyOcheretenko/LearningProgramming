package main

import (
	"fmt"
	"strconv"
	"unicode"
)

func adding(x, y string) int64 {
	first_number := []rune{}
	second_number := []rune{}

	x_rune := []rune(x)
	y_rune := []rune(y)

	for _, elem := range x_rune {
		if unicode.IsDigit(elem) {
			first_number = append(first_number, elem)
		}
	}

	for _, elem := range y_rune {
		if unicode.IsDigit(elem) {
			second_number = append(second_number, elem)
		}
	}

	x_without_trash, _ := strconv.ParseInt(string(first_number), 10, 64)
	y_without_trash, _ := strconv.ParseInt(string(second_number), 10, 64)

	return x_without_trash + y_without_trash
}

func main() {
	first_trash := "%&fsd8gr&&&&0"   // must be 80
	second_trash := "3hh&&&???5''#@" // must be 35

	result := adding(first_trash, second_trash)

	fmt.Println(result) // 115
}
