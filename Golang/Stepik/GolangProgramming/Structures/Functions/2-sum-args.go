package main
import "fmt"

func sumInt(numbers ...int) (int, int) {
    var (
        count int = len(numbers)
        sum int = 0
    )
    
    for _, elem := range numbers {
        sum = sum + elem
    }
    
    return count, sum
}

func main() {
	count, sum := sumInt(1, 5)
	fmt.Println(count, sum) // 2, 6
}