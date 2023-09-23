async function getLastVersion() {
    const response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
    const data = await response.json();

    const lastVersion = data[0];

    return lastVersion;
}

export default async function buildUrl(category, endpoint) {
    const lastVersion = await getLastVersion();
    const language = "en_US";

    const buildedURL = `http://ddragon.leagueoflegends.com/cdn/${lastVersion}/${category}/${language}/${endpoint}`;

    return buildedURL;
}