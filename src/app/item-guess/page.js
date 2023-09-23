import getRandomItem from "../api/item"

export default async function Page() {
    
    const item = await getRandomItem();

    const regexBrToNl = /(<br>)+/g
    const newlinedDescription = item.description.replace(regexBrToNl, ".\n")

    const regexAntiBalise = /<[^>]*>/g
    const baliselessDescription = newlinedDescription.replace(regexAntiBalise, "");

    const regexTraillingDots = /\.+/g
    const cleanedDescription = baliselessDescription.replace(regexTraillingDots, ".");

    return (
        <div>
            <p className="text-slate-100" style={{ whiteSpace: "pre-wrap" }}>{ cleanedDescription }</p>
        </div>
    );
}