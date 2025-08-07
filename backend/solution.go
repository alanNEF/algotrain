package main

type Step[T comparable] struct {
	item T
	pos  []int
}

type Solution[T comparable] struct {
	steps []Step[T]
}

// Concrete types for JSON serialization
type StepJSON struct {
	Item int   `json:"item"`
	Pos  []int `json:"pos"`
}

type SolutionJSON struct {
	Steps []StepJSON `json:"steps"`
}

func (s *Solution[T]) AddStep(item T, pos []int) {
	s.steps = append(s.steps, Step[T]{item, pos})
}

func (s *Solution[T]) GetSteps() []Step[T] {
	return s.steps
}

// Convert generic solution to JSON-serializable format
func (s *Solution[T]) ToJSON() SolutionJSON {
	steps := make([]StepJSON, len(s.steps))
	for i, step := range s.steps {
		// Convert T to int for JSON (assuming T is int in this case)
		if item, ok := any(step.item).(int); ok {
			steps[i] = StepJSON{
				Item: item,
				Pos:  step.pos,
			}
		}
	}
	return SolutionJSON{Steps: steps}
}
