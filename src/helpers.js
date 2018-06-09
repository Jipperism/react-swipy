export const getDirection = offset => (offset > 0 ? "right" : "left");
export const getOpacity = (offset, limit) => 1 - Math.abs(offset) / limit;
export const getOffset = (start, end) => -((start - end) * 0.75);
export const getEvent = e => (e.touches ? e.touches[0] : e);
export const withX = fn => e => fn(getEvent(e).pageX);
export const getLimitOffset = (limit, direction) =>
  direction === "right" ? limit : -limit;
