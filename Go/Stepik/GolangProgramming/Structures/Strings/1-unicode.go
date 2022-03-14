package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"unicode"
	"unicode/utf8"
)

func main() {
	text, _ := bufio.NewReader(os.Stdin).ReadString('\n')
	text = strings.TrimSpace(text)
	rs := []rune(text)
	length := utf8.RuneCountInString(text)

	last := rs[length-1]
	first := rs[0]

	if last == '.' && unicode.IsUpper(first) {
		fmt.Println("Right")
	} else {
		fmt.Println("Wrong")
	}
}
