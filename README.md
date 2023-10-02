# To-do List

## Features
- ~~Overall app will have 3 columns: "To-do", "In progress", "Done"~~
- ~~Each column can hold To-do Items~~
- Items can be added and modified
- Items can be dragged to rearrange order within columns
- When an item moves to a column, it's by default the last one
- Items can be dragged across columns
- Item and column data should get persisted
- Bonus: add new columns on the fly, undo last change

## Components to build:
- App - tracks which columns exist + which items are in which column
- TodoColumn - takes in items as a prop
- TodoItem - takes in content as a prop