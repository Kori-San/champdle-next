import randomPropertyName from "../lib/object";
import buildUrl from "./url";

async function getAllItems() {
    const buildedURL = await buildUrl("data", "item.json");

    const response = await fetch(buildedURL);
    const rawData = await response.json();

    const items = rawData.data;

    return items;
}

export default async function getRandomItem() {
    const items = await getAllItems()

    const randomItem = randomPropertyName(items);

    return randomItem;
}