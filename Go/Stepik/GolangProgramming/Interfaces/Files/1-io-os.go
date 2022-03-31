package main

import (
    "io"
    "os"
    "bufio"
    "strconv"
)

func main() {
    var (
        s string
        sum int = 0
        number int
    )
	scanner := bufio.NewScanner(os.Stdin)
    for ; ; {
        scanner.Scan()
        s = scanner.Text()
        if s == "" {
            break
        }

        number, _ = strconv.Atoi(s)
        sum += number
    }

    string_sum := strconv.Itoa(sum)
    io.WriteString(os.Stdout, string_sum + "\n")
}
