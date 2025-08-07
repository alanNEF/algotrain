package main

type Step[T comparable] struct {
	item T
	pos  []int
}

type Solution[T comparable] struct {
	steps []Step[T]
}

func (s *Solution[T]) AddStep(item T, pos []int) {
	s.steps = append(s.steps, Step[T]{item, pos})
}

func (s *Solution[T]) GetSteps() []Step[T] {
	return s.steps
}
