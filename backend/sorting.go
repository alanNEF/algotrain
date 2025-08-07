package main

import "cmp"

func BubbleSort[T cmp.Ordered](arr []T) Solution[T] {
	solution := Solution[T]{
		steps: []Step[T]{},
	}
	for i := 0; i < len(arr); i++ {
		for j := 0; j < len(arr)-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
				solution.AddStep(arr[j+1], []int{j, j + 1})
			}
		}
	}
	return solution
}

func BubbleSortSmart[T cmp.Ordered](arr []T) Solution[T] {
	solution := Solution[T]{
		steps: []Step[T]{},
	}
	swapped := true
	for i := 0; i < len(arr) && swapped; i++ {
		swapped = false
		for j := 0; j < len(arr)-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
				swapped = true
				solution.AddStep(arr[j+1], []int{j, j + 1})
			}
		}
	}
	return solution
}

// func SelectionSort[T comparable](arr []T) []T {}
