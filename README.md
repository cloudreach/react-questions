# react-questions
Clone this repo for our React interview.

There are 4 questions, each with its own directory. For each question, use the instructions here to
know what to do. Do all the work for each question inside that question's directory.

## Question 1
Write a simple react component for a Card using es6 syntax. This component has no props and should
just render its children inside a div with the class "card".

We have created a file and imported React at the top, add the component in there.

## Question 2
We have a component that is managing its own state. Refactor it so the state is managed using Redux.

## Question 3
There is a bug in the `Accordion` component where it doesn't correctly expand. Can you fix it? It may be something
to do with component lifecycles.

## Question 4
This is a question that is about general JS knowledge, not to do with React.

Imagine representing a grid-shaped game map as a 2-dimensional array. Each value of this array is
boolean `true` or `false` representing whether that part of the map is passable (a floor) or blocked
(a wall). Write a function `function pathfind(A, P, Q) { }`that takes such an array `A` and 2 points
`P` and `Q` in a 2-dimensional space, and returns the distance of the shortest path between those
points, respecting the walls in the map.

eg. Given the map (where '.' is passable - `true`, and '#' is blocked - `false`)
```
.P...
.###.
.....
..Q..
.....
```

then `pathfind(A, P, Q)` should return `6`.
