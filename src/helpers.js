export const getDirection = offset => (offset > 0 ? "right" : "left");
export const getOffset = (start, end, direction) => {
  let result = -((start - end) * 0.75);
  if (direction === "left") {
    result = Math.min(result, 0);
  } else if (direction === "right") {
    result = Math.max(0, result);
  } else if (direction === "none") {
    result = 0;
  }
  return result;
};
export const getEvent = e => (e.touches ? e.touches[0] : e);
export const withX = fn => e => fn(getEvent(e).pageX);
export const getLimitOffset = (limit, direction) =>
  direction === "right" ? limit : -limit;
export const getOpacity = (offset, limit, min) =>
  1 -
  (Math.abs(offset) < min
    ? 0
    : (Math.abs(offset) - min) / Math.abs(limit - min));
