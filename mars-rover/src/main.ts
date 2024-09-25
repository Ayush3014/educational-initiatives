enum Direction {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W',
}

class Position {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly direction: Direction
  ) {}

  static moveForward(position: Position): Position {
    let x = position.x,
      y = position.y;
    switch (position.direction) {
      case Direction.N:
        y += 1;
        break;
      case Direction.E:
        x += 1;
        break;
      case Direction.S:
        y -= 1;
        break;
      case Direction.W:
        x -= 1;
        break;
    }
    return new Position(x, y, position.direction);
  }

  static turnLeft(position: Position): Position {
    const newDirection = {
      [Direction.N]: Direction.W,
      [Direction.W]: Direction.S,
      [Direction.S]: Direction.E,
      [Direction.E]: Direction.N,
    }[position.direction];
    return new Position(position.x, position.y, newDirection);
  }

  static turnRight(position: Position): Position {
    const newDirection = {
      [Direction.N]: Direction.E,
      [Direction.E]: Direction.S,
      [Direction.S]: Direction.W,
      [Direction.W]: Direction.N,
    }[position.direction];
    return new Position(position.x, position.y, newDirection);
  }
}

interface Command {
  execute(): void;
}

class MoveCommand implements Command {
  constructor(private rover: Rover) {}
  execute(): void {
    this.rover.move();
  }
}

class TurnLeftCommand implements Command {
  constructor(private rover: Rover) {}
  execute(): void {
    this.rover.turnLeft();
  }
}

class TurnRightCommand implements Command {
  constructor(private rover: Rover) {}
  execute(): void {
    this.rover.turnRight();
  }
}

class Rover {
  constructor(private position: Position, private grid: GridComponent) {}

  move(): void {
    const newPosition = Position.moveForward(this.position);
    if (!this.grid.hasObstacle(newPosition)) {
      this.position = newPosition;
    }
  }

  turnLeft(): void {
    this.position = Position.turnLeft(this.position);
  }

  turnRight(): void {
    this.position = Position.turnRight(this.position);
  }

  getStatus(): string {
    return `Rover is at (${this.position.x}, ${this.position.y}) facing ${this.position.direction}`;
  }
}

interface GridComponent {
  hasObstacle(position: Position): boolean;
}

class Grid implements GridComponent {
  private components: GridComponent[] = [];

  constructor(
    private width: number,
    private height: number,
    obstacles: Position[]
  ) {
    obstacles.forEach((pos) => this.components.push(new Obstacle(pos)));
  }

  hasObstacle(position: Position): boolean {
    if (
      position.x < 0 ||
      position.x >= this.width ||
      position.y < 0 ||
      position.y >= this.height
    ) {
      return true;
    }
    return this.components.some((component) => component.hasObstacle(position));
  }
}

class Obstacle implements GridComponent {
  constructor(private position: Position) {}

  hasObstacle(position: Position): boolean {
    return this.position.x === position.x && this.position.y === position.y;
  }
}

class CommandFactory {
  static createCommand(instruction: string, rover: Rover): Command {
    switch (instruction) {
      case 'M':
        return new MoveCommand(rover);
      case 'L':
        return new TurnLeftCommand(rover);
      case 'R':
        return new TurnRightCommand(rover);
      default:
        throw new Error(`Unknown command: ${instruction}`);
    }
  }
}

// Example Usage
const grid = new Grid(10, 10, [
  new Position(2, 2, Direction.N),
  new Position(3, 5, Direction.N),
]);
const rover = new Rover(new Position(0, 0, Direction.N), grid);

const commandStrings = ['M', 'M', 'R', 'M', 'L', 'M'];
const commands = commandStrings.map((cmd) =>
  CommandFactory.createCommand(cmd, rover)
);

commands.forEach((command) => {
  try {
    command.execute();
    console.log(rover.getStatus());
  } catch (error: any) {
    console.error(`Error executing command: ${error.message}`);
  }
});

console.log('Final ' + rover.getStatus());
