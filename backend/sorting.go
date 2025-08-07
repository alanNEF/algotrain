package main

import "cmp"

func BubbleSort[T cmp.Ordered](arr []T) []T {
	for i := 0; i < len(arr); i++ {
		for j := 0; j < len(arr)-i-1; j++ {
			if cmp.Less(arr[j], arr[j+1]) {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
	return arr
}

func BubbleSortSmart[T cmp.Ordered](arr []T) []T {
	swapped := true
	for i := 0; i < len(arr) && swapped; i++ {
		swapped = false
		for j := 0; j < len(arr)-i-1; j++ {
			if cmp.Less(arr[j], arr[j+1]) {
				arr[j], arr[j+1] = arr[j+1], arr[j]
				swapped = true
			}
		}
	}
	return arr
}

// func SelectionSort[T comparable](arr []T) []T {}
