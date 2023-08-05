import { rgb } from "d3";

export function generateNodes(allNames) {
    return allNames.map((item) => ({ id: item.name }));
}

export function generateLinks(items) {
  return items.map(({ person1, person2, amount }) => ({
    source: person1,
    target: person2,
    amount,
  }));
}

export const config = {
    freezeAllDragEvents: true,
    nodeHighlightBehavior: true,
    node: {
      color: "red",
      highlightStrokeColor: "black",
      fontSize: 15,
      size:100,
    },
    link: {
      highlightColor: "black",
      renderLabel: true,
      labelProperty: "amount",
      fontSize: 15,
      // strokeWidth: 3, // Increase link thickness (you can adjust the value as needed)
      // distance: 450, // Increase link length (you can adjust the value as needed)
    },
    directed: true,
    height: 600,
    width: 600,
  };

