const TAU = Math.PI * 2;
const SNAP_FACTOR: Radians = TAU / 20;

/* Used for documentation */
type Radians = number;

/* Represents a coordinate on the canvas */
type CoordinateType = {
  x: number;
  y: number;
};

/* The format to display a segment */
type FormatType = {
  color: string;
  label: string;
};

/* Input proportions */
type ProportionType = {
  proportion: number;
  collapsed: boolean;
  format: FormatType;
};

/* Represents a slice of the pie chart */
type PieSliceType = {
  index: number;
  format: FormatType;
  startingAngle: Radians;
  arcSize: Radians;
  collapsed: boolean;
  angleDragDistance: Radians;
};

/* Contains all the parameters for the constructor of a AdjustablePieChart */
type AdjustablePieChartProperties = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  proportions: Array<ProportionType>;
  onChange: (chart: AdjustablePieChart) => void;
  radiusMultiplier?: number;
  collapsing?: boolean;
  minAngle?: Radians;
  minHoverDistance?: number;
};

class AdjustablePieChart {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  onChange: (chart: AdjustablePieChart) => void;
  slices: Array<PieSliceType>;

  radiusMultiplier = 0.9;
  collapsing = false;
  minAngle: Radians = SNAP_FACTOR;
  minHoverDistance = 25;

  draggedSlice?: PieSliceType = undefined;
  hoverIndex = -1;

  constructor(parameters: AdjustablePieChartProperties) {
    this.canvas = parameters.canvas;
    this.context = parameters.context;
    this.onChange = parameters.onChange;
    this.slices = this.generateSlicesFromProportions(parameters.proportions);

    this.radiusMultiplier =
      parameters.radiusMultiplier ?? this.radiusMultiplier;
    this.collapsing = parameters.collapsing ?? this.collapsing;
    this.minAngle = parameters.minAngle ?? this.minAngle;
    this.minHoverDistance =
      parameters.minHoverDistance ?? this.minHoverDistance;

    const touchStart = (event: TouchEvent | MouseEvent) => {
      this.draggedSlice = this.getTarget(this.getMouseLocation(event));
      if (this.draggedSlice) {
        event.preventDefault();
        this.hoverIndex = this.draggedSlice.index;
      }
    };

    const touchMove = (event: TouchEvent | MouseEvent) => {
      const dragLocation = this.getMouseLocation(event);

      // If we're not dragging a slice, attempt to update the hover index
      if (!this.draggedSlice) {
        const hoveredTarget = this.getTarget(dragLocation);
        this.hoverIndex = hoveredTarget ? hoveredTarget.index : -1;
        if (this.hoverIndex !== -1) {
          console.log(this.hoverIndex);
        }
        this.draw();
        return;
      }

      // Get angle of grabbed slice from center of pie
      const newAngle = Math.atan2(dragLocation.y, dragLocation.x);

      // Snap angle so it's always in increments of 5%
      const snappedAngle = Math.round(newAngle / SNAP_FACTOR) * SNAP_FACTOR;

      this.moveSliceAngle(this.draggedSlice.index, snappedAngle);
      this.draw();
    };

    const touchEnd = () => {
      // Only do anything if we're done dragging a slice
      if (this.draggedSlice) {
        this.draggedSlice = undefined;
        this.draw();
      }
    };

    // Add touch screen events if the device is a touch-screen
    if (isTouchDevice()) {
      this.canvas.addEventListener("touchstart", touchStart);
      this.canvas.addEventListener("touchmove", touchMove);
      document.addEventListener("touchend", touchEnd);
    }

    // Add mouse events
    this.canvas.addEventListener("mousedown", touchStart);
    this.canvas.addEventListener("mousemove", touchMove);
    document.addEventListener("mouseup", touchEnd);

    // Render the pie chart
    this.draw();
  }

  get centerX() {
    return Math.floor(this.canvas.width / 2);
  }

  get centerY() {
    return Math.floor(this.canvas.height / 2);
  }

  get radius() {
    return Math.min(this.centerX, this.centerY) * this.radiusMultiplier;
  }

  drawSlice(slice: PieSliceType) {
    // Ignore collapsed slices
    if (slice.collapsed) {
      return;
    }

    const context = this.context;

    // Draw colored slice
    context.save();
    const endingAngle = slice.startingAngle + slice.arcSize;
    context.beginPath();
    context.moveTo(this.centerX, this.centerY);
    context.arc(
      this.centerX,
      this.centerY,
      this.radius,
      slice.startingAngle,
      endingAngle,
      false
    );
    context.closePath();
    context.strokeStyle = "#272727";
    context.lineWidth = 2;
    context.stroke();

    context.fillStyle = slice.format.color;
    context.fill();
    context.restore();

    // Draw label on top
    context.save();
    context.translate(this.centerX, this.centerY);
    context.rotate(slice.startingAngle);

    const fontSize = Math.floor(context.canvas.height / 25);
    const dx = this.radius - fontSize;
    const dy = this.centerY / 10;

    // TODO: Flip text if it's upside down

    context.textAlign = "right";
    context.fillStyle = "#272727";
    context.font = fontSize + "pt Ubuntu";
    context.fillText(slice.format.label, dx, dy);
    context.restore();
  }

  drawNode(slice: PieSliceType) {
    // Ignore collapsed slices
    if (slice.collapsed) {
      return;
    }

    const context = this.context;
    const { x, y } = this.polarToCartesian(slice.startingAngle);
    const radius = this.hoverIndex === slice.index ? 7 : 5;

    context.save();
    context.translate(this.centerX, this.centerY);
    context.fillStyle = "#ffffff";

    context.beginPath();
    context.arc(x, y, radius, 0, TAU, true);
    context.fill();
    context.stroke();
    context.restore();
  }

  draw() {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //
    this.updateArcAngles();

    // Draw each slice and then the drag nodes on top of that
    this.slices.forEach((slice) => this.drawSlice(slice));
    this.slices.forEach((slice) => this.drawNode(slice));

    // Run callback
    this.onChange(this);
  }

  getMouseLocation(event: MouseEvent | TouchEvent): CoordinateType {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;

    let x, y;

    if ("clientX" in event) {
      x = event.clientX;
      y = event.clientY;
    } else {
      x = event.targetTouches[0].clientX;
      y = event.targetTouches[0].clientY;
    }

    const position = {
      x: (x - rect.left - this.centerX) * scaleX,
      y: (y - rect.top - this.centerY) * scaleY,
    };
    return position;
  }

  generateSlicesFromProportions(
    proportions: Array<ProportionType>
  ): Array<PieSliceType> {
    // Sum of proportions
    const total = proportions.reduce((a, v) => a + v.proportion, 0);

    // Begin at 0
    let currentAngle = 0;

    // Use the proportions to reconstruct angles
    return proportions.map((prop, index) => {
      const arcSize = (TAU * prop.proportion) / total;

      const data = {
        index: index,
        format: prop.format,
        startingAngle: currentAngle,
        arcSize: arcSize,
        collapsed: arcSize <= 0,
        angleDragDistance: 0,
      };

      currentAngle = normalizeAngle(currentAngle + arcSize);
      return data;
    });
  }

  moveSliceAngle(targetIndex: number, newAngle: Radians) {
    const targetSlice = this.slices[targetIndex];
    if (!targetSlice) {
      return;
    }

    // TODO: Change arc size

    let angleDragDistance = smallestSignedAngleBetween(
      newAngle,
      targetSlice.startingAngle
    );

    const previousDragDistance = targetSlice.angleDragDistance;

    let rotationDirection = previousDragDistance > 0 ? 1 : -1;

    // Ignore linting here because prettier doesn't like when we put parentheses around our expressions
    // eslint-disable-next-line
    const sameDirection = previousDragDistance > 0 === angleDragDistance > 0;

    const greaterThanHalf =
      Math.abs(previousDragDistance - angleDragDistance) > Math.PI;

    if (greaterThanHalf && !sameDirection) {
      // Reverse the angle
      angleDragDistance =
        (TAU - Math.abs(angleDragDistance)) * rotationDirection;
    } else {
      rotationDirection = angleDragDistance > 0 ? 1 : -1;
    }

    targetSlice.angleDragDistance = angleDragDistance;

    // Set the new angle
    targetSlice.startingAngle = normalizeAngle(
      targetSlice.startingAngle + angleDragDistance
    );

    // TODO: Clean this up it's nasty

    // Search other angles
    let shifting = true;
    let collapsed = false;
    let numberOfAnglesShifted = 0;

    for (let ind = 1; ind < this.slices.length; ind++) {
      // Index to test each slice in order
      const index = mod(
        targetSlice.index + ind * rotationDirection,
        this.slices.length
      );
      const curSlice = this.slices[index];

      // Get angle from target start to this angle
      let startingAngleToNonDragged = smallestSignedAngleBetween(
        curSlice.startingAngle,
        targetSlice.startingAngle
      );

      // If angle is in the wrong direction then it should actually be over 180
      if (startingAngleToNonDragged * rotationDirection < 0) {
        startingAngleToNonDragged =
          (startingAngleToNonDragged * rotationDirection + TAU) *
          rotationDirection;
      }

      if (this.collapsing) {
        // Handle collapsing behavior
        // TODO: Collapsing happens 1 "tick" too soon

        const checkForSnap = !collapsed && !this.slices[index].collapsed;

        // Snap node to collapse and prevent going any further
        if (
          checkForSnap &&
          startingAngleToNonDragged > 0 &&
          angleDragDistance > startingAngleToNonDragged - this.minAngle
        ) {
          targetSlice.startingAngle = this.slices[index].startingAngle;
          curSlice.collapsed = true;
          collapsed = true;
        } else if (
          checkForSnap &&
          startingAngleToNonDragged < 0 &&
          angleDragDistance < startingAngleToNonDragged + this.minAngle
        ) {
          targetSlice.startingAngle = this.slices[index].startingAngle;
          curSlice.collapsed = true;
          collapsed = true;
        }
      } else {
        // Handle shifting behavior
        // TODO: The next slice is shifted by 2*minAngle, the slices after that are fine

        // Shift all other angles along
        const shift = (numberOfAnglesShifted + 1) * this.minAngle;
        if (
          shifting &&
          startingAngleToNonDragged > 0 &&
          angleDragDistance > startingAngleToNonDragged - shift
        ) {
          curSlice.startingAngle = normalizeAngle(
            curSlice.startingAngle +
              (angleDragDistance - startingAngleToNonDragged) +
              shift
          );

          numberOfAnglesShifted += 1;
        } else if (
          shifting &&
          startingAngleToNonDragged < 0 &&
          angleDragDistance < startingAngleToNonDragged + shift
        ) {
          curSlice.startingAngle = normalizeAngle(
            curSlice.startingAngle -
              (startingAngleToNonDragged - angleDragDistance) -
              shift
          );

          numberOfAnglesShifted += 1;
        } else {
          shifting = false;
        }
      }
    }
  }

  getSliceSizePercentage(index: number): number {
    const slice = this.slices[index];
    if (!slice || slice.collapsed) {
      return 0;
    }

    return (slice.arcSize / TAU) * 100;
  }

  getAllSliceSizePercentages(): Array<number> {
    return this.slices.map((_, index) => this.getSliceSizePercentage(index));
  }

  getTarget(location: CoordinateType): PieSliceType | undefined {
    const closestSlice = this.slices.reduce((prev, cur) => {
      const prevDistance = distance(
        location,
        this.polarToCartesian(prev.startingAngle)
      );
      const curDistance = distance(
        location,
        this.polarToCartesian(cur.startingAngle)
      );

      return curDistance < prevDistance ? cur : prev;
    });

    const sliceDistance = distance(
      location,
      this.polarToCartesian(closestSlice.startingAngle)
    );
    return sliceDistance < this.minHoverDistance ? closestSlice : undefined;
  }

  updateArcAngles() {
    for (let ind = 0; ind < this.slices.length; ind++) {
      const curSlice = this.slices[ind];
      if (curSlice.collapsed) {
        curSlice.arcSize = 0;
        continue;
      }

      let nextSlice = undefined;

      // Find the next non-collapsed slice
      for (let offset = 1; offset < this.slices.length; offset++) {
        nextSlice = this.slices[(ind + offset) % this.slices.length];
        if (!nextSlice.collapsed) break;
        nextSlice = undefined;
      }

      // If there is no next slice, the current one takes up the whole circle
      if (!nextSlice) {
        curSlice.arcSize = TAU;
        continue;
      }

      let arcSize = nextSlice?.startingAngle - curSlice.startingAngle;
      if (arcSize < 0) {
        arcSize += TAU;
      }
      curSlice.arcSize = arcSize;
    }
  }

  getVisibleSegments(): Array<PieSliceType> {
    // TODO: Implement this
    return [];
  }

  polarToCartesian(angle: Radians): CoordinateType {
    return {
      x: this.radius * Math.cos(angle),
      y: this.radius * Math.sin(angle),
    };
  }
}

const smallestSignedAngleBetween = (
  target: Radians,
  source: Radians
): Radians => Math.atan2(Math.sin(target - source), Math.cos(target - source));

const distance = (coord1: CoordinateType, coord2: CoordinateType): Number =>
  Math.hypot(coord1.x - coord2.x, coord1.y - coord2.y);

const mod = (x: number, y: number) => ((x % y) + y) % y;

const normalizeAngle = (angle: Radians): Radians =>
  mod(angle + Math.PI, TAU) - Math.PI;

// Works on most browsers
const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints; // works on most browsers

export { AdjustablePieChart };
export type { ProportionType };
