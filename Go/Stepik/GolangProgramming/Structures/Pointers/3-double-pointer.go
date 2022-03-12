package main

import "fmt"

func main() {
   a := 200

   b := &a
   *b++
   
   c := &b
   **c++ // pointer to pointer
   
   fmt.Println(a) // 202
}
